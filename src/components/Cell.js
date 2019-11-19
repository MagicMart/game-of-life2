import React from "react";

function Cell({ state, coord, dispatch }) {
  return (
    <div
      onClick={() => dispatch({ type: "paint", payload: coord })}
      className={`cell ${state}`}
    />
  );
}

export default React.memo(Cell, (prev, next) => {
  return prev.state === next.state;
});
