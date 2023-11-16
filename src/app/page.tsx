import { prismaDB } from '@/utils/db';
import Form from './form';
import Tasks from '@/components/Tasks';

export default async function Home() {
  const allTasks = await prismaDB.task.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center">
      <main className=" w-96 ">
        <div className="mb-3">
          <Form />
        </div>
        <div>
          <Tasks tasks={allTasks} />
        </div>
      </main>
    </div>
  );
}
