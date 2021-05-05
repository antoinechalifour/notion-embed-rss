import { Feed as FeedViewModel } from "../../client/Feed";

import { FeedItem } from "./FeedItem";

interface OfParsingResultOptions {
  title: string;
  link: string;
  items: Array<{ title: string; link: string; pubDate: string }>;
}

export class Feed {
  constructor(
    private readonly title: string,
    private readonly link: string,
    private readonly items: FeedItem[],
    private readonly forDate: Date
  ) {}

  static ofParsingResult(
    { title, link, items }: OfParsingResultOptions,
    now: Date
  ) {
    return new Feed(
      title,
      link,
      items.map((item) => FeedItem.ofParsingResult(item)),
      now
    );
  }

  get itemsShownInFeed() {
    return this.items.filter((item) => item.showInFeed(this.forDate));
  }

  toJSON(): FeedViewModel {
    return {
      title: this.title,
      items: this.itemsShownInFeed.map((item) => item.toJSON()),
    };
  }
}
