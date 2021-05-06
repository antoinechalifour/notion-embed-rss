import { FeedItem } from "./FeedItem";

interface OfParsingResultOptions {
  title: string;
  link: string;
  items: Array<{ title: string; link: string; pubDate: string }>;
}

export class Feed {
  itemsSinceDate: FeedItem[] = [];

  constructor(
    readonly title: string,
    readonly link: string,
    private readonly items: FeedItem[]
  ) {}

  static ofParsingResult({ title, link, items }: OfParsingResultOptions) {
    return new Feed(
      title,
      link,
      items.map((item) => FeedItem.ofParsingResult(item))
    );
  }

  withContentSince(since: Date) {
    this.itemsSinceDate = this.items.filter((item) =>
      item.isPublishedAfter(since)
    );

    return this;
  }

  read() {
    return {
      title: this.title,
      link: this.link,
      items: this.itemsSinceDate.map((item) => item.read()),
    };
  }
}
