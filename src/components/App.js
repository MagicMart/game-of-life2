// @ts-check

import React, { useReducer } from "react";
import Cell from "./Cell";
import Tick from "./Tick";
import Ticker from "./Ticker";

/**
 * @param {number} size
 * @returns {Array<Array<number>>}
 */
const makeMatrix = size => {
  const x = Array.from({ length: size }).fill(0);
  return Array.from({ length: size }).fill(x);
};

const reducer = (state, action) => {
  switch (action.type) {
    case "paint":
      const [row, col] = action.payload;
      let nextState = state.matrix.map(x => x.slice());
      nextState[row][col] = state.matrix[row][col] === 1 ? 0 : 1;
      return { ...state, matrix: nextState, ticking: false };
    case "tick":
      return { ...state, matrix: action.payload };
    case "ticking":
      return { ...state, ticking: !state.ticking };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, {
    matrix: makeMatrix(20),
    ticking: false
  });

  return (
    <div className="container">
      {state.matrix.map((row, i) =>
        row.map((col, j) => (
          <Cell
            key={`${i} ${j}`}
            state={col === 1 ? "alive" : "dead"}
            coord={[i, j]}
            dispatch={dispatch}
          />
        ))
      )}
      <Tick state={state} dispatch={dispatch} />
      {state.ticking ? (
        <Ticker dispatch={dispatch} matrix={state.matrix} />
      ) : (
        <button onClick={() => dispatch({ type: "ticking" })} className="no-go">
          GO
        </button>
      )}
    </div>
  );
}

export default App;
