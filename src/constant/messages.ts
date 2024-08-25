import { Message } from "@/lib/interface";

export const messages: Message[] = [
  {
    sender: "John Doe",
    content: "Hello there!",
    status: "unread",
    date: new Date("2024-01-16T12:00:00"),
  },
  {
    sender: "Alice Smith",
    content: "How are you doing?",
    status: "read",
    date: new Date("2024-01-15T15:30:00"),
  },
  {
    sender: "Bob Johnson",
    content: "Meeting at 2 PM tomorrow.",
    status: "unread",
    date: new Date("2024-01-14T10:45:00"),
  },
  {
    sender: "Emma White",
    content: "I will not leave the office until we resolve the budget lapse.",
    status: "read",
    date: new Date("2024-01-13T17:20:00"),
  },
  {
    sender: "Alex Brown",
    content: "Are you available for a call?",
    status: "unread",
    date: new Date("2024-01-12T14:15:00"),
  },
  {
    sender: "Grace Taylor",
    content: "Just checking in. How's everything?",
    status: "unread",
    date: new Date("2024-01-11T09:30:00"),
  },
  {
    sender: "Daniel Lee",
    content: "Important update: Project deadline extended.",
    status: "read",
    date: new Date("2024-01-10T16:00:00"),
  },
  {
    sender: "Sophie Clark",
    content: "Reminder: Team lunch tomorrow!",
    status: "unread",
    date: new Date("2024-01-09T12:45:00"),
  },
  {
    sender: "Michael Turner",
    content: "Can you review the latest code changes?",
    status: "read",
    date: new Date("2024-01-08T11:10:00"),
  },
  {
    sender: "Ella Garcia",
    content: "Happy birthday! 🎉",
    status: "unread",
    date: new Date("2024-01-07T08:00:00"),
  },
];
