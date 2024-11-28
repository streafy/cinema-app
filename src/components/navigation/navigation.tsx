'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './navigation.module.css';

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.navigation}>
      <Link
        className={clsx(styles.link, pathname === '/' && styles.active)}
        href={'/'}
      >
        Главная
      </Link>
      <Link
        className={clsx(styles.link, pathname === '/123' && styles.active)}
        href={'/123'}
      >
        Не главная
      </Link>
    </nav>
  );
};

export default Navigation;
