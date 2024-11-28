import clsx from 'clsx';
import Link from 'next/link';

import styles from './pagination-number.module.css';

type PaginationNumberProps = {
  page: number;
  href: string;
  isActive: boolean;
};

const PaginationNumber = ({ page, href, isActive }: PaginationNumberProps) => {
  const classname = clsx(styles.number, {
    [styles.active]: isActive,
  });
  return isActive ? (
    <div className={classname}>{page}</div>
  ) : (
    <Link className={classname} href={href}>
      {page}
    </Link>
  );
};

export default PaginationNumber;
