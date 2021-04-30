import styles from "../../styles/Home.module.css";
import { FeedItem } from "./FeedItem";

export const FeedItems = ({ feed }) => (
  <ol className={styles.feedItems}>
    {feed.items.map((item) => (
      <FeedItem key={item.id} item={item} />
    ))}
  </ol>
);
