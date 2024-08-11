import zod from 'zod';

export const tourSchema = zod.object({
  id: zod.string(),
  name: zod.string(),
  price: zod.string(),
  image: zod.string(),
  info: zod.string(),
});

export type Tour = zod.infer<typeof tourSchema>;
