import "./App.css";

function App() {
  return (
    <div>
      <div data-testid='count'>0</div>
      <button type='button' data-testid='btn-minus'>
        -
      </button>

      <button type='button' data-testid='btn-plus'>
        +
      </button>
    </div>
  );
}

export default App;
