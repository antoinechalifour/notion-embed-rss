import styles from "../styles/Home.module.css";
import { Widget } from "../src/Widget";
import { Feed } from "../src/components/Feed";
import { RefreshButton } from "../src/components/RefreshButton";

const CustomFeed = ({ feeds }) => (
  <main>
    <RefreshButton />

    <ul className={styles.container}>
      {feeds.map((feed) => (
        <Feed key={feed.link} feed={feed} />
      ))}
    </ul>
  </main>
);

export default CustomFeed;

export const getServerSideProps = async ({ query }) => ({
  props: { feeds: await new Widget(query.sources).content() },
});
