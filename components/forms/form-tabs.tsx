"use client";

import { FileText, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function FormTabs({ activeTab, onTabChange }: FormTabsProps) {
  return (
    <div className="flex flex-col space-y-4 w-64 pr-8">
      <button
      onClick={() => onTabChange("details")}
      className={cn(
        "flex items-center space-x-2 px-4 py-2 text-left transition-colors w-full",
          activeTab === "details"
            ? "text-black font-medium"
            : "text-gray-500 hover:text-gray-900"
        )}
      >
        <FileText className="w-4 h-4" />
        <span>Activity Details</span>
      </button>
      <button
        onClick={() => onTabChange("location")}
        className={cn(
            "flex items-center space-x-2 px-4 py-2 text-left transition-colors w-full",
          activeTab === "location"
            ? "text-black font-medium"
            : "text-gray-500 hover:text-gray-900"
        )}
      >
        <MapPin className="w-4 h-4" />
        <span>Location Details</span>
      </button>
    </div>
  );
}