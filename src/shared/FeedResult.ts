import { FeedReadModel } from "./FeedReadModel";

export interface SuccessResult {
  forUrl: string;
  feed: FeedReadModel;
}

export interface ErrorResult {
  forUrl: string;
}
