import { Redirect } from "../http/redirect";
import { Font, fonts, Theme, themes } from "../../client/Theme";

import { Feeds } from "./Feeds";
import { redirect } from "next/dist/next-server/server/api-utils";
import { Clock } from "./Clock";

const INSTRUCTIONS_PAGE =
  "https://www.notion.so/RSS-feed-in-your-Notion-pages-29ca9a07ea54441a98ae4b9fb3d620d3";

interface BuildFeedsOptions {
  redirect: Redirect;
  clock: Clock;
  sources: string;
  font?: string;
  theme?: string;
}

export const buildFeeds = async ({
  redirect,
  sources,
  clock,
  font = "default",
  theme = "light",
}: BuildFeedsOptions) => {
  if (!sources) return redirect(302, INSTRUCTIONS_PAGE);
  const fontClass: Font = fonts.includes(font as Font)
    ? (font as Font)
    : "default";
  const themeClass: Theme = themes.includes(theme as Theme)
    ? (theme as Theme)
    : "light";

  return {
    props: {
      content: await new Feeds(sources).contentForDate(clock.now()),
      fontClass,
      themeClass,
    },
  };
};
