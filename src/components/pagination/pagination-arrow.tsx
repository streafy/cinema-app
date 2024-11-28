import {
  PaginationArrowDirection,
  PaginationArrowType,
} from '@/types/pagination';
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/16/solid';
import clsx from 'clsx';
import Link from 'next/link';

import styles from './pagination-arrow.module.css';

type PaginationArrowProps = {
  href: string;
  direction: PaginationArrowDirection;
  type: PaginationArrowType;
  isDisabled: boolean;
};

const PaginationArrow = ({
  href,
  direction,
  type,
  isDisabled,
}: PaginationArrowProps) => {
  const classname = clsx(styles.arrow, {
    [styles.disabled]: isDisabled,
  });

  const iconMap = {
    single: {
      left: <ChevronLeftIcon className={styles.icon} />,
      right: <ChevronRightIcon className={styles.icon} />,
    },
    double: {
      left: <ChevronDoubleLeftIcon className={styles.icon} />,
      right: <ChevronDoubleRightIcon className={styles.icon} />,
    },
  };
  const icon = iconMap[type][direction];

  return isDisabled ? (
    <div className={classname}>{icon}</div>
  ) : (
    <Link className={classname} href={href}>
      {icon}
    </Link>
  );
};

export default PaginationArrow;
