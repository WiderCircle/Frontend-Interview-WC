import * as yup from 'yup';
import { PatientInputs } from '../lib/types';

// don't want to send multiple referrals for one patient
export const verifyUniquePatientName = (firstOrLastName: string) => {
  return true;
}

export type FormikConfig = {
  initialValue: string,
  placeholder: string,
  schema: yup.Schema,
  type: string,
  width?: string,
}
export const formikConfig: { [input in PatientInputs]: FormikConfig } = {
  firstName: {
    initialValue: '',
    placeholder: "First Name*",
    schema: yup
      .string()
      .trim()
      .test("unique-name", "Cannot add duplicate patient", (value) => verifyUniquePatientName(value))
      .required('First name is required'),
    type: "text",
  },
  lastName: {
    initialValue: '',
    placeholder: "Last Name*",
    schema: yup
      .string()
      .trim()
      .test("unique-name", "Cannot add duplicate patient", (value) => verifyUniquePatientName(value))
      .required('Last name is required'),
    type: "text",
  },
  dateOfBirth: {
    initialValue: '',
    placeholder: "Date of Birth*",
    schema: yup.date().required('Date of birth is required'),
    type: "date",
  },
  contactLanguage: {
    initialValue: '',
    placeholder: "Contact Language*",
    schema: yup.string().required('Language is required'),
    type: "text",
  },
  phone: {
    initialValue: '',
    placeholder: "Phone*",
    schema: yup
      .string()
      .required('Phone number is required')
      .matches(/^[0-9]*$/, 'Must be a valid phone number')
      .min(10, 'Must be a valid phone number')
      .max(10, 'Must be a valid phone number'),
    type: "tel",
  },
  email: {
    initialValue: '',
    placeholder: "Email*",
    schema: yup
      .string()
      .email('Must be a valid email')
      .required('Email is required'),
    type: "email",
  },
  address: {
    initialValue: '',
    placeholder: "Address*",
    schema: yup.string().required('Address is required'),
    type: "text",
    width: "100%",
  },
  notes: {
    initialValue: '',
    placeholder: "Notes/Reason",
    schema: yup.string(),
    type: "text",
    width: "100%",
  },
};