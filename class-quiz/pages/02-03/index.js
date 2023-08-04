import { useAmp } from "next/amp";
import { useState } from "react";

export default function NumberState() {
  const [num, setNum] = useState("000000");
  function changeBtn() {
    const change = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    setNum(change);
  }
  return (
    <>
      <div>{num}</div>
      <button onClick={changeBtn}>인증번호전송</button>
    </>
  );
}
