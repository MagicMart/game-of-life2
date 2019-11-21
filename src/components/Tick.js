import React from "react";
import PropTypes from "prop-types";
import { lifeOrDeath } from "../utils/helpers";

function Tick({ state, dispatch }) {
  return (
    <button
      onClick={() =>
        dispatch({ type: "tick", payload: lifeOrDeath(state.matrix) })
      }
    >
      Tick
    </button>
  );
}

Tick.propTypes = {
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default Tick;
