import { useFormikContext } from 'formik';
import FormInput from './FormInput';
import FormDateInput from './FormDateInput'
import { formikConfig } from '../lib/form';
import { Patient } from '../lib/types';
import styles from '../styles/Main.module.css';

type Props = {
  patient: Patient,
}

const NewPatientForm: React.FC<Props> = ({ patient }) => {
  const { handleSubmit, values } = useFormikContext();
  const fullName = values["firstName"] && values["lastName"]
    ? values["firstName"] + " " + values["lastName"]
    : "New Referral";

return (
    <div className={styles.form}>
      <div className={styles.formHeader}>
        <p>{patient.number}</p>
        <h1>{fullName}</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.formInputs}>
          {Object.entries(formikConfig).map(([name, input], index) => (
            input.type === "date"
              ? <FormDateInput key={index} name={name} placeholderText={input.placeholder} />
              : <FormInput key={index} type={input.type} name={name} placeholder={input.placeholder} width={input.width} />
          ))}
        </div>
      </form>
    </div>
  );
};

export default NewPatientForm;