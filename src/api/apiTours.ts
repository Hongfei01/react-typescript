import axios from 'axios';
import { type Tour, tourSchema } from '../fetchData/types';

export const getTours = async (): Promise<Tour[]> => {
  const response = await axios.get<Tour[]>(
    'https://www.course-api.com/react-tours-project'
  );
  const result = tourSchema.array().safeParse(response.data);
  if (!result.success) throw new Error('Parsing error');
  return result.data;
};
