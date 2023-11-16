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
    <div className="min-h-screen  flex items-center justify-center">
      <main className="backdrop-blur-lg px-7 py-5 rounded-lg  w-[450px] ">
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
