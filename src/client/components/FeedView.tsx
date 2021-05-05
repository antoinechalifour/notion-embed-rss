import styles from "../../../styles/Feed.module.css";
import type { Feed } from "../Feed";

import { FeedItemsView } from "./FeedItemsView";
import { EmptyFeedView } from "./EmptyFeedView";

interface FeedViewProps {
  feed: Feed;
}

export const FeedView = ({ feed }: FeedViewProps) => (
  <li className={styles.feed}>
    <h2>{feed.title}</h2>

    {feed.items.length > 0 ? <FeedItemsView feed={feed} /> : <EmptyFeedView />}
  </li>
);
