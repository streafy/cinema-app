import styles from './collection-card.module.css';

type CollectionCardProps = {
  name: string;
};

const CollectionCard = ({ name }: CollectionCardProps) => {
  return <div className={styles.card}>{name}</div>;
};

export default CollectionCard;
