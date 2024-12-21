"use client";

import { Control } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ActivityFormValues } from "@/lib/types";
import ReactCountryFlag from "react-country-flag";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Update country codes data with ISO codes
const countryCodes = [
  { code: '+1', isoCode: 'US', name: 'USA' },
  { code: '+44', isoCode: 'GB', name: 'UK' },
  { code: '+91', isoCode: 'IN', name: 'India' },
  { code: '+61', isoCode: 'AU', name: 'Australia' },
  { code: '+86', isoCode: 'CN', name: 'China' },
];

const RequiredIndicator = () => <span className="text-red-500 ml-1">*</span>;

interface LocationDetailsFormProps {
  control: Control<ActivityFormValues>;
  onSubmit: () => Promise<void>;
  onBack: () => void;
}

export function LocationDetailsForm({ control, onSubmit, onBack }: LocationDetailsFormProps) {
  const states = [

    "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
    "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
    "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
    "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
    "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await onSubmit();
    } catch (error) {
      console.error('Form submission failed:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-6">

        <div>
        <h2 className="text-xl font-semibold mb-2">Location Details</h2>
        <p className="text-sm text-muted-foreground">Please specify the address for where the activity takes place</p>
      </div>

      <div className="space-y-2">
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
      <div className="border-t border-gray-200 pt-6 mt-10">
        <h2 className="text-xl font-bold">Contact Details</h2>
        <p className="text-sm text-muted-foreground">Please provide contact information for this activity.</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <FormField
          control={control}
          name="contactPhone"
          render={({ field }) => (
          <FormItem>
            {/* <FormLabel className="text-black">Phone Number<RequiredIndicator /></FormLabel> */}
            <div className="relative flex items-center">
              <Select
              onValueChange={(value) => {
                field.onChange(`${value} ${field.value?.split(' ')[1] || ''}`);
              }}
              defaultValue="+1"
              >
              <FormControl>
                <SelectTrigger className="absolute left-0 w-[4rem] h-10 rounded-r-none rounded-l-full border-r border-gray-200 focus:ring-0 focus:ring-offset-0">
                <SelectValue>
                  <div className="flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center overflow-hidden">
                    <ReactCountryFlag
                    countryCode={countryCodes.find(c => c.code === field.value?.split(' ')[0])?.isoCode || 'US'}
                    svg
                    style={{
                      width: '6rem',
                      height: '6rem',
                    }}
                    />
                  </div>
                  </div>
                </SelectValue>
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {countryCodes.map((country) => (
                <SelectItem 
                  key={country.code} 
                  value={country.code}
                  className="flex items-center gap-2"
                >
                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center overflow-hidden">
                  <ReactCountryFlag
                    countryCode={country.isoCode}
                    svg
                    style={{
                    width: '4em',
                    height: '4em',
                    }}
                  />
                  </div>
                  <span>{country.code}</span>
                </SelectItem>
                ))}
              </SelectContent>
              </Select>
              <FormControl>
              <Input 
                {...field}
                className="h-10 pl-[4.5rem]"
                placeholder="Enter phone number"
                onChange={(e) => {
                const code = field.value?.split(' ')[0] || '+1';
                field.onChange(`${code} ${e.target.value}`);
                }}
                value={field.value?.split(' ')[1] || ''}
              />
              </FormControl>
            </div>

            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="contactName"
          render={({ field }) => (
            <FormItem>
                {/* <FormLabel className="text-black">Contact Name<RequiredIndicator /></FormLabel> */}
                <FormControl>
                <Input 
                  placeholder="Contact Name" 
                  {...field} 
                  className="h-10"
                />
                </FormControl>
            </FormItem>
          )}
        />
        </div>

        <div className="pt-4 flex gap-4">
        <Button
          type="button"
          variant="outline"
            onClick={() => onBack()}
          className="w-full sm:w-auto border-[#0A2145] text-[#0A2145] hover:bg-[#0A2145] hover:text-white"
        >
          Previous
        </Button>
        <Button
          type="submit"
          className="w-full sm:w-auto bg-[#0A2145] hover:bg-[#0A2145]/90"
        >
          Submit
        </Button>
        </div>
        </form>
      </div>
      );

}
