export interface Success<T> {
  type: "success";
  data: T;
}

export interface Error<E> {
  type: "error";
  error: E;
}

export type Result<T, E> = Success<T> | Error<E>;

export const success = <T>(data: T): Success<T> => ({
  type: "success",
  data,
});

export const error = <E>(error: E): Error<E> => ({
  type: "error",
  error,
});
