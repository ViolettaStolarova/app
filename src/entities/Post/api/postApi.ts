import { rtkApi } from 'shared/api/rtkApi';
import { Post } from 'entities/Post';

const postApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.query<Post[], void>({
      query: () => ({
        url: '/posts',
      }),
    }),
  }),
});

export const useGetPosts = postApi.useGetPostsQuery;
export const getPosts = postApi.endpoints.getPosts.initiate;
