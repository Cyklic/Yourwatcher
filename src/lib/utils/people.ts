import { z } from "zod";
import validator from "validator";
import { User } from "@/lib/interface/user";

const isNigerianPhoneNumber = (value: number) => {
  return validator.isMobilePhone(`+234${value}`, "en-NG");
};

export const PersonValues = {
  firstName: "",
  lastName: "",
  middleName: "",
  email: "",
  phoneNumber: "",
  staffId: "",
  businessUnit: "",
  group: "",
  level: "",
  isInvitedToERP: false,
};

export const PersonSchema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  middleName: z.string().optional(),
  email: z.string().email("Invalid email format").min(1, "Email is required"),
  phoneNumber: z.number().refine(isNigerianPhoneNumber, {
    message: "Invalid Nigerian phone number",
  }),
  staffId: z.string().min(1, "Staff ID is required"),
  businessUnit: z.string().min(1, "Specify User's Business Unit"),
  group: z.string().min(1, "Specify User's Group"),
  level: z.string().min(1, "Specify User's Level"),
  isInvitedToERP: z.boolean().default(false),
});

export type PersonType = z.infer<typeof PersonSchema>;

export const filteredPeople = (
  people: User[],
  val: string,
  status: string | null
): User[] => {
  // If no search value and status is "all", return all users
  if (!val && (!status || status === "all")) {
    return people;
  }

  // Filter based on search value and status
  return people.filter((user) => {
    const nameMatches =
      user.firstName.toLowerCase().includes(val.toLowerCase()) ||
      user.lastName.toLowerCase().includes(val.toLowerCase());
    const emailMatches = user.email.toLowerCase().includes(val.toLowerCase());
    const statusMatches =
      status === null ||
      status === "all" ||
      (status === "online" && user.online) ||
      (status === "offline" && !user.online);

    // Return true if either name, email, and status matches
    return (nameMatches || emailMatches) && statusMatches;
  });
};

export const canEditOrPromote = (
  user: User,
  currentUser: User | null,
  tab?: string | null
): boolean => {
  if (tab) {
    if (tab === "About" && user.id === currentUser?.id) return true;

    if (tab === "Role" && String(currentUser?.unit_data.unit_id) === "119")
      return true;
  }

  if (!tab) {
    if (
      user.id === currentUser?.id ||
      String(currentUser?.unit_data.unit_id) === "119"
    )
      return true;
  }

  return false;
};
