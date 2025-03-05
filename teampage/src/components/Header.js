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
    width: 400px; /* 모달 크기 고정 */
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

const FormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center; /* 버튼과 입력 필드를 중앙 정렬 */
`;

const InputField = styled.input`
    width: 100%;
    max-width: 360px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    box-sizing: border-box; /* 패딩 포함 너비 유지 */
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

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        role: "팀원", // 기본값
        workStyle: "",
        mbti: "",
        hobby: "",
        goal: "",
        photo: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, photo: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("등록된 데이터:", formData);
        setIsModalOpen(false); // 제출 후 모달 닫기
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
                            <InputField 
                                type="text" 
                                name="name" 
                                placeholder="이름" 
                                value={formData.name} 
                                onChange={handleChange} 
                                required 
                            />

                            <SelectField 
                                name="role" 
                                value={formData.role} 
                                onChange={handleChange} 
                                required
                            >
                                <option value="팀원">팀원</option>
                                <option value="팀장">팀장</option>
                            </SelectField>

                            <InputField 
                                type="text" 
                                name="workStyle" 
                                placeholder="업무 스타일" 
                                value={formData.workStyle} 
                                onChange={handleChange} 
                                required 
                            />

                            <InputField 
                                type="text" 
                                name="mbti" 
                                placeholder="MBTI" 
                                value={formData.mbti} 
                                onChange={handleChange} 
                                required 
                            />

                            <InputField 
                                type="text" 
                                name="hobby" 
                                placeholder="취미" 
                                value={formData.hobby} 
                                onChange={handleChange} 
                                required 
                            />

                            <InputField 
                                type="text" 
                                name="goal" 
                                placeholder="목표" 
                                value={formData.goal} 
                                onChange={handleChange} 
                                required 
                            />

                            <FileInput 
                                type="file" 
                                name="photo" 
                                accept="image/*" 
                                onChange={handleFileChange} 
                                required 
                            />

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
