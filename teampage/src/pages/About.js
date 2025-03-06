import { useEffect, useState } from "react";
import styled from "styled-components";

// ✅ 스타일링
const AboutWarp = styled.div`
    width: 100%;
    display: flex;
    background-color: #FFF;
    justify-content: center;
`;

const AboutInner = styled.div`
    width: 1520px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
`;

const TeamItem = styled.div`
    width: 300px;
    height: 450px;
    border: 1px solid #eee;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 25px;
    padding: 20px;
`;

const PropileTop = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const PropileTItle = styled.p`
  color: #666;
  font-size: 13px;
`;

const ProfileImage = styled.img`
    object-fit: cover;
    border-radius: 50%;
    width: 250px;
    height: 250px;
`;

const ProfileMiddle = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
`;

const NameArea = styled.div`
    display: flex;
    gap: 5px;
    margin-top: 10px;
    align-items: center;
`;

const NameText = styled.p`
    font-size: 24px;
    font-weight: 700;
    color: #333;
    margin: 0px;
`;

const Bage = styled.p`
    margin: 0px;
    font-size: 16px;
    font-weight: normal;
    color: #666;
`;

const ViewinfoBtn = styled.button`
    width: 100%;
    height: 40px;
    background-color: #292929;
    color: #FFF;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    margin-top: auto;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: rgb(36, 36, 36);
    }
`;

// ✅ 모달 스타일
const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContent = styled.div`
    width: 400px;
    background: white;
    padding: 20px;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CloseButton = styled.button`
    width: 100px;
    background: #ff5252;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 10px;

    &:hover {
        background: #ff0000;
    }
`;



const NoMembersMessage = styled.div`
    font-size: 24px;
    color: #666;
    text-align: center;
    font-weight: bold;
    margin-top: 50px;
`;




const About = ({ refreshTrigger }) => {
    const [members, setMembers] = useState([]);
    const [selectedMember, setSelectedMember] = useState(null); // ✅ 선택된 멤버 정보
    const [isModalOpen, setIsModalOpen] = useState(false); // ✅ 모달 상태

  const fetchMembers = () => {
        fetch("api/members")
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setMembers(data);
                } else {
                    console.error("API 응답이 배열이 아닙니다.", data);
                }
            })
            .catch(error => console.error("데이터 가져오기 실패:", error));
    };
  
    useEffect(() => {
        fetchMembers();
    }, [refreshTrigger]); // ✅ refreshTrigger 변경 시 데이터를 새로 불러옴

    // ✅ 특정 멤버 정보 가져오기
    const handleViewDetails = (name) => {
        fetch(`api/members/${encodeURIComponent(name)}`)
            .then(response => response.json())
            .then(data => {
                setSelectedMember(data);
                setIsModalOpen(true);
            })
            .catch(error => console.error("상세 정보 가져오기 실패:", error));
    };

 return (
        <AboutWarp>
            {members.length === 0 ? (
                <NoMembersMessage>등록된 팀원이 없어요!</NoMembersMessage>
            ) : (
                <AboutInner>
                    {members.map((member, index) => (
                        <TeamItem key={index}>
                            <PropileTop>
                                <PropileTItle>Team portrait</PropileTItle>
                                <PropileTItle>{member.MEMBER_MBTI || "Unknown"}</PropileTItle>
                            </PropileTop>
                            <ProfileMiddle>
                                <ProfileImage src={member.photo_url} alt={member.MEMBER_NAME} />
                                <NameArea>
                                    <NameText>{member.MEMBER_NAME}</NameText>
                                    <Bage>{member.MEMBER_RANK}</Bage>
                                </NameArea>
                            </ProfileMiddle>
                            <ViewinfoBtn onClick={() => handleViewDetails(member.MEMBER_NAME)}>자세히 보기</ViewinfoBtn>
                        </TeamItem>
                    ))}
                </AboutInner>
            )}

            {/* ✅ 모달 */}
            {isModalOpen && selectedMember && (
                <ModalOverlay onClick={() => setIsModalOpen(false)}>
                    <ModalContent onClick={(e) => e.stopPropagation()}>
                        <h2>{selectedMember.MEMBER_NAME} ({selectedMember.MEMBER_RANK})</h2>
                        <ProfileImage src={selectedMember.photo_url} alt={selectedMember.MEMBER_NAME} />
                        <p><strong>MBTI:</strong> {selectedMember.MEMBER_MBTI || "정보 없음"}</p>
                        <p><strong>업무 스타일:</strong> {selectedMember.MEMBER_STYLE || "정보 없음"}</p>
                        <p><strong>목표:</strong> {selectedMember.MEMBER_OBJECTIVE || "정보 없음"}</p>
                        <p><strong>취미:</strong> {selectedMember.MEMBER_HOBBY || "정보 없음"}</p>
                        <CloseButton onClick={() => setIsModalOpen(false)}>닫기</CloseButton>
                    </ModalContent>
                </ModalOverlay>
            )}
        </AboutWarp>
    );
};

export default About;