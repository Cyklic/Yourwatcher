export interface People {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  group: string;
  level: string;
  status: string;
  erpStatus: string;
}

export type Message = {
  sender: string;
  content: string;
  status: "read" | "unread";
  date: Date;
};

export interface Notification {
  user?: string;
  title: string;
  message: string;
  link: string;
  createdAt: Date;
  updatedAt: Date;
  id: string;
  status: NotificationStatus;
}

enum NotificationStatus {
  Read = "read",
  Unread = "unread",
}
