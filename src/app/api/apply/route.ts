// src/app/api/apply/route.ts
import { NextResponse } from "next/server";
import { db, storage } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export async function POST(request: Request) {
  try {
    // Parse the FormData (handles both text and files)
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

    // If a CV was uploaded, save it to Firebase Storage
    if (cvFile && cvFile.size > 0) {
      // Create a unique filename so it doesn't overwrite other people's CVs
      const uniqueFileName = `${Date.now()}_${cvFile.name.replace(/\s/g, '_')}`;
      const storageRef = ref(storage, `cvs/${uniqueFileName}`);
      
      // Upload the file
      await uploadBytes(storageRef, cvFile);
      
      // Get the public download URL
      cvUrl = await getDownloadURL(storageRef);
    }

    // Save the text data + CV URL to the Firestore Database
    const docRef = await addDoc(collection(db, "applications"), {
      name,
      email,
      jobTitle,
      workPreference,
      requirements,
      cvUrl, // This will be blank if they didn't upload one, or a link to the PDF if they did
      status: "new",
      createdAt: serverTimestamp(),
    });

    return NextResponse.json({ success: true, id: docRef.id });
  } catch (error) {
    console.error("Error saving application:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}