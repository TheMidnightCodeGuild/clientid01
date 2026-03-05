import nextConnect from "next-connect";
import { ref, deleteObject } from "firebase/storage";
import { storage } from "@/lib/firebase";

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.delete(async (req, res) => {
  try {
    // Accept the image path in the request body (e.g., 'images/example.jpg')
    const { imagePath } = req.body;

    if (!imagePath) {
      return res.status(400).json({ error: "Missing imagePath in request body." });
    }

    const imageRef = ref(storage, imagePath);

    await deleteObject(imageRef);

    res.status(200).json({ message: "Image deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message || "Failed to delete image." });
  }
});

export default apiRoute;
