import { prismaDB } from '@/utils/db';
import Form from './form';

export default async function Home() {
  const allTasks = await prismaDB.task.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  const dateC = (date: Date) => {
    return new Date(date).toLocaleDateString();
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <main className=" w-96 ">
        <div className="mb-3">
          <Form />
        </div>
        <div className="space-y-2">
          {allTasks.map((task) => (
            <div
              className="p-2 rounded-md border border-slate-600 flex items-center justify-between"
              key={task.id}
            >
              <div>
                <p className="font-bold text-slate-50 ">{task.title}</p>
                <p className="text-slate-200">{task.description}</p>
              </div>
              <p className="text-sm italic text-slate-400">
                {dateC(task.createdAt)}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
