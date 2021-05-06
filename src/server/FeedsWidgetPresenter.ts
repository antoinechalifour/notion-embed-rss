import { Font, Theme } from "../client/Theme";
import { Result } from "../shared/Result";
import { ErrorResult } from "./rss/ErrorResult";
import { SuccessResult } from "./rss/SuccessResult";

export interface FeedsWidgetPresenter {
  present(data: {
    font: Font;
    theme: Theme;
    results: Result<SuccessResult, ErrorResult>[];
  }): void;
  toPage(): any;
}
