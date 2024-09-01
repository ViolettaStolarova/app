// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getErrorMessage = (error: any) => {
  if (error === undefined || error === null) {
    return;
  }

  if (error instanceof Error) {
    return error.message;
  }

  if (typeof error?.message === 'string') {
    return error.message;
  }

  if (typeof error?.error === 'string') {
    return error.error;
  }

  if (error.data === null) {
    return 'Something went wrong, try again later';
  }

  if (error?.data) {
    return error.data;
  }

  if (typeof error === 'string') {
    return error;
  }

  return String(error);
};
