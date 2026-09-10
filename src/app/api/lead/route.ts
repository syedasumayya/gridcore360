// src/app/api/lead/route.ts
import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Basic validation
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Save to Firebase Firestore in the "leads" collection
    const docRef = await addDoc(collection(db, "leads"), {
      ...body,
      createdAt: serverTimestamp(), // Automatically adds the current time
    });

    return NextResponse.json({ success: true, id: docRef.id });
  } catch (error) {
    console.error("Error saving lead:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}