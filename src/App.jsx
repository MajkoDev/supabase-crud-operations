import { useEffect, useState } from "react";
import Card from "./components/Card";
import Form from "./components/Form";
import { supabase } from "./lib/supabaseClient";

function App() {
  //TODO: FETCHING DATA from SUPABASE.
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    try {
      // asking for all ('*') data from 'post' table
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .limit(10);

      if (error) throw error;
      if (data != null) {
        setPosts(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="container">
        <h1 className="text-lg font-semibold text-center">Crud Operations</h1>
      </div>
      <div className="container">
        <Form />
      </div>
      <div className="container flex flex-wrap justify-center">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
