'use client';

import { submitFormAction } from '@/actions/submitForm';
import Submit from '@/components/Submit';
import { useFormState } from 'react-dom';

function Form() {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(submitFormAction, initialState);
  return (
    <div className="card card-bordered border-slate-400 card-compact">
      <h1 className=" text-center py-2 font-bold text-lg">Submit tasks</h1>
      <form action={dispatch} className="form-control gap-2 card-body">
        <input
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
  );
}

export default Form;
