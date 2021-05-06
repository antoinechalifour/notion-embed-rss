import { setupServer } from "msw/node";
import { rest } from "msw";

import { FeedsWidgetPagePresenter } from "../src/server/FeedsWidgetPagePresenter";
import { BuildFeeds } from "../src/server/rss/BuildFeeds";

import { fixedClock } from "./utils/clock";

let server = setupServer(
  rest.get("https://example.com/feed", (req, res, ctx) =>
    res(ctx.text("not xml feed"))
  )
);

beforeAll(() => server.listen());

afterAll(() => server.close());

it("Returns errors", async () => {
  // Arrange
  const invalidSource = "https://example.com/feed";
  const presenter = new FeedsWidgetPagePresenter();
  const buildFeeds = new BuildFeeds(jest.fn(), fixedClock(), presenter);

  // Act
  await buildFeeds.execute({
    sources: invalidSource,
    font: "mono",
    theme: "light",
  });

  // Assert
  expect(presenter.toPage()).toMatchObject({
    props: {
      content: [
        {
          type: "error",
          error: {
            forUrl: "https://example.com/feed",
          },
        },
      ],
    },
  });
});
