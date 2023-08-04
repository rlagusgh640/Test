import { useState } from "react";
import {
  Wrapper,
  Title,
  WriterWrapper,
  InputWrapper,
  Label,
  Writer,
  Password,
  Subject,
  Content,
  ZipoCode,
  ZipoSearch,
  ZipoWrapper,
  Address,
  YoutubeLink,
  ImageWrapper,
  Upload,
  OptionWrapper,
  RadioButton,
  RadioLabel,
  ButtonWrapper,
  SubmitButton,
  ZWrapper,
  ErrorWriter,
} from "../../../styles/emotion";
export default function Board() {
  const [writer, setWriter] = useState("");
  const [error1, setError1] = useState("");
  const [password, setPassword] = useState("");
  function changeWriter(event) {
    console.log(event.target.value);
    setWriter(event.target.value);
    console.log(writer);
  }
  function changePassword() {}
  function submitBtnClick() {
    if (writer === "") {
      setError1("입력해주세요");
    }
  }
  
  return (
    <Wrapper>
      <Title>게시물 등록</Title>
      <WriterWrapper>
        <InputWrapper>
          <Label>작성자</Label>
          <Writer
            onChange={changeWriter}
            type="text"
            placeholder="이름을 입력해주세요."
          ></Writer>
          <ErrorWriter>{error1}</ErrorWriter>
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <Password
            onChange={changePassword}
            type="password"
            placeholder="비밀번호를 입력해주세요."
          ></Password>
        </InputWrapper>
      </WriterWrapper>

      <InputWrapper>
        <Label>제목</Label>
        <Subject type="text" placeholder="제목을 입력하세요."></Subject>
      </InputWrapper>

      <InputWrapper>
        <Label>내용</Label>
        <Content placeholder="내용을 입력하세요."></Content>
      </InputWrapper>

      <ZWrapper>
        <Label>주소</Label>
        <ZipoWrapper>
          <ZipoCode placeholder="07250" />
          <ZipoSearch>우편번호 검색</ZipoSearch>
        </ZipoWrapper>
        <Address />
        <Address />
      </ZWrapper>

      <InputWrapper>
        <Label>유튜브</Label>
        <YoutubeLink placeholder="링크를 입력하세요."></YoutubeLink>
      </InputWrapper>

      <ImageWrapper>
        <Label>사진 첨부</Label>
        <Upload>
          <p>+</p>
          업로드
        </Upload>
        <Upload>
          <p>+</p>
          업로드
        </Upload>
        <Upload>
          <p>+</p>
          업로드
        </Upload>
      </ImageWrapper>

      <OptionWrapper>
        <Label>메인설정</Label>
        <RadioButton type="radio"></RadioButton>
        <RadioLabel>유튜브</RadioLabel>
        <RadioButton type="radio"></RadioButton>
        <RadioLabel>사진</RadioLabel>
      </OptionWrapper>

      <ButtonWrapper>
        <SubmitButton onClick={submitBtnClick}>등록하기</SubmitButton>
      </ButtonWrapper>
    </Wrapper>
  );
}
