import styles from "../../../styles/FeedError.module.css";

interface FeedErrorViewProps {
  url: string;
}

export const FeedErrorView = ({ url }: FeedErrorViewProps) => (
  <li className={styles.feedError}>
    <p>
      Could not fetch RSS feed from url <span>{url}</span>
    </p>
  </li>
);
