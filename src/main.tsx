import { createRoot } from 'react-dom/client';
// import App from './App.tsx'
// import App from './fetchData/App';
import AppQuery from './fetchData/AppQuery';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { store } from './store';
import { Provider } from 'react-redux';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 1000 * 60 },
  },
});
createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <AppQuery />
    </QueryClientProvider>
  </Provider>
);
