import Parser from "rss-parser";
import { error, success } from "../../shared/Result";
import { ErrorResult, SuccessResult } from "../../shared/FeedResult";

import { Feed } from "./Feed";

export class Source {
  constructor(private readonly url: string) {}

  async contentSince(date: Date) {
    try {
      const response: any = await new Parser().parseURL(this.url);

      return success<SuccessResult>({
        forUrl: this.url,
        feed: Feed.ofParsingResult(response).withContentSince(date).read(),
      });
    } catch (e) {
      return error<ErrorResult>({ forUrl: this.url });
    }
  }
}
