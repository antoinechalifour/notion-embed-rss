import styles from "../styles/Home.module.css";
import { Widget } from "../src/Widget";
import { Feed } from "../src/components/Feed";

const CustomFeed = ({ feeds }) => (
  <ul className={styles.container}>
    {feeds.map((feed) => (
      <Feed key={feed.link} feed={feed} />
    ))}
  </ul>
);

export default CustomFeed;

export const getServerSideProps = async ({ query }) => ({
  props: { feeds: await new Widget(query.sources).content() },
});
