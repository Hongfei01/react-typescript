import { useQuery } from '@tanstack/react-query';
import { getTours } from '../api/apiTours';

export const useTours = () => {
  const {
    data: tours,
    isError,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['tours'],
    queryFn: getTours,
  });
  return { tours, isError, error, isLoading };
};
