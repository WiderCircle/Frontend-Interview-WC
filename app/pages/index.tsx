import { useState } from 'react';
import classnames from 'classnames'
import { Formik } from 'formik';
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

  type FormikConfig = {
    initialValue: string,
    placeholder: string,
    schema: yup.Schema,
    type: string,
    width?: string,
  }
  const formikConfig: { [input: string]: FormikConfig } = {
    firstName: {
      initialValue: '',
      placeholder: "First Name",
      schema: yup.string().required('First name is required'),
      type: "text",
    },
    lastName: {
      initialValue: '',
      placeholder: "Last Name",
      schema: yup.string().required('Last name is required'),
      type: "text",
    },
    dateOfBirth: {
      initialValue: '',
      placeholder: "Date of Birth",
      schema: yup.date().required('Date of birth is required'),
      type: "date",
    },
    contactLanguage: {
      initialValue: '',
      placeholder: "Contact Language",
      schema: yup.string().required('Language is required'),
      type: "text",
    },
    phone: {
      initialValue: '',
      placeholder: "Phone",
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
      placeholder: "Email",
      schema: yup
        .string()
        .email('Must be a valid email')
        .required('Email is required'),
      type: "email",
    },
    address: {
      initialValue: '',
      placeholder: "Address",
      schema: yup.string().required('Address is required'), // todo: address autocomplete
      type: "text",
      width: "100%",
    },
    notes: {
      initialValue: '',
      placeholder: "Notes",
      schema: yup.string(),
      type: "text",
      width: "100%",
    },
  };

  return (
    <Formik
      initialValues={Object.keys(formikConfig).reduce((obj, key) => {
        obj[key] = formikConfig[key].initialValue;
        return obj;
      }, {})}
      onSubmit={() => {
        // todo: handle multiple referrals in success message
        setMessage("Success! You have submitted a patient referral. You will be notified once they've been approved.");
        setSubmitted(true);
      }}
      validationSchema={yup.object(Object.keys(formikConfig).reduce((obj, key) => {
        obj[key] = formikConfig[key].schema;
        return obj;
      }, {}))}
    >
      {(formik) => {
        const fullName = formik.values["firstName"] && formik.values["lastName"]
          ? formik.values["firstName"] + " " + formik.values["lastName"]
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
                    {Object.entries(formikConfig).map(([name, input]) => (
                      input.type === "date" 
                      ? <FormDateInput name={name} placeholderText={input.placeholder} />
                      : <FormInput type={input.type} name={name} placeholder={input.placeholder} />
                    ))}
                  </div>
                  {/* todo: 
                  - make "+ add another patient" button that duplicates form
                  - make form component collapsible when there are multiple patients */}
                </form>
              </div>
              {/* todo: handle form submit & show success message */}
              <button
                className={classnames(styles.button, styles.textButton)}
                onClick={() => { }}
              >
                + Add Another Patient
              </button>
              <button
                className={classnames(styles.button, styles.submitButton)}
                type="submit"
                onClick={formik.submitForm}
              >
                Send Referrals
              </button>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}

export default Main;