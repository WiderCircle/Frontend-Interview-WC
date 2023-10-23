import { Dispatch, SetStateAction } from 'react';
import classnames from 'classnames';
import { Formik } from 'formik';
import * as yup from 'yup';

import NewPatientForm from './NewPatientForm';
import { formikConfig } from '../lib/form';
import { Patient } from '../lib/types';

import styles from '../styles/Main.module.css';

type Props = {
  patients: Patient[];
  submitted: boolean;
  setSubmitted: Dispatch<SetStateAction<boolean>>
}

const Referral: React.FC<Props> = ({ patients, submitted, setSubmitted }) => {
  return (
    <Formik
      initialValues={Object.keys(formikConfig).reduce((obj, key) => {
      obj[key] = formikConfig[key].initialValue;
        return obj;
      }, {})}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          actions.setSubmitting(false);
        }, 1000);
        setSubmitted(true);
      }}
      validationSchema={yup.object(Object.keys(formikConfig).reduce((obj, key) => {
        obj[key] = formikConfig[key].schema;
        return obj;
      }, {}))}
    >
      {(formik) => {
        return (
          <div className={styles.container}>
            <div className={styles.header}>
              <h1>Patient Referral Form</h1>
              <h2>Hayes Valley Health San Francisco</h2>
            </div>
            {submitted && (
              <div className={classnames(styles.submitStatus, styles.success)}>
                Success! You have submitted a patient referral. You will be notified once they've been approved.
              </div>
            )}
            <div className={styles.formPage}>
              <h1>Referral Patients</h1>
              <h2>You can add up to five patients at a time</h2>
              {patients.map(patient => (
                <NewPatientForm key={patient.number} patient={patient} />
              ))}
              <button
                className={classnames(styles.button, styles.textButton)}
                disabled={true}
                onClick={() => { }}
              >
                + Add Another Patient
              </button>
              <button
                className={classnames(styles.button, styles.submitButton)}
                disabled={!(formik.isValid && formik.dirty)}
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
};

export default Referral;