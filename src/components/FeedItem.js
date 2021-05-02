import styles from "../../styles/FeedItem.module.css";

export const FeedItem = ({ item }) => (
  <li className={styles.feedItem}>
    <p>{item.title}</p>
    <a href={item.link} target="_blank" />
    <time>{item.date}</time>
  </li>
);
