import { subDays } from "date-fns";
import { Redirect } from "../http/redirect";
import { safeFont, safeTheme } from "../../shared/Theme";
import { FeedsWidgetPresenter } from "../FeedsWidgetPresenter";

import { Feeds } from "./Feeds";
import { Clock } from "./Clock";

const INSTRUCTIONS_PAGE =
  "https://www.notion.so/RSS-feed-in-your-Notion-pages-29ca9a07ea54441a98ae4b9fb3d620d3";

interface BuildFeedsOptions {
  sources: string;
  font?: string;
  theme?: string;
}

export class BuildFeeds {
  constructor(
    private redirect: Redirect,
    private clock: Clock,
    private presenter: FeedsWidgetPresenter
  ) {}

  async execute({
    sources,
    font = "default",
    theme = "light",
  }: BuildFeedsOptions) {
    if (!sources) return this.redirect(302, INSTRUCTIONS_PAGE);

    const feeds = new Feeds(sources);
    const contentSinceDate = subDays(this.clock.now(), 14);

    this.presenter.present({
      font: safeFont(font),
      theme: safeTheme(theme),
      results: await feeds.contentSince(contentSinceDate),
    });
  }
}
