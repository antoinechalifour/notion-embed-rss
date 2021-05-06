import { BuildFeeds } from "../src/server/rss/BuildFeeds";
import { FeedsWidgetPagePresenter } from "../src/server/FeedsWidgetPagePresenter";

import { fixedClock } from "./utils/clock";

it("Redirects to the widget instructions", async () => {
  // Arrange
  const redirect = jest.fn();
  const buildFeeds = new BuildFeeds(
    redirect,
    fixedClock(),
    new FeedsWidgetPagePresenter()
  );

  // Act
  await buildFeeds.execute({
    sources: "",
    font: "mono",
    theme: "light",
  });

  // Assert
  expect(redirect).toHaveBeenCalledTimes(1);
  expect(redirect).toHaveBeenCalledWith(
    302,
    "https://www.notion.so/RSS-feed-in-your-Notion-pages-29ca9a07ea54441a98ae4b9fb3d620d3"
  );
});
