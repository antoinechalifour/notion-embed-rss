export const makeRedirect = (res) => (status, link) => {
  res.statusCode = status;
  res.setHeader("Location", link);
  res.end();

  return { props: {} };
};
