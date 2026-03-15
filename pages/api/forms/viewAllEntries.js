import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res
      .status(405)
      .json({ error: `Method '${req.method}' Not Allowed` });
  }

  try {
    const entriesCol = collection(db, "contactEntries");
    const entriesQuery = query(entriesCol, orderBy("createdAt", "desc"));
    const snapshot = await getDocs(entriesQuery);

    const entries = snapshot.docs.map((doc) => ({
      entryId: doc.id,
      ...doc.data(),
    }));

    return res.status(200).json({
      entries,
      message: "Fetched all entries successfully!",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.message || "Failed to fetch entries." });
  }
}

