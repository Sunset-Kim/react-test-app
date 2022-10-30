import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const handleToggle = () => setDisabled(!disabled);

  return (
    <div>
      <div data-testid='count'>{count}</div>
      <button
        type='button'
        data-testid='btn-minus'
        disabled={disabled}
        onClick={() => decreaseCount()}
      >
        -
      </button>

      <button
        type='button'
        data-testid='btn-plus'
        disabled={disabled}
        onClick={() => increaseCount()}
      >
        +
      </button>

      <button type='button' data-testid='btn-display' onClick={handleToggle}>
        on/off
      </button>
    </div>
  );
}

export default App;
