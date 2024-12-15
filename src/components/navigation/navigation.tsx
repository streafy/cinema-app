import NavigationLink from '@/components/navigation/navigation-link';

import styles from './navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <NavigationLink href={'/'} isExact={true}>
        Главная
      </NavigationLink>
      <NavigationLink href={'/collections'}>Коллекции</NavigationLink>
    </nav>
  );
};

export default Navigation;
