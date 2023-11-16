// 'use client';
import { deleteTask } from '@/actions/deleteItem';
// import { useAutoAnimate } from '@formkit/auto-animate/react';
import React from 'react';
import { RiDeleteBin2Fill, RiEdit2Line } from 'react-icons/ri';

interface Tasks {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
}

function Tasks({ tasks }: { tasks: Tasks[] }) {
  const dateC = (date: Date) => {
    return new Date(date).toLocaleDateString();
  };

  //   const [parent] = useAutoAnimate();

  return (
    <ul className="space-y-2 mb-10">
      {tasks.map((task) => (
        <div
          className="p-2 rounded-md border border-slate-600 flex items-center justify-between"
          key={task.id}
        >
          <div>
            <div className="flex items-center justify-start gap-1">
              <input type="hidden" name="taskId" value={task.id} />
              <p className="font-bold text-slate-50 ">{task.title}</p>
              <button className="btn btn-xs hover:btn-primary">
                <RiEdit2Line />
              </button>
              <button
                formAction={deleteTask}
                className="btn btn-xs hover:btn-error"
              >
                <RiDeleteBin2Fill />
              </button>
            </div>
            <p className="text-slate-200">{task.description}</p>
          </div>
          <p className="text-sm italic text-slate-400">
            {dateC(task.createdAt)}
          </p>
        </div>
      ))}
    </ul>
  );
}

export default Tasks;
