import Parser from "rss-parser";

import { error, Result, success } from "../../client/Result";
import { FeedSuccess } from "../../client/FeedSuccess";
import { FeedError } from "../../client/FeedError";

import { Feed } from "./Feed";

export class Feeds {
  private sources: string[];
  private parser: Parser;

  constructor(concatenatedSources: string) {
    if (!concatenatedSources) throw new Error("No source specified");

    this.sources = concatenatedSources.split(",");
    this.parser = new Parser();
  }

  contentForDate(forDate: Date): Promise<Result<FeedSuccess, FeedError>[]> {
    return Promise.all(this.sources.map((url) => this.parseUrl(url, forDate)));
  }

  private async parseUrl(url: string, forDate: Date) {
    try {
      const response: any = await this.parser.parseURL(url);

      return success<FeedSuccess>({
        forUrl: url,
        feed: Feed.ofParsingResult(response, forDate).toJSON(),
      });
    } catch (e) {
      return error<FeedError>({ forUrl: url });
    }
  }
}
