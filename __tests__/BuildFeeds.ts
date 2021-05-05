import { rest } from "msw";
import { setupServer } from "msw/node";
import fs from "fs";
import path from "path";

import { buildFeeds } from "../src/server/rss/BuildFeeds";
import { Clock } from "../src/server/rss/Clock";

const joshuaComeauFeed = fs.readFileSync(
  path.join(__dirname, "joshua-comeau-feed.xml"),
  "utf-8"
);

const joshuaComeauContentFor30thApril = () => ({
  title: "Josh Comeau's blog",
  items: [
    {
      date: "20/04/2021 12:15",
      link: "https://www.joshwcomeau.com/blog/how-i-built-my-blog/",
      title: "How I Built My Blog",
    },
  ],
});

const fixedClock = (): Clock => ({
  now: () => new Date(2021, 3, 30),
});

describe("No sources", () => {
  it("Redirects to the widget instructions", () => {
    // Arrange
    const redirect = jest.fn();

    // Act
    buildFeeds({
      clock: fixedClock(),
      redirect,
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
});

describe("All sources are valid", () => {
  const server = setupServer(
    rest.get("https://www.joshwcomeau.com/rss.xml", (req, res, ctx) => {
      ctx.xml(joshuaComeauFeed);
    })
  );

  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it("Generates the feeds using articles from the last 14 days", async () => {
    // Arrange
    const sources = "https://www.joshwcomeau.com/rss.xml";

    // Act
    const result = await buildFeeds({
      clock: fixedClock(),
      redirect: jest.fn(),
      sources,
      font: "mono",
      theme: "light",
    });

    // Assert
    expect(result.props.content).toEqual([
      {
        type: "success",
        data: {
          feed: joshuaComeauContentFor30thApril(),
          forUrl: "https://www.joshwcomeau.com/rss.xml",
        },
      },
    ]);
  });
});

describe("Invalid sources", () => {
  let server = setupServer(
    rest.get("https://example.com/feed", (req, res, ctx) => {
      ctx.text("not xml feed");
    })
  );

  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it("Returns errors", async () => {
    // Arrange
    let invalidSource = "https://example.com/feed";

    // Act
    const response = await buildFeeds({
      clock: fixedClock(),
      redirect: jest.fn(),
      sources: invalidSource,
      font: "mono",
      theme: "light",
    });

    // Assert
    expect(response.props.content).toEqual([
      {
        type: "error",
        error: {
          forUrl: "https://example.com/feed",
        },
      },
    ]);
  });
});
