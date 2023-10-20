import { useState } from 'react';
import { useFormik } from 'formik';
import type { NextPage } from 'next';
import * as yup from 'yup';
import styles from '../styles/Main.module.css';
// todo: consolidate styles & create constants for colors, etc.

const Main: NextPage = () => {
  // todo: use local state for inputs & multi-patient referrals
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      contactLanguage: '',
      phone: '',
      email: '',
      address: '',
      notes: '',
    },
    onSubmit: () => {
      // todo: handle multiple referrals in success message
      setMessage("Success! You have submitted a patient referral. You will be notified once they've been approved.");
      setSubmitted(true);
    },
    // todo: research yup validation fields
    validationSchema: yup.object({
      name: yup.string().trim().required('Name is required'),
      message: yup.string().trim().required('Message is required'),
      firstName: yup.string().trim().required('First name is required'),
      lastName: yup.string().trim().required('Last name is required'),
      dateOfBirth: yup.string().trim().required('Date of birth is required'),
      contactLanguage: yup.string().trim().required('Language is required'),
      phone: yup.string().trim().required('Phone number is required'),
      email: yup
        .string()
        .email('Must be a valid email')
        .required('Email is required'),
      address: yup.string().trim().required('Address is required'),
    }),
  });

  return (
    <div className={styles.container}>
        <div className={styles.header}>
          <h1>Patient Referral Form</h1>
          <h2>Hayes Valley Health San Francisco</h2>
        </div>

        <div className={styles.form}>
          <h1>Referral Patients</h1>
          <h2>You can add up to five patients at a time</h2>

          {/* todo:
          - add missing fields
          - create reusable form input component
          - create reusable form component (for up to 5 patients) */}
          <form onSubmit={formik.handleSubmit}>
            <div>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.firstName && (
                <div>{formik.errors.firstName}</div>
              )}
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.email && (
                <div>{formik.errors.email}</div>
              )}
            </div>

            {/* todo: 
            - make "+ add another patient" button that duplicates form
            - make form component collapsible when there are multiple patients */}

            {/* todo: handle form submit & show success message */}
            <button type="submit">
              Send Referrals
            </button>
          </form>
        </div>

    </div>
  );
}

export default Main;