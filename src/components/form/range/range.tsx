import Input from '@/components/form/input/input';
import clsx from 'clsx';

import styles from './range.module.css';

type RangeProps = {
  label: string;
  min: number;
  max: number;
  step?: number;
  name: string;
  inputSize: 'small' | 'medium';
};

const Range = ({ label, min, max, step, name, inputSize }: RangeProps) => {
  return (
    <div className={styles.container}>
      {label}
      <div
        className={clsx(
          styles.range,
          inputSize === 'small' && styles.small,
          inputSize === 'medium' && styles.medium
        )}
      >
        <Input
          label="от"
          type="number"
          min={min}
          max={max}
          step={step}
          name={`${name}From`}
        />
        <Input
          label="до"
          type="number"
          min={min}
          max={max}
          step={step}
          name={`${name}To`}
        />
      </div>
    </div>
  );
};

export default Range;
