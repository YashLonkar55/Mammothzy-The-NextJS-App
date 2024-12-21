import { z } from "zod";

export const activityFormSchema = z.object({
  activityName: z.string().min(1, "Activity name is required"),
  category: z.enum([
    "Adventure & Games",
    "Creative Expression",
    "Food & Drink",
    "Learning & Development",
    "Sports and Fitness",
    "Volunteering",
    "Other",
  ]),
  otherCategory: z.string().optional(),
  description: z.string().min(1, "Activity description is required"),
  activityType: z.enum(["Indoor", "Outdoor", "Virtual"]),
  locationType: z.enum(["Provider Location", "User Location"]),
  minMembers: z.string().optional(),
  maxMembers: z.string().optional(),
  // Location fields
  addressLine1: z.string().min(1, "Address line 1 is required"),
  addressLine2: z.string().optional(),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zipCode: z.string().min(1, "Zip code is required"),
  // Contact fields
  contactPhone: z.string().min(1, "Contact phone is required"),
  contactName: z.string().min(1, "Contact name is required"),
});

export type ActivityFormValues = z.infer<typeof activityFormSchema>;