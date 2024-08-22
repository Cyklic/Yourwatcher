export interface File {
  parentDirectory: null | string;
  title: string;
  tags: string[];
  visibleTo: string;
  selectedPeople: SelectedPerson[];
  selectedBusinessUnit: null | string;
  forOrganization: boolean;
  user: string;
  mimeType: string;
  fileUrl: string;
  isStarred: boolean;
  deletedAt: null;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface SelectedPerson {
  name?: string;
  staffId: string;
  firstName?: string;
  lastName?: string;
}
