import { FC, ReactNode, useMemo, useState } from 'react';
import { Theme } from 'shared/constants/theme';
import { ThemeContext } from 'shared/lib/context/ThemeContext';
import { STORAGE_KEYS, StorageService } from 'shared/lib/services/storeService';

interface ThemeProviderProps {
  initialTheme?: Theme;
  children: ReactNode;
}

const defaultTheme =
  (StorageService.getItem(STORAGE_KEYS.LOCAL_STORAGE_THEME_KEY) as Theme) ||
  Theme.LIGHT;

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { children, initialTheme } = props;

  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  document.body.className = theme;

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
