import { Font, Theme } from "../shared/Theme";
import { Result } from "../shared/Result";
import { ErrorResult, SuccessResult } from "../shared/FeedResult";

export interface FeedsWidgetPresenter {
  present(data: {
    font: Font;
    theme: Theme;
    results: Result<SuccessResult, ErrorResult>[];
  }): void;
  toPage(): any;
}
