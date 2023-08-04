import { useState } from "react";

export default function Hello() {
  const [txt, setTxt] = useState("안녕하세요");
  function changeButton() {
    //document.getElementById("txt").innerText = "반갑습니다";
    setTxt("반갑습니다");
  }
  return <button onClick={changeButton}>{txt}</button>;
}
