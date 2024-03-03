import { useState } from "react";

// a simple counter component
export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <span>{count}</span>
      <button onClick={() => setCount((c) => c - 1)}>-</button>
    </div>
  );
}
