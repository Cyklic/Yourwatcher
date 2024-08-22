export interface Room {
  room_id: number;
  room_name: string;
  requests: number;
  members: number;
  rejected_count: number;
  approved_count: number;
  ongoing_count: number;
  created_at: Date;
}

export interface Member {
  firstname: string;
  lastname: string;
  email: string;
  party: string;
  position: string;
  id: number;
}

export interface Team {
  aide_date_created: string;
  aide_level: string;
  legislative_member: string;
  name_of_aide: string;
  aide_status: string;
  aide_id: number;
}
