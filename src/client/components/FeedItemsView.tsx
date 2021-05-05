import styles from "../../../styles/FeedItems.module.css";
import { Feed } from "../Feed";

import { FeedItemView } from "./FeedItemView";

interface FeedItemsViewProps {
  feed: Feed;
}

export const FeedItemsView = ({ feed }: FeedItemsViewProps) => (
  <ol className={styles.feedItems}>
    {feed.items.map((item) => (
      <FeedItemView key={item.link} item={item} />
    ))}
  </ol>
);
