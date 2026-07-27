// src/app/api/appointment/route.ts
import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.name || !body.email || !body.date || !body.time) {
      return NextResponse.json({ error: "Missing required booking fields" }, { status: 400 });
    }

    const docRef = await addDoc(collection(db, "appointments"), {
      ...body,
      status: "pending", // Default status for new bookings
      createdAt: serverTimestamp(),
    });

    return NextResponse.json({ success: true, id: docRef.id });
  } catch (error) {
    console.error("Error saving appointment:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}