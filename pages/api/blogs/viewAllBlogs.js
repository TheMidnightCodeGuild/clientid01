import nextConnect from "next-connect";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.get(async (req, res) => {
  try {
    // Fetch all blogs, ordered by createdAt descending (most recent first)
    const blogsCol = collection(db, "blogs");
    const blogsQuery = query(blogsCol, orderBy("createdAt", "desc"));
    const snapshot = await getDocs(blogsQuery);

    const blogs = snapshot.docs.map(doc => ({
      blogId: doc.id,
      ...doc.data()
    }));

    res.status(200).json({
      blogs,
      message: "Fetched all blogs successfully!"
    });
  } catch (error) {
    res.status(500).json({ error: error.message || "Failed to fetch blogs." });
  }
});

export default apiRoute;