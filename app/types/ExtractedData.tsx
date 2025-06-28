import { InsuranceEntry } from './InsuranceEntry';

export interface ExtractedData {
  patient_name: string;
  sex: string;
  dob: string;
  address: string;
  city_state_zip: string;
  home_phone: string;
  work_phone: string;
  mobile_phone: string;
  insurance: InsuranceEntry[];
  default_pharmacy: string;
  preferred_lab: string;
  height: string;
  weight: string;
  bmi: string;
  blood_pressure: string;
}