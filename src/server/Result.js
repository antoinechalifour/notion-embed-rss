export const Result = {
  success: (data) => ({
    type: "success",
    ...data,
  }),
  error: (data) => ({
    type: "error",
    ...data,
  }),
};
