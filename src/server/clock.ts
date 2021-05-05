import { Clock } from "./rss/Clock";

export const clock: Clock = {
  now: () => new Date(),
};
