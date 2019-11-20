import React from "react";
import { lifeOrDeath } from "../utils/helpers";

function Ticker({ dispatch, matrix }) {
  const timerId = React.useRef(null);
  React.useEffect(() => {
    timerId.current = window.setTimeout(
      () => dispatch({ type: "tick", payload: lifeOrDeath(matrix) }),
      200
    );
    return () => window.clearTimeout(timerId.current);
  });

  return (
    <button onClick={() => dispatch({ type: "ticking" })} className="go">
      GO
    </button>
  );
}

export default Ticker;
