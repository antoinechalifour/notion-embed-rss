import styles from "../../styles/FeedsWidget.module.css";

import { RefreshButton } from "./RefreshButton";
import { Feed } from "./Feed";

const FeedsWidget = ({ feeds }) => (
  <main>
    <RefreshButton />

    <ul className={styles.container}>
      {feeds.map((feed) => (
        <Feed key={feed.link} feed={feed} />
      ))}
    </ul>
  </main>
);
export default FeedsWidget;
