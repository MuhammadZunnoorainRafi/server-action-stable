'use server';

import { prismaDB } from '@/utils/db';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

type State = {
  message?: string | null;
  errors?: {
    title?: string[];
    description?: string[];
  };
};

const formSchema = z.object({
  title: z.string().min(1, 'Enter title'),
  description: z.string().min(1, 'Enter description'),
});

export async function submitForm(prevState: State, formData: FormData) {
  const validation = formSchema.safeParse({
    title: formData.get('title'),
    description: formData.get('description'),
  });
  if (!validation.success) {
    return {
      errors: validation.error.flatten().fieldErrors,
      message: 'Something went wrong',
    };
  }
  try {
    await prismaDB.task.create({
      data: {
        title: validation.data.title,
        description: validation.data.description,
      },
    });
  } catch (error) {
    console.log(error);
  }
  revalidatePath('/');
}
