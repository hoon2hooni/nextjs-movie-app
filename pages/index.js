import NavBar from "@components/NavBar";
import { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <NavBar />
      <h1> Number is {counter}</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>click me</button>
    </div>
  );
}