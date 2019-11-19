import React from "react";
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

export default Tick;
