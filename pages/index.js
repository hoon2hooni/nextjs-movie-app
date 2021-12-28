import Head from "@components/Head";

import { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1> Number is {counter}</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>click me</button>
    </div>
  );
}
