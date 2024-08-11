import Component from '../redux/Component';
import { useTours } from './useTours';

function AppQuery() {
  const { tours, isError, isLoading, error } = useTours();
  if (isLoading) return <h1>isLoading</h1>;
  if (isError) return <h1>Error:{error?.message}</h1>;
  return (
    <div>
      <h1>Tours</h1>
      <ul>
        {tours?.map((tour) => (
          <li key={tour.id}>{tour.name}</li>
        ))}
      </ul>
      <Component />
    </div>
  );
}
export default AppQuery;
