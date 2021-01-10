import "./App.css";
import React from "react";
import styled from "styled-components";
import { Container } from "@material-ui/core";

const AnnounceCon = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  padding-left: 30px;
  padding-top: 15px;
  padding-bottom: 15px;
  width: 95%;
  height: 50px;
  background-color: #c9daf8;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SidebarContainer = styled.div`
  position: fixed;
  margin-left: 5px;
`;
const MoveSmallCon = styled.div`
  /* width: 20%; */
  padding: 15px;
  font-size: 15px;
  text-align: left;
  background-color: #c9daf8;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  @media (max-width: 1023px) {
    width: 100%;
    margin: 10px 0;
  }
`;
const LinkButton = styled.div`
  background-color: white;
  margin: 10px 0;
  padding-left: 10px;
`;
const LinkButtonBig = styled.div`
  font-size: 17px;
  font-weight: bold;
  background-color: white;
  margin: 10px 0;
  padding-left: 10px;
`;

const QoveSmallCon = styled.div`
  margin-top: 20px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #c9daf8;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  @media (max-width: 1023px) {
    width: 100%;
    margin: 10px 0;
  }
`;

const QoveCon = styled.div`
  margin-top: 30px;
  margin-left: 250px;
  height: 500px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #c9daf8;
`;

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Container maxwidth="md">
          <AnnounceCon>20학번 게시판</AnnounceCon>
          <SidebarContainer>
            <MoveSmallCon>
              <LinkButtonBig>게시판</LinkButtonBig>
              <LinkButton> -자유 게시판</LinkButton>
              <LinkButton>- 21학번 게시판</LinkButton>
              <LinkButton>- 20학번 게시판</LinkButton>
              <LinkButtonBig>등등...</LinkButtonBig>
            </MoveSmallCon>
            <QoveSmallCon>
              [ 사이트 바로가기 ]<br></br>
              <a
                className="App-link"
                href="https://ssu.ac.kr"
                target="_blank"
                rel="noopener noreferrer"
              >
                숭실대학교
              </a>
              <a
                className="App-link"
                href="https://saint.ssu.ac.kr/irj/portal"
                target="_blank"
                rel="noopener noreferrer"
              >
                숭실대학교 유세인트
              </a>
              <a
                className="App-link"
                href="https://myclass.ssu.ac.kr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                숭실대학교 스마트캠퍼스
              </a>
              <a
                className="App-link"
                href="https://ssu.ac.kr/web/convergence/home"
                target="_blank"
                rel="noopener noreferrer"
              >
                융합특성화자유전공학부
              </a>
            </QoveSmallCon>
          </SidebarContainer>
          <QoveCon></QoveCon>
        </Container>
      </div>
    );
  }
}

export default App;
