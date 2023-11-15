'use client';
function Form() {
  return (
    <div>
      <form action="" className="form-control gap-2">
        <input
          placeholder="Title"
          className="input input-bordered input-md"
          type="text"
          name="title"
        />
        <input
          placeholder="Description"
          className="input input-bordered input-md"
          type="text"
          name="description"
        />
      </form>
    </div>
  );
}

export default Form;
