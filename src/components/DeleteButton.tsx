import { deleteTask } from '@/actions/deleteItem';
import React from 'react';
import { RiDeleteBin2Fill } from 'react-icons/ri';

function DeleteButton({ id }: { id: string }) {
  const deleteTaskWithId = deleteTask.bind(null, id);
  return (
    <form action={deleteTaskWithId}>
      <button className="btn btn-xs hover:btn-error">
        <RiDeleteBin2Fill />
      </button>
    </form>
  );
}

export default DeleteButton;
