'use client';

import PaginationArrow from '@/components/pagination/pagination-arrow';
import PaginationNumber from '@/components/pagination/pagination-number';
import { usePathname, useSearchParams } from 'next/navigation';

import styles from './pagination.module.css';

type PaginationProps = {
  totalPages: number;
  displayedPages: number;
};

const Pagination = ({ totalPages, displayedPages }: PaginationProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Math.min(
    totalPages,
    Math.max(1, Number(searchParams.get('page')) || 1)
  );
  const offset = Math.min(currentPage, totalPages - displayedPages + 1);

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className={styles.pagination}>
      <PaginationArrow
        href={createPageURL(1)}
        direction="left"
        type="double"
        isDisabled={currentPage <= 1}
      />
      <PaginationArrow
        href={createPageURL(currentPage - 1)}
        direction="left"
        type="single"
        isDisabled={currentPage <= 1}
      />
      {[...Array(displayedPages)].map((_, index) => (
        <PaginationNumber
          key={index}
          page={index + offset}
          href={createPageURL(index + offset)}
          isActive={currentPage === index + offset}
        />
      ))}
      <PaginationArrow
        href={createPageURL(currentPage + 1)}
        direction="right"
        type="single"
        isDisabled={currentPage >= totalPages}
      />
      <PaginationArrow
        href={createPageURL(totalPages)}
        direction="right"
        type="double"
        isDisabled={currentPage >= totalPages}
      />
    </div>
  );
};

export default Pagination;
