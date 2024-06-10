import { useState, MouseEvent } from "react";
import "./App.css";
import Button from "./components/Button/Button";

function App() {
  const [counter, setCounter] = useState<number>(0);

  const addCounter = (event: MouseEvent) => {
    console.log(event);
  };

  return (
    <>
      <Button onClick={addCounter}>Кнопка</Button>
    </>
  );
}

export default App;
