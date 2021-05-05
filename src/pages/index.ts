import { GetServerSideProps } from "next";
import { clock } from "../server/clock";
import FeedsWidgetView from "../client/components/FeedsWidgetView";
import { makeRedirect } from "../server/http/redirect";
import { buildFeeds } from "../server/rss/BuildFeeds";

export default FeedsWidgetView;

export const getServerSideProps: GetServerSideProps = async ({ query, res }) =>
  buildFeeds({
    clock,
    redirect: makeRedirect(res),
    sources: query.sources as string,
    font: query.font as string | undefined,
    theme: query.theme as string | undefined,
  });
