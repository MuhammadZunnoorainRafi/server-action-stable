'use server';

import { prismaDB } from '@/utils/db';
import { State } from './submitForm';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';

const formSchema = z.object({
  title: z.string().min(1, 'Enter title'),
  description: z.string().min(1, 'Enter description'),
});

export const editItemAction = async (
  id: string,
  prevState: State,
  formData: FormData
) => {
  const validation = formSchema.safeParse({
    title: formData.get('title'),
    description: formData.get('description'),
  });
  if (!validation.success) {
    return {
      errors: validation.error.flatten().fieldErrors,
      message: 'Some thing went wrong',
    };
  }
  const { title, description } = validation.data;
  try {
    await prismaDB.task.update({
      where: {
        id: id,
      },
      data: {
        title,
        description,
      },
    });
  } catch (error) {
    console.log(error);
  }
  revalidatePath('/');
};
