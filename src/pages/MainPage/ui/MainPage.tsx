import { classNames } from 'shared/lib/classNames/classNames';

import { PostList } from 'features/PostList';
import { Page } from 'widgets/Page';

import cls from './MainPage.module.scss';

interface MainPageProps {
  className?: string;
}

const MainPage = ({ className }: MainPageProps) => {
  return (
    <Page className={classNames(cls.MainPage, {}, [className])}>
      <PostList />
    </Page>
  );
};

export default MainPage;
