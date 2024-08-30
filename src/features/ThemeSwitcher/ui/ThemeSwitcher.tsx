import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { useTheme } from 'shared/lib/hooks/useTheme/useTheme';
import { Button } from 'shared/ui/Button';
import { Theme } from 'shared/const/theme';
import { Icon } from 'shared/ui/Icon';
import LightIcon from 'shared/assets/icons/theme-light.svg?react';
import DarkIcon from 'shared/assets/icons/theme-dark.svg?react';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  const DarkThemeIcon = <Icon width={45} height={45} Svg={DarkIcon} />;
  const LightThemeIcon = <Icon width={45} height={45} Svg={LightIcon} />;

  return (
    <Button
      variant="clear"
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? DarkThemeIcon : LightThemeIcon}
    </Button>
  );
});
