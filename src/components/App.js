import React, { useReducer } from "react";
import Cell from "./Cell";
import Click from "./Click";

const makeMatrix = size => {
  const x = Array.from({ length: size }).fill(0);
  return Array.from({ length: size }).fill(x);
};

const reducer = (state, action) => {
  switch (action.type) {
    case "paint":
      const [row, col] = action.payload;
      let nextState = state.map(x => x.slice());
      nextState[row][col] = state[row][col] === 1 ? 0 : 1;
      return nextState;
    case "tick":
      return action.payload;
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, makeMatrix(20));
  return (
    <div className="container">
      {state.map((row, i) =>
        row.map((col, j) => (
          <Cell
            key={`${i} ${j}`}
            state={col === 1 ? "alive" : "dead"}
            coord={[i, j]}
            dispatch={dispatch}
          />
        ))
      )}
      <Click state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
