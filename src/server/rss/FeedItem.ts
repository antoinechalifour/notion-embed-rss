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
    private readonly publicationDate: PublicationDate
  ) {}

  static ofParsingResult({ title, link, pubDate }: OfParsingResultOptions) {
    return new FeedItem(title, link, new PublicationDate(pubDate));
  }

  isPublishedAfter(date: Date) {
    return this.publicationDate.isAfter(date);
  }

  read() {
    return {
      title: this.title,
      link: this.link,
      publicationDate: this.publicationDate.display(),
    };
  }
}
