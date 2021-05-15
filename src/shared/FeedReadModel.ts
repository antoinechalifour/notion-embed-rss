import { FeedItemReadModel } from "./FeedItemReadModel";

export interface FeedReadModel {
  title: string;
  items: FeedItemReadModel[];
}
