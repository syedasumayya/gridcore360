# 🚀 GridCore360 | AI & BPO Cybernetic Growth Solutions

A cutting-edge, enterprise-grade agency website built with **Next.js 16**, **Tailwind CSS v4**, and **Firebase**. Featuring a dark cybernetic theme, glassmorphism UI, smooth Framer Motion animations, and a fully functional full-stack backend for lead generation and career applications.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38BDF8?logo=tailwind-css)
![Firebase](https://img.shields.io/badge/Firebase-Backend-FFCA28?logo=firebase)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Status](https://img.shields.io/badge/Status-Live-success)

---

## ✨ Overview

GridCore360 isn't just a static website; it's a fully operational business engine.

The frontend delivers a futuristic, high-conversion user experience, while the hidden **Next.js API routes** seamlessly connect to **Firebase** to capture leads, book appointments, and process job applications with PDF uploads.

---

# 🌐 Live Deployment

🟢 This project is fully deployed and live on the web.

The production environment is hosted on **Vercel**, with a custom domain and enterprise-grade Firebase security rules actively managing database operations and file uploads in real time.

---

# 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16 (App Router & Turbopack) |
| Styling | Tailwind CSS v4 |
| UI | Custom Glassmorphism Design System |
| Animations | Framer Motion |
| Backend | Next.js Serverless API Routes |
| Database | Firebase Cloud Firestore |
| Storage | Firebase Cloud Storage |
| Icons | Lucide React |
| Language | TypeScript |

---

# 🔥 Key Features

## 🎨 Frontend

- 🌌 Cybernetic Dark Theme
- 💎 Glassmorphism UI Components
- ✨ Smooth Framer Motion Animations
- 📱 Fully Responsive Design
- 🌍 Animated Hero Globe
- 📊 Animated Statistics Counters
- 💼 Smart Career Application Modal
- 📅 Appointment Booking Interface

---

## ⚙️ Backend

- 🔒 Secure API Architecture
- 📩 Contact Lead Capture
- 📅 Appointment Booking System
- 📄 Resume/CV Upload (PDF/DOC)
- ☁️ Firebase Cloud Storage Integration
- 🗄️ Firestore Database Integration
- 🔐 Environment Variable Protection
- 🚀 Serverless Next.js API Routes

---

# 📂 Project Structure

```text
frontend/
│
├── public/
│   └── images, logos, assets
│
├── src/
│   │
│   ├── app/
│   │   ├── api/
│   │   │   ├── lead/
│   │   │   ├── appointment/
│   │   │   └── apply/
│   │   │
│   │   ├── careers/
│   │   ├── contact/
│   │   ├── services/
│   │   ├── industries/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   │
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   │
│   └── lib/
│       └── firebase.ts
│
├── .env.local
├── package.json
└── tailwind.config.ts
```

---

# ⚙️ Getting Started

## 1️⃣ Clone Repository

```bash
git clone https://github.com/syedasumayya/gridcore360.git

cd gridcore360/frontend
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Configure Environment Variables

Create a file named `.env.local` inside the frontend folder.

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key

NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com

NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id

NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com

NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id

NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

---

## 4️⃣ Run Development Server

```bash
npm run dev
```

Open

```
http://localhost:3000
```

---

# 🔒 Firebase Security Rules

Example Firestore Rule:

```javascript
match /leads/{docId} {

  allow create: if request.resource.data.name is string
             && request.resource.data.email is string;

  allow read, update, delete: if false;

}
```

---

# 🌍 Deployment

Deploy effortlessly using **Vercel**.

### Steps

1. Push your project to GitHub.
2. Import the repository into Vercel.
3. Add your environment variables.
4. Deploy.
5. Connect your custom domain.

---

# 🚀 Highlights

- ✅ Modern Next.js 16 Architecture
- ✅ Enterprise-grade Backend
- ✅ Firebase Firestore + Storage
- ✅ Secure API Layer
- ✅ Glassmorphism UI
- ✅ Framer Motion Animations
- ✅ Responsive Design
- ✅ Production Ready
- ✅ Easy Deployment
- ✅ TypeScript Support

---

## 💙 Author

<p align="center">

<strong>Designed & Developed with 💙 by <a href="https://github.com/syedasumayya">Sumayya</a></strong>

</p>
