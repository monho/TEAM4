import { Link } from "react-router-dom";
import styled from "styled-components";

import P1 from "../assets/1.png";

const AboutWarp = styled.div`
    width:100%;
    height:75px;
    display:flex;
    background-color:#FFF;
    justify-content: center;
`;

const AboutInner = styled.div`
    width:1520px;
    display:flex;
    justify-content: center;
    gap:15px;
`;

const TeamItem = styled.div`
    width : 300px;
    height : 450px;
    border : 1px solid #eee;
    border-radius: 12px;
    display:flex;
    flex-direction: column;  /* 세로 정렬 */
    justify-content: space-between; /* 내부 요소를 위쪽과 아래쪽으로 정렬 */
    align-items: center;
    margin-top: 25px;
    padding: 20px;
`;

const PropileTop = styled.div`
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const PropileTItle = styled.p`
  color :#666;
  font-size:13px;
`;

const ProfileImage = styled.img`
    object-fit: cover;
    border-radius: 50%;
    width:250px;
`;

const ProfileMiddle = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1; /* 남는 공간을 모두 차지하여 버튼을 아래로 밀어냄 */
`;

const NameArea = styled.div`
    display:flex;
    gap:5px;
    margin-top: 10px;
    align-items: center;
`;

const NameText = styled.p`
    font-size: 24px;
    font-weight: 700;
    color: #333;
    margin:0px;
`;

const Bage = styled.p`
    margin:0px;
    font-size: 16px;
    font-weight: normal;
    color: #666;
`;

const ViewinfoBtn = styled.a`
    width: 100%;
    height: 40px;
    background-color: #292929;;
    color: #FFF;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    margin-top: auto; /* 자동으로 아래쪽으로 정렬 */
    text-decoration: none;


    &:hover {
        background-color:rgb(36, 36, 36);
    }
`;

const BottomBtn = styled.div`
  width : 100%;
  display:flex;
`

const About = () => {
  return (
    <AboutWarp>
      <AboutInner>
        <TeamItem>
          <PropileTop>
            <PropileTItle>Team portrait</PropileTItle>
            <PropileTItle>ENTJ</PropileTItle>
          </PropileTop>
          <ProfileMiddle>
            <ProfileImage src={P1} />
            <NameArea>
                <NameText>유일송</NameText>
                <Bage>팀장</Bage>
            </NameArea>
          </ProfileMiddle>
          <ViewinfoBtn href="#">자세히 보기</ViewinfoBtn>
        </TeamItem>
        <TeamItem>
          <PropileTop>
            <PropileTItle>Team portrait</PropileTItle>
            <PropileTItle>ENTJ</PropileTItle>
          </PropileTop>
          <ProfileMiddle>
            <ProfileImage src={P1} />
            <NameArea>
                <NameText>유일송</NameText>
                <Bage>팀장</Bage>
            </NameArea>
          </ProfileMiddle>
          <ViewinfoBtn href="#">자세히 보기</ViewinfoBtn>
        </TeamItem>
        <TeamItem>
          <PropileTop>
            <PropileTItle>Team portrait</PropileTItle>
            <PropileTItle>ENTJ</PropileTItle>
          </PropileTop>
          <ProfileMiddle>
            <ProfileImage src={P1} />
            <NameArea>
                <NameText>유일송</NameText>
                <Bage>팀장</Bage>
            </NameArea>
          </ProfileMiddle>
          <ViewinfoBtn href="#">자세히 보기</ViewinfoBtn>
        </TeamItem>
        <TeamItem>
          <PropileTop>
            <PropileTItle>Team portrait</PropileTItle>
            <PropileTItle>ENTJ</PropileTItle>
          </PropileTop>
          <ProfileMiddle>
            <ProfileImage src={P1} />
            <NameArea>
                <NameText>유일송</NameText>
                <Bage>팀장</Bage>
            </NameArea>
          </ProfileMiddle>
          <ViewinfoBtn href="#">자세히 보기</ViewinfoBtn>
        </TeamItem>
        <TeamItem>
          <PropileTop>
            <PropileTItle>Team portrait</PropileTItle>
            <PropileTItle>ENTJ</PropileTItle>
          </PropileTop>
          <ProfileMiddle>
            <ProfileImage src={P1} />
            <NameArea>
                <NameText>유일송</NameText>
                <Bage>팀장</Bage>
            </NameArea>
          </ProfileMiddle>
          <ViewinfoBtn href="#">자세히 보기</ViewinfoBtn>
        </TeamItem>
      </AboutInner>
    </AboutWarp>
  );
};

export default About;
