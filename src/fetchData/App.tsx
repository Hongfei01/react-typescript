import { useEffect, useState } from 'react';

import { type Tour, tourSchema } from './types';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<string | null>(null);

  const [tours, setTours] = useState<Tour[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          'https://www.course-api.com/react-tours-project'
        );
        const rawData: Tour[] = await response.json();
        const result = tourSchema.array().safeParse(rawData);
        if (!result.success) {
          throw new Error(`Fetch data error`);
        }

        setTours(result.data);
      } catch (error) {
        setIsError(
          error instanceof Error ? error.message : 'there was an error'
        );
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) return <h1>isLoading</h1>;

  if (isError) return <h1>{isError}</h1>;

  return (
    <div>
      <h1>Tours</h1>
      <ul>
        {tours.map((tour) => (
          <li key={tour.id}>{tour.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
