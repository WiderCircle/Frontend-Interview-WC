import React from "react";
import { useField, useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import styles from '../styles/Main.module.css';
import "react-datepicker/dist/react-datepicker.css";

type Props = {
  name: string,
  [x: string]: any,
};

export const FormDateInput: React.FC<Props> = ({ name, ...props }) => {
  const { errors, touched } = useFormikContext();
  const [field, _, { setValue }] = useField(name);
  return (
    <div className={styles.formInput}>
      <DatePicker
        {...field}
        {...props}
        selected={(field.value && new Date(field.value)) || null}
        onChange={(val) => setValue(val)}
      />
      {touched[name] && errors[name] && <p className={styles.formErrors}>{errors[name]}</p>}
    </div>
  );
};

export default FormDateInput;