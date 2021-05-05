import styles from "../../../styles/FeedsWidget.module.css";
import { Result } from "../Result";
import { FeedSuccess } from "../FeedSuccess";
import { FeedError } from "../FeedError";
import { Font, Theme } from "../Theme";

import { RefreshButton } from "./RefreshButton";
import { FeedErrorView } from "./FeedErrorView";
import { FeedView } from "./FeedView";

interface FeedsWidgetViewProps {
  content: Result<FeedSuccess, FeedError>[];
  fontClass: Font;
  themeClass: Theme;
}

const FeedsWidgetView = ({
  content,
  fontClass,
  themeClass,
}: FeedsWidgetViewProps) => (
  <main className={`${styles.feedsWidget} ${fontClass} ${themeClass}`}>
    <RefreshButton />

    <ul>
      {content.map((result) =>
        result.type === "success" ? (
          <FeedView key={result.data.forUrl} feed={result.data.feed} />
        ) : (
          <FeedErrorView key={result.error.forUrl} url={result.error.forUrl} />
        )
      )}
    </ul>
  </main>
);
export default FeedsWidgetView;
