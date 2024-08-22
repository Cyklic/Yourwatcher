export interface Task {
  title: string;
  startDate: Date;
  dueDate: Date;
  collaborator: string;
  selectedCollaborators: SelectedCollaborators[];
  selectedBusinessUnit: string;
  forOrganization: boolean;
  description: string;
  priority: Priority;
  subTasks: SubTask[];
  otherDetails: string;
  deletedAt: Date;
  user: string;
  status: string;
  progress: number;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
  id: string;
}

enum Priority {
  low = "low",
  medium = "medium",
  high = "high",
}

interface SelectedCollaborators {
  staffId: string;
  firstName: string;
  lastName: string;
}

export interface SubTask {
  id: string;
  title: string;
  startDate: Date;
  dueDate: Date;
  description: string;
  assignee?: Assignee;
  status?: string;
}

interface Assignee {
  firstName: string;
  lastName: string;
  staffId: string;
}

export interface TaskStats {
  assignedToMe: number;
  assignedByMe: number;
  total: number;
}
