import { useState, MouseEvent } from "react";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";

function App() {
  const [counter, setCounter] = useState<number>(0);

  const addCounter = (event: MouseEvent) => {
    console.log(event);
  };

  return (
    <>
      <Button onClick={addCounter}>Кнопка</Button>
      <Button appearance="big" onClick={addCounter}>
        Кнопка
      </Button>
      <Input placeholder="Email" />
    </>
  );
}

export default App;
