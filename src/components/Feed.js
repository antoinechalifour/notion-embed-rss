import styles from "../../styles/Home.module.css";
import { FeedItems } from "./FeedItems";
import { EmptyFeed } from "./EmptyFeed";

export const Feed = ({ feed }) => (
  <li className={styles.feed}>
    <h2 className={styles.feedTitle}>{feed.title}</h2>

    {feed.items.length > 0 ? <FeedItems feed={feed} /> : <EmptyFeed />}
  </li>
);
