import { FC, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Page.module.scss';

interface PageProps {
  className?: string;
  children: ReactNode;
}

export const Page: FC<PageProps> = (props) => {
  const { className, children } = props;

  return (
    <main className={classNames(cls.Page, {}, [className])}>{children}</main>
  );
};
