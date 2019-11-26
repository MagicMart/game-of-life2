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
/**
 *
 * @param {Object} state
 * @param {Object} action
 */
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
    case "clear":
      return { ticking: false, matrix: makeMatrix(20) };
    default:
      return state;
  }
};

function App() {
  const size = 20;
  const [state, dispatch] = useReducer(reducer, {
    matrix: makeMatrix(size),
    ticking: false
  });

  return (
    <div>
      <h1>Game of life</h1>
      <div className="container">
        {state.matrix.map(
          /**
           * @param {Array<number>} row
           * @param {number} i
           */ (row, i) =>
            row.map((col, j) => (
              <Cell
                key={`${i} ${j}`}
                condition={col === 1 ? "alive" : "dead"}
                coord={[i, j]}
                dispatch={dispatch}
              />
            ))
        )}
        <div className="container-buttons">
          <Tick className="btn" state={state} dispatch={dispatch} />
          {state.ticking ? (
            <Ticker dispatch={dispatch} matrix={state.matrix} />
          ) : (
            <button
              onClick={() => dispatch({ type: "ticking" })}
              className="no-go btn"
            >
              GO
            </button>
          )}
          <button className="btn" onClick={() => dispatch({ type: "clear" })}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
