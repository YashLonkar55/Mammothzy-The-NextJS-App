"use client";

import { Control } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ActivityFormValues } from "@/lib/types";
import { useState } from "react";

interface ActivityDetailsFormProps {
  control: Control<ActivityFormValues>;
  onNext: () => void;
}

export function ActivityDetailsForm({ control, onNext }: ActivityDetailsFormProps) {
  const [showOtherInput, setShowOtherInput] = useState(false);
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Activity Details</h2>
      </div>

      <FormField
        control={control}
        name="activityName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Activity Name</FormLabel>
            <FormControl>
              <Input
                placeholder="Eg: Cooking class in Palo Alto"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

        <FormField
        control={control}
        name="category"
        render={({ field }) => (
          <FormItem>
          <FormLabel>Select the best category to describe your activity</FormLabel>
          <FormControl>
            <div className="space-y-4">
            <RadioGroup
              onValueChange={(value) => {
              field.onChange(value);
              setShowOtherInput(value === "Other");
              }}
              defaultValue={field.value}
              className="grid grid-cols-1 gap-4"
            >
              {[
              "Adventure & Games",
              "Creative Expression",
              "Food & Drink",
              "Learning & Development",
              "Sports and Fitness",
              "Volunteering",
              "Other",
              ].map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <RadioGroupItem value={category} id={category} />
                <Label htmlFor={category}>{category}</Label>
              </div>
              ))}
            </RadioGroup>
            {showOtherInput && (
              <FormField
              control={control}
              name="otherCategory"
              render={({ field }) => (
                <FormItem>
                <FormControl>
                  <Input
                  placeholder="Please specify your category"
                  className="mt-2"
                  {...field}
                  />
                </FormControl>
                <FormMessage />
                </FormItem>
              )}
              />
            )}
            </div>
          </FormControl>
          <FormMessage />
          </FormItem>
        )}
        />

      <FormField
        control={control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>About the Activity</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Activity Description"
                className="resize-none"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="activityType"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Please select the activity type</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="grid grid-cols-1 gap-4"
              >
                {["Indoor", "Outdoor", "Virtual"].map((type) => (
                  <div key={type} className="flex items-center space-x-2">
                    <RadioGroupItem value={type} id={type} />
                    <Label htmlFor={type}>{type}</Label>
                  </div>
                ))}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="pt-4">
        <Button
          type="button"
          onClick={onNext}
          className="w-full sm:w-auto bg-[#0A2145] hover:bg-[#0A2145]/90"
        >
          Save and Continue
        </Button>
      </div>
    </div>
  );
}