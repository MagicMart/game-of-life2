import React from "react";
import { lifeOrDeath } from "../utils/helpers";

function Ticker({ dispatch, matrix }) {
  React.useEffect(() => {
    window.setTimeout(
      () => dispatch({ type: "tick", payload: lifeOrDeath(matrix) }),
      500
    );
  });

  return (
    <button onClick={() => dispatch({ type: "ticking" })} className="go">
      GO
    </button>
  );
}

export default Ticker;
