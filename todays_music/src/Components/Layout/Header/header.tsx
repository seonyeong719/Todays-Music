import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { flexAlignCenter, flexAllCenter } from "../../../Style/common";
// import { useState } from "react";

function Header() {
  const navigate = useNavigate();

  const navMenu = [
    {
      title: "오늘의 음악",
      address: "/todays-music",
    },
    {
      title: "오늘의 날씨",
      address: "/todays-weather",
    },
  ];

  const onClickNav = (page: string) => {
    navigate(`${page}`);
  };

  return (
    <S.Wrapper>
      <S.Wrap>
        <Link to="/">
          <S.LogoImg src="/Assets/Img/logo.png" />
        </Link>
        <S.NavBar>
          {navMenu.map((nav, idx) => (
            <S.Li key={idx} onClick={() => onClickNav(nav.address)}>
              {nav.title}
            </S.Li>
          ))}
        </S.NavBar>
      </S.Wrap>
    </S.Wrapper>
  );
}
export default Header;

const Wrapper = styled.div`
  width: 100%;
  ${flexAllCenter}
  position: fixed;
  top: 0;
  z-index: 99;
  align-items: center;
  height: 90px;
  margin-bottom: 40px;
  padding: 20px 100px;
  box-shadow: 2px 2px 5px 2px gray;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
`;

const LogoImg = styled.img`
  width: 8rem;
`;
const NavBar = styled.ul`
  ${flexAlignCenter}
  display: flex;
  font-size: ${({ theme }) => theme.FONT_SIZE.base};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  color: ${({ theme }) => theme.COLOR.fontColor[300]};

  & > li {
    margin: 0 10px;
    padding: 0 15px;
    cursor: pointer;
    position: relative;
    list-style: none;
  }
`;

const UnderBar = styled.div`
  border-bottom: 3px solid red; // nav 바 색상
  width: 100%;
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  bottom: -10px;
`;

const Li = styled.li`
  color: white;
`;

const S = {
  Wrapper,
  Wrap,
  LogoImg,
  NavBar,
  UnderBar,
  Li,
};
