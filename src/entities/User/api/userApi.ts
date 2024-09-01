import { rtkApi } from 'shared/api/rtkApi';
import { User } from '../model/types/user';

export const userApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getUserByUsername: build.query<User | null, string>({
      query: (username: string) => ({
        url: '/users',
        params: { username: username },
      }),
      transformResponse: (response: User[]) =>
        response.length ? response[0] : null,
    }),

    getUserById: build.query<User | null, number>({
      query: (id: number) => ({
        url: '/users',
        params: { id: id },
      }),
      transformResponse: (response: User[]) =>
        response.length ? response[0] : null,
    }),
  }),
});

export const useGetUserByUsername = userApi.useGetUserByUsernameQuery;
export const getUserByUsername = userApi.endpoints.getUserByUsername.initiate;

export const useGetUserById = userApi.useGetUserByIdQuery;
export const getUserById = userApi.endpoints.getUserById.initiate;
