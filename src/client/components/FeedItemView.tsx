import styles from "../../../styles/FeedItem.module.css";
import { FeedItemReadModel } from "../../shared/FeedItemReadModel";

interface FeedItemViewProps {
  item: FeedItemReadModel;
}

export const FeedItemView = ({ item }: FeedItemViewProps) => (
  <li className={styles.feedItem}>
    <p>{item.title}</p>
    <a href={item.link} target="_blank" />
    <time>{item.publicationDate}</time>
  </li>
);
