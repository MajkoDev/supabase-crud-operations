import React, { useState } from "react";
import { supabase } from "../lib/supabaseClient";

const Form = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function createPost() {
    try {
      // asking for all ('*') data from 'post' table
      const { data, error } = await supabase
        .from("posts")
        .insert({ title: title, content: content });
      //        .single();

      if (error) throw error;
      window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div className="flex flex-col gap-2 items-center ">
      <label htmlFor="">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Title"
        className="border bolder-black p-1 rounded-lg"
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="">Content</label>
      <textarea
        name="content"
        id="content"
        cols="30"
        rows="10"
        placeholder="Content"
        className="border bolder-black p-1 rounded-lg"
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        onClick={() => createPost()}
        className="py-1 px-3 m-1 rounded-lg bg-gray-400 hover:bg-gray-600 text-white"
      >
        Create
      </button>
    </div>
  );
};

export default Form;
