import FeedsWidgetView from "../client/components/FeedsWidgetView";
import { makeRedirect } from "../server/http/redirect";
import { buildFeeds } from "../server/rss/BuildFeeds";
import { GetServerSideProps } from "next";

export default FeedsWidgetView;

export const getServerSideProps: GetServerSideProps = async ({ query, res }) =>
  buildFeeds({
    redirect: makeRedirect(res),
    sources: query.sources as string,
    font: query.font as string | undefined,
    theme: query.theme as string | undefined,
  });
