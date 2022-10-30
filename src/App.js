import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <div data-testid='count'>{count}</div>
      <button
        type='button'
        data-testid='btn-minus'
        onClick={() => decreaseCount()}
      >
        -
      </button>

      <button
        type='button'
        data-testid='btn-plus'
        onClick={() => increaseCount()}
      >
        +
      </button>
    </div>
  );
}

export default App;
