'use client';

import { useFormStatus } from 'react-dom';

function Submit() {
  const { pending } = useFormStatus();
  return (
    <div>
      <button
        disabled={pending}
        type="submit"
        className="btn btn-wide btn-primary btn-sm"
      >
        {pending ? (
          <>
            Submit
            <span className="loading loading-spinner loading-sm"></span>
          </>
        ) : (
          'Submit'
        )}
      </button>
    </div>
  );
}

export default Submit;
