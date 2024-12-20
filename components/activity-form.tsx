"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { ActivityFormValues, activityFormSchema } from "@/lib/types";
import { FormTabs } from "@/components/forms/form-tabs";
import { FormContent } from "@/components/forms/form-content";
import { toast } from "sonner";

export function ActivityForm() {
  const [activeTab, setActiveTab] = useState("details");
  
  const handleBack = () => {
    setActiveTab("details");
  };

  const form = useForm<ActivityFormValues>({
    resolver: zodResolver(activityFormSchema),
    defaultValues: {
      category: "Adventure & Games",
      activityType: "Indoor",
      locationType: "Provider Location",
      minMembers: "",
      maxMembers: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      zipCode: "",
    },
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    shouldFocusError: false,
    criteriaMode: "firstError"
  });

  const handleTabChange = async (newTab: string) => {
    const result = await form.trigger([
      'activityName',
      'category',
      'description',
      'activityType',
      'locationType',
      'minMembers',
      'maxMembers'
    ], { shouldFocus: true });

    if (!result) {
      toast.error("Please fill in all required fields before proceeding");
      return;
    }

    setActiveTab(newTab);
  };

  function onSubmit(values: ActivityFormValues) {
    console.log(values);
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">Create new Activity</h1>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex">
          <div className="w-56 border-r border-gray-200 pr-6">
            <FormTabs activeTab={activeTab} onTabChange={setActiveTab} />
          </div>
          <div className="flex-1 pl-8">
            <FormContent
              activeTab={activeTab}
              control={form.control}
              onNext={() => handleTabChange("location")}
              onSubmit={form.handleSubmit(onSubmit)}
              onBack={handleBack}
            />

          </div>
        </form>
      </Form>
    </div>
  );
}