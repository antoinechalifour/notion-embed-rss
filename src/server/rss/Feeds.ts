import { Result } from "../../shared/Result";

import { Source } from "./Source";
import { ErrorResult } from "./ErrorResult";
import { SuccessResult } from "./SuccessResult";

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
