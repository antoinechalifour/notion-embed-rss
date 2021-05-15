import fs from "fs";
import path from "path";

export const joshuaComeauFeed = fs.readFileSync(
  path.join(__dirname, "joshua-comeau-feed.xml"),
  "utf-8"
);

export const joshuaComeauContentFor30thApril = () => ({
  title: "Josh Comeau's blog",
  items: [
    {
      publicationDate: "20/04/2021 12:15",
      link: "https://www.joshwcomeau.com/blog/how-i-built-my-blog/",
      title: "How I Built My Blog",
    },
  ],
});
