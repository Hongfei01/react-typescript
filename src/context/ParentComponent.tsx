import { NewThemeContextProvider, useThemes } from './NewThemeContext';

function ParentComponent() {
  return (
    <NewThemeContextProvider>
      <Component />
    </NewThemeContextProvider>
  );
}

function Component() {
  const { theme, setTheme } = useThemes();
  return (
    <div>
      <button
        onClick={() => {
          if (theme === 'dark') {
            setTheme('system');
            return;
          }
          setTheme('dark');
        }}
      >
        toggle theme
      </button>
    </div>
  );
}
export default ParentComponent;
