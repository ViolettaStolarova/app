import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { HStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text';
import { PostItem } from 'entities/Post';
import { usePostList } from '../hooks/usePostList';

import cls from './PostList.module.scss';

type Props = {
  className?: string;
};

export const PostList = memo((props: Props) => {
  const { className } = props;

  const { error, isLoading, posts } = usePostList();

  const rootContainer = classNames(cls.PostList, {}, [className]);

  if (isLoading) {
    return (
      <HStack className={rootContainer} justify="center">
        <Text bold size="l" title="Loading..." />
      </HStack>
    );
  }

  if (error) {
    return (
      <HStack className={rootContainer} justify="center" align="center">
        <Text bold size="l" title="Something went wrong :(" />
      </HStack>
    );
  }

  if (!posts || !posts.length) {
    return (
      <HStack className={rootContainer}>
        <Text size="m" title="No posts available" />
      </HStack>
    );
  }

  return (
    <HStack className={rootContainer} justify="center" wrap="wrap" gap={32}>
      {posts?.map((item) => <PostItem key={item.id} item={item} />)}
    </HStack>
  );
});
