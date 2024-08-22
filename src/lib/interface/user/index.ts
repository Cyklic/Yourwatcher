export interface User {
  id: number;
  staff_id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  phone: string;
  email: string;
  group: Group;
  isUser: boolean;
  status: boolean;
  online: boolean;
  super_user: number;
  work_email: string;
  unit_data: UnitData;
  isLO: boolean;
  isSpecialAdvisor: boolean;
  isTechnicalAdvisor: boolean;
  userID?: number;
}

interface Group {
  id: string;
  group_name: string;
  group_original_name: string;
  level: string;
}

interface UnitData {
  id: string;
  userID: string;
  business_unit_id: string;
  unit_id: string;
  unit_short_name: string;
  unit_long_name: string;
  status: string;
}

export interface UserResources {
  business_units: BusinessUnit[];
  groups: Group[];
}

interface BusinessUnit {
  unit_id: string;
  unit_short_name: string;
  unit_long_name: string;
  status: string;
}
