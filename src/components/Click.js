import React from "react";
import { lifeOrDeath } from "../utils/helpers";

function Click({ state, dispatch }) {
  const [start, setStart] = React.useState(true);

  return (
    <button
      onClick={() => dispatch({ type: "tick", payload: lifeOrDeath(state) })}
    >
      {start ? "Start" : "Stop"}
    </button>
  );
}

export default Click;
