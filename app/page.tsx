"use client";

import { ActivityForm } from "@/components/activity-form";
import Footer from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
        <div className="ml-[18%] mr-[35%] py-8">
        <ActivityForm />
      
      </div>
      <Footer/>
    </main>
  );
}