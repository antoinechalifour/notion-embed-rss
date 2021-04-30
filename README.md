This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## For Notion Users

![screenshot](./doc/example.png)

This is a widget for rendering a RSS feed into your pages. To use it, add an "embed" bloc to your page, pointing
to the url `https://notion-widget-rss.vercel.app/?sources=<COMA_SEPARATED_SOURCES>`

My personal feed is based on the following url `https://notion-widget-rss.vercel.app/?sources=https://www.reddit.com/user/tvvann/m/dev/.rss,https://www.joshwcomeau.com/rss.xml,https://kentcdodds.com/blog/rss.xml,https://overreacted.io/rss.xml,https://jaredpalmer.com/rss.xml,https://blog.isquaredsoftware.com/index.xml,https://www.lilobase.me/rss,https://ntcoding.medium.com/feed`.

## For developers

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
