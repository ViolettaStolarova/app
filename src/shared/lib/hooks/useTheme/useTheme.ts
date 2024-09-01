import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Theme } from '../../../constants/theme';
import { STORAGE_KEYS, StorageService } from 'shared/lib/services/storeService';

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

    setTheme?.(newTheme);

    StorageService.setItem(STORAGE_KEYS.THEME_KEY, newTheme);
  };

  return { theme: theme || Theme.LIGHT, toggleTheme };
}
