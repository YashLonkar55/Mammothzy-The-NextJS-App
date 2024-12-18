"use client";

import { ActivityForm } from "@/components/activity-form";
import { Navbar } from "@/components/layout/navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ActivityForm />
      </div>
    </main>
  );
}