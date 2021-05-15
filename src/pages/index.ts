import { GetServerSideProps } from "next";
import { clock } from "../server/clock";
import { makeRedirect } from "../server/http/redirect";
import { BuildFeeds } from "../server/rss/BuildFeeds";
import { FeedsWidgetPagePresenter } from "../server/FeedsWidgetPagePresenter";
import FeedsWidgetView from "../client/components/FeedsWidgetView";

export default FeedsWidgetView;

export const getServerSideProps: GetServerSideProps = async ({
  query,
  res,
}) => {
  const presenter = new FeedsWidgetPagePresenter();
  const buildFeeds = new BuildFeeds(makeRedirect(res), clock, presenter);

  await buildFeeds.execute({
    sources: query.sources as string,
    font: query.font as string | undefined,
    theme: query.theme as string | undefined,
  });

  return presenter.toPage();
};
