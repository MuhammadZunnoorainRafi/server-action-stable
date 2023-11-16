'use client';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { RiEdit2Line } from 'react-icons/ri';
import DeleteButton from './DeleteButton';
import { useFormState } from 'react-dom';
import { editItemAction } from '@/actions/editItem';
import Submit from './Submit';
import EditFormModal from './EditFormModal';

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
  const initialState = {
    errors: {},
    message: null,
  };

  const [parent] = useAutoAnimate();

  return (
    <div ref={parent} className="space-y-2">
      {tasks.map((task) => (
        <div
          className="p-2 rounded-md border border-slate-600 flex items-center justify-between"
          key={task.id}
        >
          <div>
            <div className="flex items-center justify-start gap-1">
              <input type="hidden" name="taskId" value={task.id} />
              <p className="font-bold text-slate-50 ">{task.title}</p>
              <EditFormModal
                title={task.title}
                description={task.description}
                id={task.id}
              />

              <DeleteButton id={task.id} />
            </div>
            <p className="xs italic underline">{task.id}</p>
            <p className="text-slate-200">{task.description}</p>
          </div>
          <p className="text-sm italic text-slate-400">
            {dateC(task.createdAt)}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Tasks;
