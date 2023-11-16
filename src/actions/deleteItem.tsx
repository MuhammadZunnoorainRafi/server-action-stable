'use server';

import { prismaDB } from '@/utils/db';
import { revalidatePath } from 'next/cache';

export const deleteTask = async (formData: FormData) => {
  const deletedTask = await prismaDB.task.delete({
    where: {
      id: formData.get('todoId') as string,
    },
  });
  console.log('hello');
  if (!deletedTask) {
    throw new Error('Task is not deleted');
  }
  revalidatePath('/');
};
