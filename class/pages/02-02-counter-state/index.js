//훅 함수 제공 X  react import필요
import { useState } from "react";

export default function CounterStatePage() {
  //use -> 훅
  const [count, setCount] = useState(0); //let count =0;
  function onClickCountUp() {
    setCount(count + 1); //기존:count=count+1;
  }

  function onClickCountDown() {
    setCount(count - 1);
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기!!!</button>
      <button onClick={onClickCountDown}>카운트 내리기!!!</button>
    </div>
  );
}
