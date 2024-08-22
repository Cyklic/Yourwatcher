interface AssetRequest {
  title: string;
  description: string;
  status: "pending" | "approved";
  date: Date;
}

export const assetRequests: AssetRequest[] = [
  {
    title: "Laptop Request",
    description: "Request for a new laptop for development purposes",
    status: "pending",
    date: new Date("2024-01-15"),
  },
  {
    title: "Software License Request",
    description: "Request for a software license renewal",
    status: "approved",
    date: new Date("2024-01-10"),
  },
  {
    title: "Office Chair Request",
    description: "Request for a new ergonomic office chair",
    status: "pending",
    date: new Date("2024-01-08"),
  },
  {
    title: "Training Materials Request",
    description: "Request for training materials for upcoming workshops",
    status: "approved",
    date: new Date("2024-01-05"),
  },
  {
    title: "Standing Desk Request",
    description: "Request for a standing desk for health reasons",
    status: "pending",
    date: new Date("2024-01-03"),
  },
  {
    title: "Conference Room Booking Request",
    description: "Request to book a conference room for a team meeting",
    status: "approved",
    date: new Date("2024-01-02"),
  },
  {
    title: "Printer Replacement Request",
    description: "Request for a new printer to replace a malfunctioning one",
    status: "approved",
    date: new Date("2023-12-28"),
  },
  {
    title: "Projector Request",
    description: "Request for a projector for an upcoming presentation",
    status: "pending",
    date: new Date("2023-12-20"),
  },
  {
    title: "Desk Lamp Request",
    description: "Request for a desk lamp to improve workspace lighting",
    status: "approved",
    date: new Date("2023-12-18"),
  },
  {
    title: "Whiteboard Marker Request",
    description: "Request for new whiteboard markers for the meeting room",
    status: "pending",
    date: new Date("2023-12-15"),
  },
];
