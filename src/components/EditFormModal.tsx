'use client';
import Submit from './Submit';
import { RiEdit2Line } from 'react-icons/ri';
import { useFormState } from 'react-dom';
import { editItemAction } from '@/actions/editItem';

type EditForm = {
  title: string;
  description: string;
  id: string;
};

function EditFormModal({ title, description, id }: EditForm) {
  const initialState = { message: null, errors: {} };
  const editItemActionWithId = editItemAction.bind(null, id);
  const [state, dispatch] = useFormState(editItemActionWithId, initialState);

  return (
    <div>
      <div>
        <button
          className="btn btn-xs hover:btn-primary"
          onClick={() =>
            (
              document.getElementById('my_modal_3') as HTMLDialogElement
            ).showModal()
          }
        >
          <RiEdit2Line />
        </button>
      </div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h1 className=" text-center py-2 font-bold text-lg">Edit task</h1>
          <form action={dispatch} className="form-control gap-2 card-body">
            <input
              defaultValue={title}
              placeholder="Title"
              className="input input-bordered input-md"
              type="text"
              id="title"
              name="title"
              aria-describedby="title-error"
            />
            {state?.errors.title && (
              <div
                aria-live="polite"
                className="text-sm text-red-500"
                id="title-error"
              >
                {state.errors.title.map((error: string) => (
                  <p key={error}>{error}</p>
                ))}
              </div>
            )}
            <input
              defaultValue={description}
              placeholder="Description"
              className="input input-bordered input-md"
              type="text"
              id="description"
              name="description"
              aria-describedby="description-error"
            />
            {state?.errors.description && (
              <div
                id="description-error"
                className="text-sm text-red-500"
                aria-live="polite"
              >
                {state.errors.description.map((error: string) => (
                  <p key={error}>{error}</p>
                ))}
              </div>
            )}
            <div className=" text-center">
              <Submit />
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default EditFormModal;
