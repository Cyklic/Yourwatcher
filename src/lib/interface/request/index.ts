export interface Request {
  title: string;
  case_details: string;
  tag: string;
  category: string[];
  urgency_level: string;
  deadline: Date;
  notes: string;
  format: string[];
  attachments: string[];
  reference_materials: string[];
  stage: number;
  status: string;
  docId: number;
  user_id: number;
  new_attachments: string[];
  liaisonOfficer: LiaisonOfficer;
  assignedDepartment: AssignedDepartment;
  assignedResearchPerson: AssignedResearchPerson;
  technical_adviser: TechnicalAdviser;
  createdAt: Date;
  updatedAt: Date;
  id: string;
  summary: string;
  createdBy: CreatedBy;
  member: CreatedBy;
  stage_two_comments: Comment[];
  stage_eight_comments: Comment[];
  stage_nine_comments: Comment[];
}

interface CreatedBy {
  name: string;
  email: string;
}

export interface Comment {
  comment: string;
  date: Date;
  officer: string;
  status: string;
  signature?: string;
}

interface TechnicalAdviser {
  signature: string;
  signature2: string;
  comment: string;
  comment2: string;
  group_id: string;
  name: string;
}

interface LiaisonOfficer {
  staff_id: string;
  signature: string;
  comment: string;
}

interface AssignedDepartment {
  unit_id: string;
  unit_name: string;
  unitHead_group_id: string;
  comment: string;
  unit_head_signature: string;
}

interface AssignedResearchPerson {
  comment: string;
  signature: string;
  staff_id: string;
  name: string;
}

export interface Role {
  isLiaisonOfficer: boolean;
  isResearchPersonnel: boolean;
  isHod: boolean;
  isTechnical_adviser: boolean;
}

export interface BusinessUnit {
  unit_id: string;
  unit_short_name: string;
  unit_long_name: string;
  status: string;
}

export interface BusinessUnitStaff {
  userID: string;
  business_unit_id: string;
  firstName: string;
  lastName: string;
  staff_id: string;
  unit_short_name: string;
  unit_id: string;
}

export interface RequestMetrics {
  totalRequest: number;
  onGoingRequest: number;
  completedRequest: number;
  declinedRequest: number;
  activeResearchers: number;
  top_researchers: string[];
  topResearchers: TopResearchers[];
}

interface TopResearchers {
  name: string;
  total_request: number;
  submitted_report: number;
  percentage: number;
}

export interface AdminMetrics {
  totalReportsCount: RepAndSenate;
  workstations: RepAndSenate;
  completed: RepAndSenate;
  ongoing: RepAndSenate;
  declined: RepAndSenate;
  new_aides: NewAides[];
  top_performers: NewAides[];
  topWorkstations: NewAides[];
}

interface NewAides {
  id: number;
  firstname: string;
  middlename: string;
  active: number;
  lastname: string;
  email: string;
  code: string;
  email_verified_at: Date;
  superadmin: boolean;
  is_la: boolean;
  created_at: Date;
  updated_at: Date;
  phone: string;
  party: string;
  assembly: string;
  leg_house: string;
  position: string;
  level: number;
  bio: string;
  photo: string;
}

interface RepAndSenate {
  senate: number;
  reps: number;
}
