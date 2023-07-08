import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
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
        <Link to="/">Home Img</Link>
        <S.NavBar>
          {navMenu.map((nav, idx) => (
            <li key={idx} onClick={() => onClickNav(nav.address)}>
              {nav.title}
            </li>
          ))}
        </S.NavBar>
      </S.Wrap>
    </S.Wrapper>
  );
}
export default Header;

const Wrapper = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 99;
  align-items: center;
  height: 90px;
  margin-bottom: 40px;
  box-shadow: 2px 2px 5px 2px gray;
`;

const Wrap = styled.div`
  justify-content: space-between;
  display: flex;
  width: 70%;
`;

const NavBar = styled.ul`
  align-items: center;
  display: flex;
  font-size: ${({ theme }) => theme.FONT_SIZE.base};
  font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
  & > li {
    margin: 0 10px;
    padding: 0 15px;
    cursor: pointer;
    position: relative;
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

const S = {
  Wrapper,
  Wrap,
  NavBar,
  UnderBar,
};
