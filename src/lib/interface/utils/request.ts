import { z } from "zod";

export const requestFilterValues = {
  createdAt: null,
  deadline: null,
  category: "",
  urgency_level: null,
};

export const requestFilterSchema = z.object({
  createdAt: z.date().nullable(),
  deadline: z.date().nullable(),
  category: z.string(),
  urgency_level: z.string().nullable(),
});

export type RequestFilterType = z.infer<typeof requestFilterSchema>;
