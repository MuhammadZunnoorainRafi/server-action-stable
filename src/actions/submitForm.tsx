'use server';

type State = {
  errors?: {
    title?: string[];
    description?: string[];
  };
  message?: string | null;
};

export const submitForm = (prevState: State, formData: FormData) => {};
