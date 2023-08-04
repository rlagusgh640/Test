import { useState } from "react";

export default function SignupStatePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  function onChangeEmail(event) {
    console.log(event); //행동
    console.log(event.target); //작동된태그
    console.log(event.target.value); //작동된 태그에 입력된값
    setEmail(event.target.value);
  } //바인딩=연결
  function onChangePassword(event) {
    setEmail(event.target.value);
  }
  function onClickSignup() {
    console.log(email);
    console.log(password);
    //검증
    if (email.includes("@") === false) {
      //document.getElementById("error").innerText =
      // "이메일이 올바르지 않습니다.";
      setEmailError("이메일이 올바르지 않습니다.");
    } else {
      //backend 컴퓨터에 있는 API함수 요청 후 메시지 출력
      alert("회원가입 완료");
    }
  }
  return (
    <>
      이메일: <input type="text" onChange={onChangeEmail} />
      <div>{emailError}</div>
      패스워드: <input type="password" onChange={onChangePassword} />
      <button onClick={onClickSignup}>회원가입</button>
    </>
  );
}
