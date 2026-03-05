import nextConnect from "next-connect";
import multer from "multer";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { storage, db } from "@/lib/firebase";

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }, // Max file size: 10MB
});

// Disable Next.js bodyParser for this API route (required for multer)
export const config = {
  api: {
    bodyParser: false,
  },
};

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.single('image'));

apiRoute.put(async (req, res) => {
  try {
    const { blogId, title, subtitle, content } = req.body;

    if (!blogId) {
      return res.status(400).json({ error: "blogId is required." });
    }

    // Fetch the current blog document
    const blogRef = doc(db, "blogs", blogId);
    const blogSnap = await getDoc(blogRef);

    if (!blogSnap.exists()) {
      return res.status(404).json({ error: "Blog not found." });
    }

    let updatedFields = {};

    // Only update if provided
    if (title !== undefined) updatedFields.title = title;
    if (subtitle !== undefined) updatedFields.subtitle = subtitle;
    if (content !== undefined) updatedFields.content = content;

    let newImageUrl;

    // Handle image replacement if received
    if (req.file) {
      // Try to delete the old image from storage if it exists
      const blogData = blogSnap.data();
      if (blogData.imageUrl) {
        try {
          const decodedUrl = decodeURIComponent(blogData.imageUrl);
          const matches = decodedUrl.match(/\/o\/(.+)\?/);
          if (matches && matches[1]) {
            const oldPath = matches[1];
            const oldImageRef = ref(storage, oldPath);
            await deleteObject(oldImageRef);
          }
        } catch (imgErr) {
          // Log this error but don't block the update
          console.error("Failed to delete old image from storage:", imgErr.message);
        }
      }

      const file = req.file;
      const fileRef = ref(storage, `blogs/${Date.now()}_${file.originalname}`);
      const uploadResult = await uploadBytes(fileRef, file.buffer, {
        contentType: file.mimetype,
      });
      newImageUrl = await getDownloadURL(uploadResult.ref);

      updatedFields.imageUrl = newImageUrl;
    }

    await updateDoc(blogRef, updatedFields);

    // Get the updated document
    const updatedSnap = await getDoc(blogRef);

    res.status(200).json({
      message: "Blog updated successfully!",
      blogId,
      blog: updatedSnap.data(),
    });
  } catch (error) {
    res.status(500).json({ error: error.message || "Failed to update blog." });
  }
});

export default apiRoute;
