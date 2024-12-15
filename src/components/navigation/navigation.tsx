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
        className={clsx(
          styles.link,
          pathname === '/collections' && styles.active
        )}
        href={'/collections'}
      >
        Коллекции
      </Link>
    </nav>
  );
};

export default Navigation;
