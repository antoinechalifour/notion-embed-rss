import { Result } from "../../shared/Result";
import { ErrorResult, SuccessResult } from "../../shared/FeedResult";

import { Source } from "./Source";

export class Feeds {
  private sources: Source[];

  constructor(concatenatedSources: string) {
    if (!concatenatedSources) throw new Error("No source specified");

    this.sources = concatenatedSources.split(",").map((url) => new Source(url));
  }

  async contentSince(
    since: Date
  ): Promise<Result<SuccessResult, ErrorResult>[]> {
    return Promise.all(
      this.sources.map((source) => source.contentSince(since))
    );
  }
}
