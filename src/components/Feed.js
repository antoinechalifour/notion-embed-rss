import styles from "../../styles/Feed.module.css";

import { FeedItems } from "./FeedItems";
import { EmptyFeed } from "./EmptyFeed";

export const Feed = ({ feed }) => (
  <li className={styles.feed}>
    <h2>{feed.title}</h2>

    {feed.items.length > 0 ? <FeedItems feed={feed} /> : <EmptyFeed />}
  </li>
);
