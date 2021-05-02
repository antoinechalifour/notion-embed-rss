import styles from "../../styles/FeedError.module.css";

export const FeedError = ({ url }) => (
  <li className={styles.feedError}>
    <p>
      Could not fetch RSS feed from url <span>{url}</span>
    </p>
  </li>
);
