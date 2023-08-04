import {
  Search,
  Container,
  SubTitle,
  Line,
  Profile,
  Profile_Detail,
  Search_detail,
  Profile_Detail_Name,
  Profile_Detail_Dash,
  Profile_Title,
  Profile_Detail_Face,
  SubTitle_Detail,
  Footer,
  ReviewTitle,
  ReviewContent,
  ReviewContent_Question,
  Review,
} from "../../styles/emotion";
export default function Home() {
  return (
    <>
      <Container>
        <Search>
          <Search_detail>
            <img src="/searchicon.png" width="32" height="32"></img>
          </Search_detail>
        </Search>
        <Profile>
          <Profile_Title>마이</Profile_Title>
          <Profile_Detail>
            <Profile_Detail_Face>
              <img src="/profile.png" width="60" height="60"></img>
            </Profile_Detail_Face>
            <Profile_Detail_Name>임정아</Profile_Detail_Name>
            <Profile_Detail_Dash>
              <img src="/group.png" width="16.97" height="16.97"></img>
            </Profile_Detail_Dash>
          </Profile_Detail>
        </Profile>
        <SubTitle>
          <SubTitle_Detail>공지상황</SubTitle_Detail>
          <SubTitle_Detail>이벤트</SubTitle_Detail>
          <SubTitle_Detail>F&Q</SubTitle_Detail>
          <SubTitle_Detail>Q&A</SubTitle_Detail>
        </SubTitle>
        <Line></Line>
        <Review>
          <ReviewTitle>Q.01</ReviewTitle>
          <ReviewContent>
            <ReviewContent_Question>
              리뷰작성은 어떻게 하나요?
            </ReviewContent_Question>

            <div>
              <img src="/Groupdown.png"></img>
            </div>
          </ReviewContent>
        </Review>

        <Review>
          <ReviewTitle>Q.01</ReviewTitle>
          <ReviewContent>
            <ReviewContent_Question>
              리뷰작성은 어떻게 하나요?
            </ReviewContent_Question>

            <div>
              <img src="/Groupdown.png"></img>
            </div>
          </ReviewContent>
        </Review>

        <Review>
          <ReviewTitle>Q.01</ReviewTitle>
          <ReviewContent>
            <ReviewContent_Question>
              리뷰작성은 어떻게 하나요?
            </ReviewContent_Question>
            <div>
              <img src="/Groupdown.png"></img>
            </div>
          </ReviewContent>
        </Review>

        <Review>
          <ReviewTitle>Q.01</ReviewTitle>
          <ReviewContent>
            <ReviewContent_Question>
              리뷰작성은 어떻게 하나요?
            </ReviewContent_Question>
            <div>
              <img src="/Groupdown.png"></img>
            </div>
          </ReviewContent>
        </Review>

        <Review>
          <ReviewTitle>Q.01</ReviewTitle>
          <ReviewContent>
            <ReviewContent_Question>
              리뷰작성은 어떻게 하나요?
            </ReviewContent_Question>
            <div>
              <img src="/Groupdown.png"></img>
            </div>
          </ReviewContent>
        </Review>

        <Review>
          <ReviewTitle>Q.01</ReviewTitle>
          <ReviewContent>
            <ReviewContent_Question>
              리뷰작성은 어떻게 하나요?
            </ReviewContent_Question>
            <div>
              <img src="/Groupdown.png"></img>
            </div>
          </ReviewContent>
        </Review>
        <Line></Line>
        <Footer>
          <div>
            <div>
              <img src="/home.png"></img>
              <div>홈</div>
            </div>
          </div>

          <div>
            <div>
              <img src="/gps.png"></img>
              <div>잇츠로드</div>
            </div>
          </div>

          <div>
            <div>
              <img src="/heart.png"></img>
              <div>마이찜</div>
            </div>
          </div>

          <div>
            <div>
              <img src="/my.png"></img>
              <div>마이</div>
            </div>
          </div>
        </Footer>
      </Container>
    </>
  );
}
