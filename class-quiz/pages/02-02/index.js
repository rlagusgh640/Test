import { useState } from "react";

export default function CountUp() {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount(count + 1);
    //const count = Number(document.getElementById("count").innerText) + 1;
    //document.getElementById("count").innerText = count;
  };
  return (
    <>
      <div>{count}</div>
      <button onClick={countUp}>카운트 올리기</button>
    </>
  );
}
