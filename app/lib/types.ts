import * as yup from 'yup';

export type Patient = {
  number: number;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  contactLanguage: string;
  phone: string;
  email: string;
  address: string;
  notes?: string;
};

export const emptyPatient = (number: number) => ({
  number,
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  contactLanguage: "",
  phone: "",
  email: "",
  address: "",
  notes: "",
})

type PatientInputAttributes = Omit<Patient, 'number'>;
export type PatientInputs = keyof PatientInputAttributes;