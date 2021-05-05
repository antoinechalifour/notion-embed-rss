import { FeedItem as FeedItemViewModel } from "../../client/FeedItem";
import { PublicationDate } from "./PublicationDate";

interface OfParsingResultOptions {
  title: string;
  link: string;
  pubDate: string;
}

export class FeedItem {
  constructor(
    private readonly title: string,
    private readonly link: string,
    private readonly date: PublicationDate
  ) {}

  static ofParsingResult({ title, link, pubDate }: OfParsingResultOptions) {
    return new FeedItem(title, link, new PublicationDate(pubDate));
  }

  showInFeed(now: Date) {
    return this.date.isKnown() && this.date.isRecent(now);
  }

  get pubDate() {
    return this.date.display();
  }

  toJSON(): FeedItemViewModel {
    return {
      title: this.title,
      link: this.link,
      date: this.pubDate,
    };
  }
}
