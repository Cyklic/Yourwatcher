import { User } from "@/lib/interface/user";
import { z } from "zod";

export const subTaskSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().optional(),
  timeFrame: z.tuple([z.date().nullish(), z.date().nullish()]),
  startDate: z.date().nullish(),
  dueDate: z.date().nullish(),
  assignee: z.string().nullable(),
});
export const mainSubTaskSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().optional(),
  timeFrame: z.tuple([z.date().nullish(), z.date().nullish()]),
  startDate: z.date().nullish(),
  dueDate: z.date().nullish(),
  assignee: z
    .object({
      firstName: z.string(),
      lastName: z.string(),
      staffId: z.string(),
    })
    .optional(),
});

export type subTaskType = z.infer<typeof subTaskSchema>;

export const taskSchema = z.object({
  title: z.string().min(3, "Task Title must be at least 3 characters."),
  description: z.string().optional(),
  timeFrame: z.tuple([z.date().nullish(), z.date().nullish()]),
  priority: z.enum(["low", "medium", "high"]),
  collaborators: z.string(),
  specificPeople: z.array(z.string()),
  subTask: z.array(subTaskSchema),
});

export const taskValues = {
  title: "",
  description: "",
  timeFrame: [null, null],
  collaborators: "",
  specificPeople: [],
  subTask: [],
  priority: "",
};

export type taskType = z.infer<typeof taskSchema>;

export const priorityOptions = [
  { value: "low", label: "Low" },
  { value: "medium", label: "Medium" },
  { value: "high", label: "High" },
];

const groups = [
  { value: "My Business Unit", label: "My Business Unit" },
  { value: "My Organization", label: "My Organization" },
];

const privateCol = [
  { value: "Me", label: "Me" },
  { value: "Specific People", label: "Specific People" },
];

export const privateGroup = [{ value: "Me", label: "Me" }];

export const collaboratorOptions = [
  {
    group: "Private",
    items: privateCol,
  },
  {
    group: "Groups",
    items: groups,
  },
];

export const canEdit = (
  createdBy: string,
  userId?: number,
  status?: string
) => {
  return createdBy.includes(String(userId)) && status !== "Completed";
};
