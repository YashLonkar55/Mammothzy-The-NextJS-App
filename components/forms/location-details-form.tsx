"use client";

import { Control } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ActivityFormValues } from "@/lib/types";

interface LocationDetailsFormProps {
  control: Control<ActivityFormValues>;
  onSubmit: () => void;
}

export function LocationDetailsForm({ control, onSubmit }: LocationDetailsFormProps) {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Location Details</h2>
      </div>

      <FormField
        control={control}
        name="locationType"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Please select the type of location</FormLabel>
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
            <FormMessage />
          </FormItem>
        )}
      />

      <div>
        <h3 className="text-sm font-medium mb-4">
          How many members can take part in the activity?
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={control}
            name="minMembers"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Minimum Members</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="maxMembers"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Maximum Members</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      <div className="pt-4">
        <Button 
          type="submit" 
          className="w-full sm:w-auto bg-[#0A2145] hover:bg-[#0A2145]/90"
        >
          Submit
        </Button>
      </div>
    </div>
  );
}