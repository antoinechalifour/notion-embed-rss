import Parser from "rss-parser";
import { Result } from "./Result";
import { Feed } from "./Feed";

export class Feeds {
  constructor(concatenatedSources) {
    if (!concatenatedSources) throw new Error("No source specified");

    this.sources = concatenatedSources.split(",");
    this.parser = new Parser();
  }

  content() {
    return Promise.all(
      this.sources.map(async (url) => {
        try {
          const response = await this.parser.parseURL(url);

          return Result.success({
            forUrl: url,
            feed: new Feed(response).toJSON(),
          });
        } catch (e) {
          return Result.error({ forUrl: url });
        }
      })
    );
  }
}
