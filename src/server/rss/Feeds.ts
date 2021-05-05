import { error, Result, success } from "../../client/Result";
import { FeedSuccess } from "../../client/FeedSuccess";
import { FeedError } from "../../client/FeedError";

import Parser from "rss-parser";
import { Feed } from "./Feed";

export class Feeds {
  private sources: string[];
  private parser: Parser;

  constructor(concatenatedSources: string) {
    if (!concatenatedSources) throw new Error("No source specified");

    this.sources = concatenatedSources.split(",");
    this.parser = new Parser();
  }

  content(): Promise<Result<FeedSuccess, FeedError>[]> {
    return Promise.all(this.sources.map((url) => this.parseUrl(url)));
  }

  private async parseUrl(url: string) {
    try {
      const response: any = await this.parser.parseURL(url);

      return success<FeedSuccess>({
        forUrl: url,
        feed: Feed.ofParsingResult(response).toJSON(),
      });
    } catch (e) {
      return error<FeedError>({ forUrl: url });
    }
  }
}
