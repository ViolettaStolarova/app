import { forwardRef, ForwardedRef, FC } from 'react';

import { Flex, FlexProps } from '../Flex/Flex';

export type VStackProps = Omit<FlexProps, 'direction'>;

export const VStack: FC<VStackProps> = forwardRef(
  (props, ref?: ForwardedRef<HTMLDivElement>) => (
    <Flex {...props} direction="column" ref={ref} />
  )
);
