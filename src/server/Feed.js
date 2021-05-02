import { FeedItem } from "./FeedItem";

export class Feed {
  constructor({ title, link, items }) {
    this.title = title;
    this.link = link;
    this.items = items.map((item) => new FeedItem(item));
  }

  get itemsShownInFeed() {
    return this.items.filter((item) => item.showInFeed());
  }

  toJSON() {
    return {
      title: this.title,
      link: this.link,
      items: this.itemsShownInFeed.map((item) => item.toJSON()),
    };
  }
}
