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
  onBack: () => void;
}

export function FormContent({ activeTab, control, onNext, onSubmit, onBack }: FormContentProps) {
  if (activeTab === "details") {
    return <ActivityDetailsForm control={control} onNext={onNext} />;
  }

  if (activeTab === "location") {
    return <LocationDetailsForm control={control} onSubmit={onSubmit} onBack={onBack} />;
  }

  return null;
}
