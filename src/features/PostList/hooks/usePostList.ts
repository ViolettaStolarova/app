import { useGetPosts } from 'entities/Post';

export const usePostList = () => {
  const { data: posts, isLoading, error } = useGetPosts();

  return {
    posts,
    isLoading,
    error,
  };
};
