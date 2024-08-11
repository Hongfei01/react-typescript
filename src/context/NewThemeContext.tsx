import { createContext, useContext, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

type NewThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
};

type NewTheme = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const NewThemeContext = createContext<NewTheme | undefined>(undefined);
export function NewThemeContextProvider({
  children,
  defaultTheme = 'system',
}: NewThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  return (
    <NewThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </NewThemeContext.Provider>
  );
}

export const useThemes = (): NewTheme => {
  const context = useContext(NewThemeContext);
  if (context === undefined)
    throw new Error(' context was used outside provider');
  return context;
};
