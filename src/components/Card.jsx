import React, { useState } from "react";

const Card = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [editing, setEditing] = useState(false);

  return (
    <div className="m-2 p-2 border rounded-md border-black min-w-[350px]">
      <main>
        {editing == true ? (
          <>
            <input
              className="text-md font-semibold mb-2 border border-black rounded-md"
              onChange={(e) => setTitle(e.target.value)}
            />
            <br />{" "}
            <input
              className="text-sm font-normal mb-5 border border-black rounded-md"
              onChange={(e) => setContent(e.target.value)}
            />
            <div className="flex flex-row gap-2 justify-end">
              <button
                onClick={() => setEditing(false)}
                className="py-1 px-3 m-1 rounded-lg bg-blue-400 hover:bg-blue-600 text-white"
              >
                Save
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-md font-semibold mb-2">Title</h2>
            <p className="text-sm font-normal mb-5">Paragraph</p>
            <div className="flex flex-row gap-2 justify-end">
              <button
                onClick={() => setEditing(true)}
                className="py-1 px-3 m-1 rounded-lg bg-blue-400 hover:bg-blue-600 text-white"
              >
                Edit
              </button>
              <button className="py-1 px-3 m-1 rounded-lg bg-red-400 hover:bg-red-600 text-white">
                Delete
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Card;
