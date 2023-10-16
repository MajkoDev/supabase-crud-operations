import { useEffect, useState } from "react";
import Card from "./components/Card";
import Form from "./components/Form";
import { supabase } from "./lib/supabaseClient";

function App() {
  //TODO: FETCHING DATA from SUPABASE.
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

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

      setPosts(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
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
        {loading ? (
          <>Loading</>
        ) : (
          <>
            {posts.map((post) => (
              <Card post={post} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
