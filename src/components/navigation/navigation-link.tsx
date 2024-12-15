'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

import styles from './navigation-link.module.css';

type NavigationLinkProps = {
  href: string;
  children: ReactNode;
  isExact?: boolean;
};

const NavigationLink = ({
  href,
  children,
  isExact = false,
}: NavigationLinkProps) => {
  const pathname = usePathname();
  const isActive = isExact ? pathname === href : pathname.startsWith(href);

  return (
    <Link href={href} className={clsx(styles.link, isActive && styles.active)}>
      {children}
    </Link>
  );
};

export default NavigationLink;
