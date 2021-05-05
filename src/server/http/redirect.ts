import { ServerResponse } from "http";

export type Redirect = (status: number, destination: string) => any;

export const makeRedirect = (res: ServerResponse): Redirect => (
  status,
  link
) => {
  res.statusCode = status;
  res.setHeader("Location", link);
  res.end();

  return { props: {} };
};
