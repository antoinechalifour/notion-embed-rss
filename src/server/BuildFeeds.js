import { Feeds } from "./Feeds";

const INSTRUCTIONS_PAGE =
  "https://www.notion.so/RSS-feed-in-your-Notion-pages-29ca9a07ea54441a98ae4b9fb3d620d3";

export const buildFeeds = async ({ redirect, sources }) => {
  if (!sources) return redirect(302, INSTRUCTIONS_PAGE);

  return {
    props: { content: await new Feeds(sources).content() },
  };
};
