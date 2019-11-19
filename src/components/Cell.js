import React from "react";

function Cell({ state, coord, dispatch }) {
  const handleDispatch = () => {
    dispatch({ type: "paint", payload: coord });
  };

  return <div onClick={handleDispatch} className={`cell ${state}`} />;
}

export default React.memo(Cell, (prev, next) => {
  return prev.state === next.state;
});
