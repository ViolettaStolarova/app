import { rtkApi } from 'shared/api/rtkApi';
import { Post } from 'entities/Post';

const recommendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.query<Post[], void>({
      query: () => ({
        url: '/posts',
      }),
    }),
  }),
});

export const useGetPosts = recommendationsApi.useGetPostsQuery;
export const getPosts = recommendationsApi.endpoints.getPosts.initiate;
