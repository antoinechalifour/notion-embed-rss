import styles from "../../../styles/FeedItems.module.css";
import { FeedReadModel } from "../../shared/FeedReadModel";

import { FeedItemView } from "./FeedItemView";

interface FeedItemsViewProps {
  feed: FeedReadModel;
}

export const FeedItemsView = ({ feed }: FeedItemsViewProps) => (
  <ol className={styles.feedItems}>
    {feed.items.map((item) => (
      <FeedItemView key={item.link} item={item} />
    ))}
  </ol>
);
