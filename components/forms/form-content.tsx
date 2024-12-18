"use client";

import { Control } from "react-hook-form";
import { ActivityFormValues } from "@/lib/types";
import { ActivityDetailsForm } from "@/components/forms/activity-details-form";
import { LocationDetailsForm } from "@/components/forms/location-details-form";

interface FormContentProps {
  activeTab: string;
  control: Control<ActivityFormValues>;
  onNext: () => void;
  onSubmit: () => void;
}

export function FormContent({ activeTab, control, onNext, onSubmit }: FormContentProps) {
  return (
    <div className="space-y-8">
      {activeTab === "details" && (
        <ActivityDetailsForm
          control={control}
          onNext={onNext}
        />
      )}

      {activeTab === "location" && (
        <LocationDetailsForm
          control={control}
          onSubmit={onSubmit}
        />
      )}
    </div>
  );
}