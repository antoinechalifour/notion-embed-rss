import { rest } from "msw";
import { setupServer } from "msw/node";

import { BuildFeeds } from "../src/server/rss/BuildFeeds";
import { FeedsWidgetPagePresenter } from "../src/server/FeedsWidgetPagePresenter";
import { fixedClock } from "./utils/clock";
import {
  joshuaComeauContentSince30DaysFor30thApril,
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

it("Generates the feeds using articles from the last 30 days", async () => {
  // Arrange
  const sources = "https://www.joshwcomeau.com/rss.xml";
  const presenter = new FeedsWidgetPagePresenter();
  const buildFeeds = new BuildFeeds(jest.fn(), fixedClock(), presenter);

  // Act
  await buildFeeds.execute({
    sources,
    font: "mono",
    theme: "light",
    sinceDays: 30,
  });

  // Assert
  expect(presenter.toPage()).toMatchObject({
    props: {
      content: [
        {
          type: "success",
          data: {
            feed: joshuaComeauContentSince30DaysFor30thApril(),
            forUrl: "https://www.joshwcomeau.com/rss.xml",
          },
        },
      ],
    },
  });
});
