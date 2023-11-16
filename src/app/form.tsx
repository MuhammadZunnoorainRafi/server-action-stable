'use client';

import { submitForm } from '@/actions/submitForm';
import { useFormState } from 'react-dom';

function Form() {
  const initialState = {
    errors: {},
    message: null,
  };
  const [state, dispatch] = useFormState(submitForm, initialState);
  return (
    <div className="card card-bordered card-compact mt-10">
      <h1 className=" text-center py-2 font-bold text-lg">Submit tasks</h1>
      <form action={dispatch} className="form-control gap-2 card-body">
        <input
          placeholder="Title"
          className="input input-bordered input-md"
          type="text"
          id="title"
          name="title"
        />
        <input
          placeholder="Description"
          className="input input-bordered input-md"
          type="text"
          id="description"
          name="description"
        />
        <button type="submit" className="btn btn-primary btn-sm">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
