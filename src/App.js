//Components
import { Button } from "react-bootstrap";

//Styles
import "./App.css";

//Redux
import { useDispatch, useSelector } from "react-redux";

//Redux Actions
import {
  increment,
  decrement,
  incrementBy,
  decrementBy,
} from "./redux/sliceCounter";

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <h1>{count}</h1>
        <div>
          <Button
            variant="outline-light"
            className="mr-2"
            onClick={() => dispatch(decrementBy(-10))}
          >
            Sustract (-10)
          </Button>
          <Button
            variant="outline-light"
            className="mr-2"
            onClick={() => dispatch(decrement())}
          >
            Substract (-1)
          </Button>
          <Button
            variant="outline-light"
            className="mr-2"
            onClick={() => dispatch(increment())}
          >
            Add (+1)
          </Button>
          <Button
            variant="outline-light"
            onClick={() => dispatch(incrementBy(10))}
          >
            Add (+10)
          </Button>
        </div>
      </header>
    </div>
  );
}

export default App;
