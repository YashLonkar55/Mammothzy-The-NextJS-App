"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { ActivityFormValues, activityFormSchema } from "@/lib/types";
import { FormTabs } from "@/components/forms/form-tabs";
import { FormContent } from "@/components/forms/form-content";

export function ActivityForm() {
  const [activeTab, setActiveTab] = useState("details");
  
  const form = useForm<ActivityFormValues>({
    resolver: zodResolver(activityFormSchema),
    defaultValues: {
      category: "Adventure & Games",
      activityType: "Indoor",
      locationType: "Provider Location",
    },
  });

  function onSubmit(values: ActivityFormValues) {
    console.log(values);
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-8">Create new Activity</h1>
      
      <div className="flex">
        <div className="w-48 flex-shrink-0 pr-6 border-r">
          <FormTabs activeTab={activeTab} onTabChange={setActiveTab} />
        </div>

        <div className="flex-1 pl-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormContent
                activeTab={activeTab}
                control={form.control}
                onNext={() => setActiveTab("location")}
                onSubmit={form.handleSubmit(onSubmit)}
              />
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}