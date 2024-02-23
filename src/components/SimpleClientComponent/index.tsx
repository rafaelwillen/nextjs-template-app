"use client";

import { useState } from "react";

export default function SimpleClientComponent() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="mt-10 flex gap-8 items-center">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCounter(counter + 1)}
      >
        Click me
      </button>
      <p>Counter: {counter}</p>
    </div>
  );
}
