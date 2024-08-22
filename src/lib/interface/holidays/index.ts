export type GoogleHoliday = {
  created: Date;
  creator: Creator;
  description: string;
  end: End;
  etag: string;
  eventType: string;
  htmlLink: string;
  id: string;
  organizer: Organizer;
  sequence: number;
  start: Start;
  status: string;
  summary: string;
  updated: Date;
  visibility: string;
};

type Start = {
  date: Date;
};

type End = {
  date: Date;
};

type Creator = {
  email: string;
  displayName: string;
  self: boolean;
};

type Organizer = {
  email: string;
  displayName: string;
  self: boolean;
};
