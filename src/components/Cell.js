// @ts-check

import React from "react";
import PropTypes from "prop-types";

function Cell({ condition, coord, dispatch }) {
  const handleDispatch = () => {
    dispatch({ type: "paint", payload: coord });
  };

  return <div onClick={handleDispatch} className={`cell ${condition}`} />;
}

export default React.memo(Cell, (prev, next) => {
  return prev.condition === next.condition;
});

Cell.propTypes = {
  condition: PropTypes.string.isRequired,
  coord: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};
