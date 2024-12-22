import { HTMLInputTypeAttribute } from 'react';

import styles from './input.module.css';

type InputProps = {
  label: string;
  type: HTMLInputTypeAttribute;
  min?: number;
  max?: number;
  step?: number;
  name: string;
};

const Input = ({ label, type, min, max, step, name }: InputProps) => {
  return (
    <label className={styles.label}>
      {label}
      <input
        className={styles.input}
        type={type}
        min={min}
        max={max}
        step={step}
        name={name}
      />
    </label>
  );
};

export default Input;
