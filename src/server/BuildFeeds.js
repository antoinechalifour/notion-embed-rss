import { Feeds } from "./Feeds";

const INSTRUCTIONS_PAGE =
  "https://www.notion.so/RSS-feed-in-your-Notion-pages-29ca9a07ea54441a98ae4b9fb3d620d3";

const fonts = ["default", "serif", "mono"];
const themes = ["light", "dark"];

export const buildFeeds = async ({
  redirect,
  sources,
  font = "default",
  theme = "light",
}) => {
  if (!sources) return redirect(302, INSTRUCTIONS_PAGE);
  const fontClass = fonts.includes(font) ? font : "default";
  const themeClass = themes.includes(theme) ? theme : "light";

  return {
    props: {
      content: await new Feeds(sources).content(),
      fontClass,
      themeClass,
    },
  };
};
