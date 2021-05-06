import { Feed } from "./Feed";

export interface SuccessResult {
  forUrl: string;
  feed: Feed;
}

export interface ErrorResult {
  forUrl: string;
}
