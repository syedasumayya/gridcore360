// src/app/api/apply/route.ts
import { NextResponse } from "next/server";
import { db, storage } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const jobTitle = formData.get("jobTitle") as string;
    const workPreference = formData.get("workPreference") as string;
    const requirements = formData.get("requirements") as string;
    const cvFile = formData.get("cv") as File;

    if (!name || !email || !jobTitle) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    let cvUrl = "";

    // Upload PDF to Firebase Storage
    if (cvFile && cvFile.size > 0) {
      const uniqueFileName = `${Date.now()}_${cvFile.name.replace(/\s/g, '_')}`;
      const storageRef = ref(storage, `cvs/${uniqueFileName}`);
      
      await uploadBytes(storageRef, cvFile);
      cvUrl = await getDownloadURL(storageRef);
    }

    // Save to Database
    const docRef = await addDoc(collection(db, "applications"), {
      name,
      email,
      jobTitle,
      workPreference,
      requirements,
      cvUrl, 
      status: "new",
      createdAt: serverTimestamp(),
    });

    return NextResponse.json({ success: true, id: docRef.id });
  } catch (error) {
    console.error("Error saving application:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}