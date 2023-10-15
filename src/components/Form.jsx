import React from "react";

const Form = ({ setNewTitle, setNewContent}) => {


  return (
    <div className="flex flex-col gap-2 items-center ">
      <label htmlFor="">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Title"
        className="border bolder-black p-1 rounded-lg"
        onChange={(e) => setNewTitle(e.target.value)}
      />

      <label htmlFor="">Content</label>
      <textarea
        name="content"
        id="content"
        cols="30"
        rows="10"
        placeholder="Content"
        className="border bolder-black p-1 rounded-lg"
        onChange={(e) => setNewContent(e.target.value)}
      />
      <button
        className="py-1 px-3 m-1 rounded-lg bg-gray-400 hover:bg-gray-600 text-white"
      >
        Create
      </button>
    </div>
  );
};

export default Form;
