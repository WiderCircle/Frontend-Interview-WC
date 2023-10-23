import { useState } from 'react';
import { useFormik, Formik } from 'formik';
import type { NextPage } from 'next';
import * as yup from 'yup';
import FormInput from '../components/FormInput';
import FormDateInput from '../components/FormDateInput'
import styles from '../styles/Main.module.css';
// todo: consolidate styles & create constants for colors, etc.

const Main: NextPage = () => {
  // todo: use local state for inputs & multi-patient referrals
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const initialValues = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    contactLanguage: '',
    phone: '',
    email: '',
    address: '',
    notes: '',
  };

  const validationSchema = yup.object({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    dateOfBirth: yup.date().required('Date of birth is required'),
    contactLanguage: yup.string().required('Language is required'),
    phone: yup
      .string()
      .required('Phone number is required')
      .matches(/^[0-9]*$/, 'Must be a valid phone number')
      .min(10, 'Must be a valid phone number')
      .max(10, 'Must be a valid phone number'),
    email: yup
      .string()
      .email('Must be a valid email')
      .required('Email is required'),
    address: yup.string().required('Address is required'), // todo: address autocomplete
    notes: yup.string(),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={() => {
        // todo: handle multiple referrals in success message
        setMessage("Success! You have submitted a patient referral. You will be notified once they've been approved.");
        setSubmitted(true);
      }}
      validationSchema={validationSchema}
    >
      {(formik) => {
        const isInvalidForm = Object.values(formik.errors).some(error => error !== null || error !== "");
        const fullName = formik.values.firstName && formik.values.lastName
          ? formik.values.firstName + " " + formik.values.lastName
          : "New Referral";
        const patientNumber = 1;

        return (
          <div className={styles.container}>
            <div className={styles.header}>
              <h1>Patient Referral Form</h1>
              <h2>Hayes Valley Health San Francisco</h2>
            </div>

            <div className={styles.formPage}>
              <h1>Referral Patients</h1>
              <h2>You can add up to five patients at a time</h2>

              <div className={styles.form}>
                <div className={styles.formHeader}>
                  <p>{patientNumber}</p>
                  <h1>{fullName}</h1>
                </div>
                {/* todo:
            - add missing fields
            - create reusable form input component
            - create reusable form component (for up to 5 patients) */}
                <form onSubmit={formik.handleSubmit}>
                  <div className={styles.formInputs}>
                    <FormInput type="text" name="firstName" placeholder="First Name"/>
                    <FormInput type="text" name="lastName" placeholder="Last Name"/>
                    <FormDateInput name="dateOfBirth" placeholderText="Date of Birth"/>
                    <FormInput type="text" name="contactLanguage" placeholder="Contact Language"/>
                    <FormInput type="phone" name="phone" placeholder="Phone" />
                    <FormInput type="email" name="email" placeholder="Email"/>
                    <FormInput type="address" name="address" placeholder="Address" width="100%"/>
                    <FormInput type="text" name="notes" placeholder="Notes" width="100%"/>
                  </div>
                  {/* todo: 
                  - make "+ add another patient" button that duplicates form
                  - make form component collapsible when there are multiple patients */}
                </form>
              </div>
            </div>
            {/* todo: handle form submit & show success message */}
            <button onClick={() => {}}>
              + Add Another Patient
            </button>
            <button type="submit" onClick={formik.submitForm}>
              Send Referrals
            </button>
          </div>
        );
      }}
    </Formik>
  );
}

export default Main;