import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

import Logo from "../assets/TEAM4.svg";

const HeaderWarp = styled.div`
    width: 100%;
    height: 75px;
    display: flex;
    background-color: #FFF;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #eee;
`;

const HeaderInner = styled.div`
    width: 1520px;
    display: flex;
    justify-content: space-between;
`;

const HeaderLogo = styled.img`
    width: 100px;
`;

const HeaderNav = styled.div``;

const Navul = styled.ul`
    list-style: none;
    display: flex;
    gap: 15px;
`;

const Navli = styled.li`
    text-decoration: none;
    color: #222;
    cursor: pointer;

    &:hover {
        color: #88C1AA;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    &:hover {
        color: #88C1AA;
    }
`;

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
    max-width: 90%;
    background: white;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const InputField = styled.input`
    width: 100%;
    max-width: 360px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    box-sizing: border-box;
    margin-bottom:10px;
`;

const SelectField = styled.select`
    width: 100%;
    max-width: 360px;
    padding: 10px;
    margin-bottom:10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    box-sizing: border-box;
`;

const FileInput = styled.input`
    width: 100%;
    max-width: 360px;
    padding: 5px;
    box-sizing: border-box;
    margin-bottom:10px;
`;

const SubmitButton = styled.button`
    width: 100%;
    max-width: 360px;
    background-color: #659B85;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    box-sizing: border-box;
    margin-bottom:10px;
    &:hover {
        background-color: #45a049;
    }
`;

const CloseButton = styled.button`
    width: 100%;
    max-width: 360px;
    background: #ff5252;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    box-sizing: border-box;
    &:hover {
        background: #ff0000;
    }
`;
const Header = ({ setRefreshTrigger }) => { // ✅ props에서 상태 변경 함수 받기
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        MEMBER_NAME: "",
        MEMBER_RANK: "팀원",
        MEMBER_STYLE: "",
        MEMBER_MBTI: "",
        MEMBER_HOBBY: "",
        MEMBER_OBJECTIVE: "",
        photo: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, photo: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append("MEMBER_NAME", formData.MEMBER_NAME);
        formDataToSend.append("MEMBER_RANK", formData.MEMBER_RANK);
        formDataToSend.append("MEMBER_MBTI", formData.MEMBER_MBTI);
        formDataToSend.append("MEMBER_STYLE", formData.MEMBER_STYLE);
        formDataToSend.append("MEMBER_OBJECTIVE", formData.MEMBER_OBJECTIVE);
        formDataToSend.append("MEMBER_HOBBY", formData.MEMBER_HOBBY);

        if (formData.photo) {
            formDataToSend.append("photo", formData.photo);
        }

        try {
            const response = await fetch("http://duswns1627.cafe24.com/members", {
                method: "POST",
                body: formDataToSend
            });

            if (response.ok) {
                alert("팀원이 성공적으로 등록되었습니다!");
                setIsModalOpen(false);
                setRefreshTrigger(prev => !prev); // ✅ About.js의 useEffect가 실행되도록 상태 변경
            } else {
                alert("등록 실패!");
            }
        } catch (error) {
            alert("서버 오류: " + error.message);
        }
    };

    return (
        <>
            <HeaderWarp>
                <HeaderInner>
                    <HeaderLogo src={Logo} alt="로고" />
                    <HeaderNav>
                        <Navul>
                            <Navli>
                                <StyledLink to="/about">팀 소개</StyledLink>
                            </Navli>
                            <Navli onClick={() => setIsModalOpen(true)}>팀원 등록하기</Navli>
                        </Navul>
                    </HeaderNav>
                </HeaderInner>
            </HeaderWarp>

            {isModalOpen && (
                <ModalOverlay onClick={() => setIsModalOpen(false)}>
                    <ModalContent onClick={(e) => e.stopPropagation()}>
                        <h2>팀원 등록</h2>
                        <form onSubmit={handleSubmit}>
                            <InputField type="text" name="MEMBER_NAME" placeholder="이름" value={formData.MEMBER_NAME} onChange={handleChange} required />
                            <SelectField name="MEMBER_RANK" value={formData.MEMBER_RANK} onChange={handleChange} required>
                                <option value="팀원">팀원</option>
                                <option value="팀장">팀장</option>
                            </SelectField>
                            <InputField type="text" name="MEMBER_STYLE" placeholder="업무 스타일" value={formData.MEMBER_STYLE} onChange={handleChange} required />
                            <InputField type="text" name="MEMBER_MBTI" placeholder="MBTI" value={formData.MEMBER_MBTI} onChange={handleChange} required />
                            <InputField type="text" name="MEMBER_HOBBY" placeholder="취미" value={formData.MEMBER_HOBBY} onChange={handleChange} required />
                            <InputField type="text" name="MEMBER_OBJECTIVE" placeholder="목표" value={formData.MEMBER_OBJECTIVE} onChange={handleChange} required />
                            <FileInput type="file" name="photo" accept="image/*" onChange={handleFileChange} required />
                            <SubmitButton type="submit">등록</SubmitButton>
                        </form>
                        <CloseButton onClick={() => setIsModalOpen(false)}>닫기</CloseButton>
                    </ModalContent>
                </ModalOverlay>
            )}
        </>
    );
};

export default Header;
