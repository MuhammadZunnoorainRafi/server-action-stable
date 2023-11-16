'use server';

import { prismaDB } from '@/utils/db';
import { revalidatePath } from 'next/cache';

export const deleteTask = async (id: string) => {
  const deletedTask = await prismaDB.task.delete({
    where: {
      id,
    },
  });
  if (!deletedTask) {
    throw new Error('Task is not deleted');
  }
  revalidatePath('/');
};
