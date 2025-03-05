import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

import Logo from "../assets/TEAM4.svg";

const HeaderWarp = styled.div`
    width:100%;
    height:75px;
    display:flex;
    background-color:#FFF;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #eee;
`;

const HeaderInner = styled.div`
    width:1520px;
    display:flex;
    justify-content: space-between;
`;

const HeaderLogo = styled.img`
    width:100px;
`;

const HeaderNav = styled.div``;

const Navul = styled.ul`
    list-style:none;
    display:flex;
    gap: 15px;
`;

const Navli = styled.li`
    text-decoration: none;
    color : #222;
    cursor:pointer;

    &:hover {
        color : #88C1AA;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit; // 기본 색상 유지
    &:hover {
        color: #88C1AA;
    }
`;

// 모달 배경
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

// 모달 본체
const ModalContent = styled.div`
    width: 400px;
    background: white;
    padding: 20px;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

const CloseButton = styled.button`
    background: #ff5252;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 15px;
    &:hover {
        background: #ff0000;
    }
`;

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

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
                            <Navli onClick={() => setIsModalOpen(true)}>
                                팀원 등록하기
                            </Navli>
                        </Navul>
                    </HeaderNav>
                </HeaderInner>
            </HeaderWarp>

            {/* 모달창 */}
            {isModalOpen && (
                <ModalOverlay onClick={() => setIsModalOpen(false)}>
                    <ModalContent onClick={(e) => e.stopPropagation()}>
                        <h2>팀원 등록</h2>
                        <p>팀원 정보를 입력해주세요.</p>
                        <CloseButton onClick={() => setIsModalOpen(false)}>닫기</CloseButton>
                    </ModalContent>
                </ModalOverlay>
            )}
        </>
    );
};

export default Header;
