import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { useTheme } from 'shared/lib/hooks/useTheme/useTheme';
import { Button } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon';
import ThemeSwitcherSvg from 'shared/assets/icons/theme-switcher.svg?react';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { toggleTheme } = useTheme();

  const ThemeSwitcherIcon = (
    <Icon width={40} height={40} Svg={ThemeSwitcherSvg} />
  );

  return (
    <Button
      variant="clear"
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
    >
      {ThemeSwitcherIcon}
    </Button>
  );
});
