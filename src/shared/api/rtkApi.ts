import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const rtkApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: () => ({}),
});
