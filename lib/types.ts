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
  minMembers: z.string().min(1, "Minimum members is required"),
  maxMembers: z.string().min(1, "Maximum members is required"),
});

export type ActivityFormValues = z.infer<typeof activityFormSchema>;