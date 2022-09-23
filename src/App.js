import "./App.css";
import { useState, useEffect, useContext, useRef, useReducer, useMemo } from "react";
import { createContext } from "react";
function App() {
  const [count, setCount] = useState(0);
  const moods = {
    happy: ":)",
    sad: ":(",
  };
  const MoodContext = createContext(moods);

  // useEffect(() => {
  //   alert("Hello!");

  //   return () => alert("Goodbye");
  // });

  const myBtn = useRef(null);
  const [state, dispatch] = useReducer(reducer, 0);
  const [counter, setCounter] = useState(60);
  const expensiveCount = useMemo (() => {
    return counter *2;
  }, [counter])
  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <MoodContext.Provider value={moods.happy}>
        <MoodEmoji />
      </MoodContext.Provider>
      <button ref={myBtn}></button>
      <div>
        <p>Count: {state}</p>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
      </div>
      <div>
        <p>Counter: {counter}</p>
      </div>
    </div>
  );

  function MoodEmoji() {
    const mood = useContext(MoodContext);
    return <p>{mood}</p>;
  }
  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      default:
        throw new Error();
    }
  }
}

export default App;
