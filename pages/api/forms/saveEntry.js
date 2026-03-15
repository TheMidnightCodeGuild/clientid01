import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ error: `Method '${req.method}' Not Allowed` });
  }

  try {
    const { name, email, phone, message } = req.body || {};

    if (!name || !email || !phone || !message) {
      return res
        .status(400)
        .json({ error: "Name, email, phone, and message are required." });
    }

    const docRef = await addDoc(collection(db, "contactEntries"), {
      name,
      email,
      phone,
      message,
      createdAt: new Date(),
    });

    return res.status(201).json({
      message: "Entry saved successfully!",
      entryId: docRef.id,
      entry: { name, email, phone, message },
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.message || "Failed to save entry." });
  }
}

