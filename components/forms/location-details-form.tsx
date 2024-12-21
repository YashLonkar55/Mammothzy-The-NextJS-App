"use client";

import { Control } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ActivityFormValues } from "@/lib/types";
import ReactCountryFlag from "react-country-flag";
import { useRouter } from "next/navigation";
import { ArrowRight } from 'lucide-react';
import { toast } from "sonner";
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
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", 
    "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", 
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", 
    "Uttar Pradesh", "Uttarakhand", "West Bengal", 
    "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", 
    "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
  ];
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const values = control._formValues;
    const requiredFields = {
      addressLine1: 'Address Line 1',
      zipCode: 'ZIP Code',
      city: 'City',
      state: 'State',
      contactPhone: 'Contact Number',
      contactName: 'Contact Name'
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

    try {
      await onSubmit();
    } catch (error) {
      console.error('Form submission failed:', error);
      toast.error("Form submission failed", {
        description: "Please try again",
        duration: 3000,
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-6">

        <div>
          <h2 className="text-xl font-semibold mb-2">Location Details</h2>
          <p className="text-sm text-muted-foreground whitespace-nowrap w-full overflow-hidden text-ellipsis">
          Please specify the address for where the activity takes place
          </p>
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
                <SelectTrigger className="h-11 rounded-full focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none">
                  <SelectValue placeholder="Select state" className="text-muted-foreground" />
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
                  <div className="w-[22px] h-[22px] rounded-full bg-gray-50 flex flex-row items-center justify-center overflow-hidden">
                    <ReactCountryFlag
                    countryCode={countryCodes.find(c => c.code === field.value?.split(' ')[0])?.isoCode || 'US'}
                    svg
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
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
                  <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center overflow-hidden">
                  <ReactCountryFlag
                    countryCode={country.isoCode}
                    svg
                    style={{
                      width: '150%',
                      height: '150%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                  />
                  </div>
                  <span>{country.code}</span>
                  </div>
                </SelectItem>
                ))}
              </SelectContent>
              </Select>
              <FormControl>
              <Input 
                {...field}
                className="h-10 pl-[4.5rem]"
                placeholder="Contact Number *"
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
                  value={field.value || ''}
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
          className="w-full sm:w-auto  text-[#0A2145] hover:bg-[#0A2145] hover:text-white rounded-full"
        >
          Previous
        </Button>
        <Button
          type="submit"
          className="w-full sm:w-auto bg-[#0A2145] hover:bg-[#0A2145]/90 rounded-full group relative overflow-hidden transition-all duration-300 ease-in-out hover:pr-12"
        >
          <span className="flex items-center justify-center relative gap-3">
          Submit
          <ArrowRight className="w-5 h-5 absolute -right-6 opacity-0 group-hover:right-[-2rem] group-hover:opacity-100 transition-all duration-300 ease-in-out" />
          </span>
        </Button>
        </div>
        </form>
      </div>
      );

}
