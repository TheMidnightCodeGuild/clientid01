import { doc, deleteDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default async function handler(req, res) {
  if (req.method !== "DELETE") {
    return res
      .status(405)
      .json({ error: `Method '${req.method}' Not Allowed` });
  }

  try {
    const { entryId } = req.body || {};

    if (!entryId) {
      return res.status(400).json({ error: "Missing entryId in request body." });
    }

    const entryRef = doc(db, "contactEntries", entryId);
    await deleteDoc(entryRef);

    return res
      .status(200)
      .json({ message: "Entry deleted successfully!", entryId });
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.message || "Failed to delete entry." });
  }
}

