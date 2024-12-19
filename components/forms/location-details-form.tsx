"use client";

import { Control } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ActivityFormValues } from "@/lib/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const RequiredIndicator = () => <span className="text-red-500 ml-1">*</span>;

interface LocationDetailsFormProps {
  control: Control<ActivityFormValues>;
  onSubmit: () => void;
}

export function LocationDetailsForm({ control, onSubmit }: LocationDetailsFormProps) {
  const states = [
    "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
    "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
    "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
    "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
    "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
  ];

  return (
    <div className="space-y-6">
      <div  >
        <h2 className="text-xl font-semibold mb-2">Location Details</h2>
        <p className="text-sm text-muted-foreground">Please specify the address for where the activity takes place</p>
      </div>

      <div className="space-y-6">
        <FormField
          control={control}
          name="addressLine1"
          render={({ field }) => (
          <FormItem>
            <FormLabel className="text-black">Address Line 1<RequiredIndicator /></FormLabel>
            <FormControl>
            <Input placeholder="Street address" {...field} />
            </FormControl>
          </FormItem>
          )}
        />

        <FormField
          control={control}
          name="addressLine2"
          render={({ field }) => (
          <FormItem>
            <FormLabel className="text-black">Address Line 2</FormLabel>
            <FormControl>
            <Input placeholder="Apartment, suite, unit, etc. (optional)" {...field} />
            </FormControl>
          </FormItem>
          )}
        />

        <FormField
          control={control}
          name="zipCode"
          render={({ field }) => (
          <FormItem>
            <FormLabel className="text-black">ZIP Code<RequiredIndicator /></FormLabel>
            <FormControl>
            <Input placeholder="ZIP code" {...field} />
            </FormControl>
          </FormItem>
          )}
        />

        <div className="grid grid-cols-2 gap-4 mb-24">
          <FormField
          control={control}
          name="city"
          render={({ field }) => (
            <FormItem>
            <FormLabel className="text-black">City<RequiredIndicator /></FormLabel>
            <FormControl>
              <Input placeholder="Enter city" {...field} />
            </FormControl>
            </FormItem>
          )}
          />

          <FormField
          control={control}
          name="state"
          render={({ field }) => (
            <FormItem>
            <FormLabel className="text-black">State<RequiredIndicator /></FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select state" />
              </SelectTrigger>
              </FormControl>
              <SelectContent>
              {states.map((state) => (
                <SelectItem key={state} value={state}>
                {state}
                </SelectItem>
              ))}
              </SelectContent>
            </Select>
            </FormItem>
          )}
          />

        </div>
      </div>
      <div>
        <div className="border-t border-gray-200 pt-6 mt-14">
          <h2 className="text-xl font-semibold mb-2">Contact Details</h2>
          <p className="text-sm text-muted-foreground">Please provide contact information for this activity</p>
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
    </div>

  );
}
