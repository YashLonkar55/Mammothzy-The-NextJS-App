"use client";

import { Control } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ArrowRight } from 'lucide-react';

const RequiredIndicator = () => <span className="text-red-500 ml-1">*</span>;

import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ActivityFormValues } from "@/lib/types";
import { useState } from "react";
import { toast } from "sonner";

interface ActivityDetailsFormProps {
  control: Control<ActivityFormValues>;
  onNext: () => void;
}

export function ActivityDetailsForm({ control, onNext }: ActivityDetailsFormProps) {
  const [showOtherInput, setShowOtherInput] = useState(false);
  const handleNext = () => {
    const values = control._formValues;
    const requiredFields = {
      activityName: 'Activity Name',
      category: 'Category',
      description: 'Activity Description',
      activityType: 'Activity Type',
      locationType: 'Location Type'
    };

    const missingFields = Object.entries(requiredFields)
      .filter(([key]) => !values[key])
      .map(([_, label]) => label);

    if (missingFields.length > 0) {
      toast.error("Please fill in all required fields", {
        description: `Missing: ${missingFields.join(', ')}`,
        duration: 3000,
      });
      return;
    }

    onNext();
  };


  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-bold mb-2">Activity Details</h2>
      </div>

      <FormField
        control={control}
        name="activityName"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gray-900">Activity Name<RequiredIndicator /></FormLabel>
            <FormControl>
                <Input
                placeholder="Eg: Cooking class in Palo Alto"
                {...field}
                value={field.value || ''} // Ensure value is always defined
                />
            </FormControl>
          </FormItem>

        )}
      />

      <FormField
        control={control}
        name="category"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gray-900">Select the best category to describe your activity<RequiredIndicator /></FormLabel>
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
                      </FormItem>

                    )}
                  />
                )}
              </div>
            </FormControl>
          </FormItem>

        )}
      />

      <FormField
        control={control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gray-900">About the Activity<RequiredIndicator /></FormLabel>
            <FormControl>
              <Textarea
                placeholder="Activity Description"
                className="resize-none"
                {...field}
              />
            </FormControl>
          </FormItem>

        )}
      />

      <FormField
        control={control}
        name="activityType"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gray-900">Please select the activity type<RequiredIndicator /></FormLabel>
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
          </FormItem>

        )}
      />

      <FormField
        control={control}
        name="locationType"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gray-900">Please select the type of location<RequiredIndicator /></FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="grid grid-cols-1 gap-4"
              >
                {["Provider Location", "User Location"].map((type) => (
                  <div key={type} className="flex items-center space-x-2">
                    <RadioGroupItem value={type} id={type} />
                    <Label htmlFor={type}>{type}</Label>
                  </div>
                ))}
              </RadioGroup>
            </FormControl>
          </FormItem>

        )}
      />

      <div>
        <h3 className="text-sm font-medium mb-4">
          How many members can take part in the activity? (Optional)
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={control}
            name="minMembers"
            render={({ field: { value, onChange, ...field } }) => (
              <FormItem>
                <FormLabel className="text-gray-900">Minimum Members</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    value={value || ""}
                    onChange={(e) => onChange(e.target.value || "")}
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="maxMembers"
            render={({ field: { value, onChange, ...field } }) => (
              <FormItem>
                <FormLabel className="text-gray-900">Maximum Members</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    value={value || ""}
                    onChange={(e) => onChange(e.target.value || "")}
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
      </div>

      <div className="pt-4">
        <Button
          type="button"
          onClick={handleNext}
          className="w-full sm:w-auto bg-[#0A2145] hover:bg-[#0A2145]/90 rounded-full group relative overflow-hidden transition-all duration-300 ease-in-out hover:pr-12"
        >
          <span className="flex items-center justify-center relative gap-3">
          Save and Continue
          <ArrowRight className="w-5 h-5 absolute -right-6 opacity-0 group-hover:right-[-2rem] group-hover:opacity-100 transition-all duration-300 ease-in-out" />
          </span>
        </Button>
      </div>
    </div>
  );
}

{/* <Button
          type="submit"
          className="w-full sm:w-auto bg-[#0A2145] hover:bg-[#0A2145]/90 rounded-full group relative overflow-hidden transition-all duration-300 ease-in-out hover:pr-12"
        >
          <span className="flex items-center justify-center relative gap-3">
          Submit
          <ArrowRight className="w-5 h-5 absolute -right-6 opacity-0 group-hover:right-[-2rem] group-hover:opacity-100 transition-all duration-300 ease-in-out" />
          </span>
        </Button> */}