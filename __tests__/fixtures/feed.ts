import fs from "fs";
import path from "path";

export const joshuaComeauFeed = fs.readFileSync(
  path.join(__dirname, "joshua-comeau-feed.xml"),
  "utf-8"
);

export const joshuaComeauContentSince14DaysFor30thApril = () => ({
  title: "Josh Comeau's blog",
  items: [
    {
      publicationDate: "20/04/2021 12:15",
      link: "https://www.joshwcomeau.com/blog/how-i-built-my-blog/",
      title: "How I Built My Blog",
    },
  ],
});

export const joshuaComeauContentSince30DaysFor30thApril = () => ({
  title: "Josh Comeau's blog",
  items: [
    {
      publicationDate: "20/04/2021 12:15",
      link: "https://www.joshwcomeau.com/blog/how-i-built-my-blog/",
      title: "How I Built My Blog",
    },
    {
      link: "https://www.joshwcomeau.com/css/stacking-contexts/",
      publicationDate: "14/04/2021 12:00",
      title: "What the heck, z-index??",
    },
    {
      link: "https://www.joshwcomeau.com/blog/why-my-blog-is-closed-source/",
      publicationDate: "14/04/2021 13:00",
      title: "Why My Blog is Closed-Source",
    },
  ],
});
