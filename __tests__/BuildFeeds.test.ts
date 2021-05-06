import { rest } from "msw";
import { setupServer } from "msw/node";

import { BuildFeeds } from "../src/server/rss/BuildFeeds";
import { FeedsWidgetPagePresenter } from "../src/server/FeedsWidgetPagePresenter";
import { fixedClock } from "./utils/clock";
import {
  joshuaComeauContentFor30thApril,
  joshuaComeauFeed,
} from "./fixtures/feed";

const server = setupServer(
  rest.get("https://www.joshwcomeau.com/rss.xml", (req, res, ctx) =>
    res(ctx.xml(joshuaComeauFeed))
  )
);

beforeAll(() =>
  server.listen({
    onUnhandledRequest: "error",
  })
);

afterAll(() => server.close());

it("Generates the feeds using articles from the last 14 days", async () => {
  // Arrange
  const sources = "https://www.joshwcomeau.com/rss.xml";
  const presenter = new FeedsWidgetPagePresenter();
  const buildFeeds = new BuildFeeds(jest.fn(), fixedClock(), presenter);

  // Act
  await buildFeeds.execute({
    sources,
    font: "mono",
    theme: "light",
  });

  // Assert
  expect(presenter.toPage()).toMatchObject({
    props: {
      content: [
        {
          type: "success",
          data: {
            feed: joshuaComeauContentFor30thApril(),
            forUrl: "https://www.joshwcomeau.com/rss.xml",
          },
        },
      ],
    },
  });
});
