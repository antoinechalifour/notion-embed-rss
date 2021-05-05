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
    private readonly items: FeedItem[]
  ) {}

  static ofParsingResult({ title, link, items }: OfParsingResultOptions) {
    return new Feed(
      title,
      link,
      items.map((item) => FeedItem.ofParsingResult(item))
    );
  }

  get itemsShownInFeed() {
    return this.items.filter((item) => item.showInFeed());
  }

  toJSON(): FeedViewModel {
    return {
      title: this.title,
      items: this.itemsShownInFeed.map((item) => item.toJSON()),
    };
  }
}
