import Parser from "rss-parser";
import { format, isAfter, parse, parseISO, isValid, subDays } from "date-fns";

import styles from "../styles/Home.module.css";

export default function Home({ feeds }) {
  return (
    <ul className={styles.container}>
      {feeds.map((feed) => (
        <li className={styles.feed} key={feed.link}>
          <h2 className={styles.feedTitle}>{feed.title}</h2>

          {feed.items.length > 0 ? (
            <ol className={styles.feedItems}>
              {feed.items.map((item) => (
                <li className={styles.feedItem} key={item.id}>
                  <p>{item.title}</p>
                  <a href={item.link} target="_blank" />
                  <time>{item.date}</time>
                </li>
              ))}
            </ol>
          ) : (
            <p className={styles.emptyFeed}>Nothing new!</p>
          )}
        </li>
      ))}
    </ul>
  );
}

export const getServerSideProps = async ({ query }) => {
  if (!query.sources) throw new Error("No source specified");
  const sources = query.sources.split(",");
  const parser = new Parser();

  function parseDate(date) {
    let parsedDate = parseISO(date);
    if (isValid(parsedDate)) return parsedDate;

    parsedDate = parse(date, "E, dd MMM yyyy HH:mm:ss 'GMT'", new Date());

    return isValid(parsedDate) ? parsedDate : null;
  }

  const feeds = await Promise.all(
    sources.map((url) =>
      parser.parseURL(url).then((feed) => ({
        title: feed.title,
        link: feed.link,
        items: feed.items
          .map((item) => ({
            title: item.title,
            link: item.link,
            date: parseDate(item.pubDate),
          }))
          .filter((item) => !!item.date)
          .filter((item) => isAfter(item.date, subDays(new Date(), 7)))
          .map((item) => ({
            ...item,
            date: format(item.date, "dd/MM/yyyy HH:mm"),
          })),
      }))
    )
  );

  return {
    props: {
      feeds,
    },
  };
};
