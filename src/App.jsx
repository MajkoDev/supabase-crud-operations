import Card from "./components/Card";
import Form from "./components/Form";

function App() {
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
