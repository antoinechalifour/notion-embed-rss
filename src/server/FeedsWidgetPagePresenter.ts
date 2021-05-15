import { Font, Theme } from "../shared/Theme";
import { Result } from "../shared/Result";
import { ErrorResult, SuccessResult } from "../shared/FeedResult";

import { FeedsWidgetPresenter } from "./FeedsWidgetPresenter";

export class FeedsWidgetPagePresenter implements FeedsWidgetPresenter {
  private font: Font | null = null;
  private theme: Theme | null = null;
  private results: Result<SuccessResult, ErrorResult>[] = [];

  present(data: {
    font: Font;
    theme: Theme;
    results: Result<SuccessResult, ErrorResult>[];
  }) {
    this.font = data.font;
    this.theme = data.theme;
    this.results = data.results;
  }

  toPage(): any {
    return {
      props: {
        content: this.results,
        fontClass: this.font,
        themeClass: this.theme,
      },
    };
  }
}
