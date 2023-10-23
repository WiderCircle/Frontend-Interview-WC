import { InputHTMLAttributes } from 'react';
import classnames from 'classnames'
import { useFormikContext } from 'formik';
import styles from '../styles/Main.module.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  width?: string;
}

const FormInput: React.FC<Props> = ({ name, width, ...props }) => {
  const { handleChange, handleBlur, errors, values, touched } = useFormikContext();
  return (
    <div
      className={classnames(
        styles.formInput,
        { [styles.fullWidthInput]: width === "100%" }
      )}
    >
      <input
        onChange={handleChange}
        onBlur={handleBlur}
        name={name}
        value={values[name]}
        {...props}
      />
      {touched[name] && errors[name] && <p className={styles.formErrors}>{errors[name]}</p>}
    </div>
  );
};

export default FormInput;