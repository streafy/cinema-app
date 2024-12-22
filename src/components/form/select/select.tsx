import { ReactNode } from 'react';

import styles from './select.module.css';

type SelectProps = {
  label: string;
  placeholder?: string;
  name: string;
  children: ReactNode;
};

const Select = ({ label, placeholder, name, children }: SelectProps) => {
  return (
    <label className={styles.label}>
      {label}
      <select className={styles.select} name={name}>
        {Boolean(placeholder) && <option value="">{placeholder}</option>}
        {children}
      </select>
    </label>
  );
};

export default Select;
