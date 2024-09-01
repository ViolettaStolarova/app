import { classNames } from 'shared/lib/classNames/classNames';

import { Page } from 'widgets/Page';
import { Text } from 'shared/ui/Text';

import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  return (
    <Page className={classNames(cls.NotFoundPage, {}, [className])}>
      <Text bold title=" PAGE NOT FOUND :(" />
    </Page>
  );
};
