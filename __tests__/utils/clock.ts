import { Clock } from "../../src/server/rss/Clock";

export const fixedClock = (): Clock => ({
  now: () => new Date(2021, 3, 30),
});
