import styles from "../../styles/FeedsWidget.module.css";

import { RefreshButton } from "./RefreshButton";
import { Feed } from "./Feed";
import { FeedError } from "./FeedError";

const FeedsWidget = ({ content }) => (
  <main>
    <RefreshButton />

    <ul className={styles.container}>
      {content.map((result) =>
        result.type === "success" ? (
          <Feed key={result.forUrl} feed={result.feed} />
        ) : (
          <FeedError key={result.forUrl} url={result.forUrl} />
        )
      )}
    </ul>
  </main>
);
export default FeedsWidget;
