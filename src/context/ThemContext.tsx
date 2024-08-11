import { createContext, useContext } from 'react';

const ThemeContext = createContext<{ name: string } | undefined>(undefined);

export function ThemContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeContext.Provider value={{ name: 'hello' }}>
      {children}
    </ThemeContext.Provider>
  );
}
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined)
    throw new Error('context was used outside provider');
  return context;
};
