import { useState } from "react";

export default function signUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  function onChangeEmail(event) {
    setEmail(event.target.value);
    console.log(email);
  }
  function onChangePassword(event) {
    setPassword(event.target.value);
    console.log(password);
  }
  function onChangePassword2(event) {
    setRepassword(event.target.value);
    console.log(repassword);
  }
  function submitBtnClick() {
    if (email.includes("@") === false) {
      setError1("email에 @빠짐");
    } else if (password !== repassword) {
      setError2("패스워드 다시입력");
    } else {
      setError1("");
      setError2("");

      alert("축하합니다.");
    }
  }
  return (
    <>
      <h1>회원가입</h1>
      이메일:<input type="text" onChange={onChangeEmail}></input>
      <div>{error1}</div>
      패스워드:<input type="password" onChange={onChangePassword}></input>
      <div>{error2}</div>
      패스워드확인:<input type="password" onChange={onChangePassword2}></input>
      <div>{error2}</div>
      <button onClick={submitBtnClick}>가입하기</button>
    </>
  );
}
