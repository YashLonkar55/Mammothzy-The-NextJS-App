"use client";

import { ActivityForm } from "@/components/activity-form";
import { Navbar } from "@/components/layout/navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
        <div className="max-2 mx-80 py-8">
        <ActivityForm />
      </div>
    </main>
  );
}