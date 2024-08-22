export interface Profile {
  qualifications: Qualification[];
  jobExperiences: JobExperience[];
  user: number;
  createdAt: string;
  updatedAt: string;
  account: Account;
  homeAddress: HomeAddress;
  nextOfKin: NextOfKin;
  placeOfOrigin: PlaceOfOrigin;
  whyILoveJob: string;
  promotions: Promotion[];
  merits: Merit[];
  timeline: Timeline[];
  documents: Document[];
  id: string;
}

export interface Document {
  fileName: string;
  fileType: string;
  url: string;
  dateAdded: string;
}

export interface Timeline {
  dateCreated: string;
  title: string;
}

export interface Account {
  accountNumber: string;
  bank: string;
  accountName: string;
  _id: string;
}

export interface HomeAddress {
  houseNumber: string;
  suite: string;
  address: string;
  city: string;
  state: string;
  _id: string;
}

export interface JobExperience {
  uuid: string;
  title: string;
  company: string;
  from: string;
  to: string;
  location: string;
}

export interface NextOfKin {
  houseNumber: string;
  suite: string;
  address: string;
  city: string;
  state: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  _id: string;
}

export interface PlaceOfOrigin {
  state: string;
  lga: string;
  _id: string;
}

export interface Qualification {
  uuid: string;
  degree: string;
  school: string;
  from: string;
  to: string;
  location: string;
}

export interface Merit {
  title?: string;
  merit: string;
  dateAwarded: string;
}

export interface Promotion {
  merit?: string;
  lineManager: string;
  salary: number;
  dateEffective: string;
  merits?: Merit[];
}
