import { FC, ForwardedRef, forwardRef } from 'react';

import { Flex, FlexProps } from '../Flex/Flex';

export type HStackProps = Omit<FlexProps, 'direction'>;

export const HStack: FC<HStackProps> = forwardRef(
  (props: HStackProps, ref?: ForwardedRef<HTMLDivElement>) => (
    <Flex {...props} direction="row" ref={ref} />
  )
);
