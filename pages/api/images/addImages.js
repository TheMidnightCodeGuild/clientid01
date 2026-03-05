import nextConnect from "next-connect";
import multer from "multer";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/lib/firebase";

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

apiRoute.post(async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded." });
    }

    const file = req.file;
    const imageRef = ref(storage, `images/${Date.now()}_${file.originalname}`);

    // Upload the image file buffer to Firebase Storage
    const uploadResult = await uploadBytes(imageRef, file.buffer, {
      contentType: file.mimetype,
    });

    // Get downloadable URL for the uploaded image
    const downloadURL = await getDownloadURL(uploadResult.ref);

    res.status(200).json({
      message: "Image uploaded successfully!",
      imageUrl: downloadURL,
    });
  } catch (error) {
    res.status(500).json({ error: error.message || "Something went wrong!" });
  }
});

export default apiRoute;
