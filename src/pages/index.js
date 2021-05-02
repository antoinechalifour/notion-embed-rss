import FeedsWidget from "../components/FeedsWidget";
import { makeRedirect } from "../server/http/redirect";
import { buildFeeds } from "../server/BuildFeeds";

export default FeedsWidget;

export const getServerSideProps = async ({ query, res }) =>
  buildFeeds({
    redirect: makeRedirect(res),
    sources: query.sources,
  });
