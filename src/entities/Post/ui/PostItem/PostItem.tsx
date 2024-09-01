import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { HStack, VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text';
import { Card } from 'shared/ui/Card';
import { Post } from '../../model/types/post';

import cls from './PostItem.module.scss';

type Props = {
  className?: string;
  item: Post;
};

export const PostItem = memo((props: Props) => {
  const { className, item } = props;

  return (
    <Card
      className={classNames(cls.PostItem, {}, [className])}
      stack="vertical"
      padding="24"
      border={15}
    >
      <HStack
        className={cls.placeholderContainer}
        align="center"
        justify="center"
        max
      />
      <VStack max gap={8}>
        <Text className={cls.name} title={item.title} size="m" bold />
        <Text className={cls.name} text={item.body} />
      </VStack>
    </Card>
  );
});
