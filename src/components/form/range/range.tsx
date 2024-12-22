import Input from '@/components/form/input/input';

import styles from './range.module.css';

type RangeProps = {
  label: string;
  min: number;
  max: number;
  step?: number;
  name: string;
};

const Range = ({ label, min, max, step, name }: RangeProps) => {
  return (
    <div className={styles.container}>
      {label}
      <div className={styles.range}>
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
