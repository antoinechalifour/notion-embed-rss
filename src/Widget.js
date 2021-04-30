import Parser from "rss-parser";
import { PublicationDate } from "./PublicationDate";

export class Widget {
  constructor(concatenatedSources) {
    if (!concatenatedSources) throw new Error("No source specified");

    this.sources = concatenatedSources.split(",");
    this.parser = new Parser();
  }

  content() {
    return Promise.all(
      this.sources.map((url) =>
        this.parser.parseURL(url).then((feed) => ({
          title: feed.title,
          link: feed.link,
          items: feed.items
            .map((item) => ({
              title: item.title,
              link: item.link,
              date: new PublicationDate(item.pubDate),
            }))
            .filter((item) => item.date.isKnown() && item.date.isRecent())
            .map((item) => ({
              ...item,
              date: item.date.display(),
            })),
        }))
      )
    );
  }
}
