import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { flexAlignCenter, flexAllCenter } from "../../../Style/common";
import MobileHeader from "./mobileHeader";
import { NAV_MENU } from "../../../Consts/navMenuList";

function Header() {
  const navigate = useNavigate();

  const onClickNav = (page: string) => {
    navigate(`${page}`);
  };

  return (
    <S.Wrapper>
      <S.Wrap>
        <Link to="/">
          <S.LogoImg src="/Assets/Img/logo.png" />
        </Link>
        <MobileHeader />
        <S.NavBar>
          {NAV_MENU.map((nav, idx) => (
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
  height: 8.5rem;
  padding: 2rem 8rem;
  @media ${({ theme }) => theme.device.mobile} {
    padding: 6rem 1rem;
  }
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  @media ${({ theme }) => theme.device.mobile} {
    width: 95%;
  }
`;

const LogoImg = styled.img`
  width: 8rem;
  @media ${({ theme }) => theme.device.mobile} {
    width: 10rem;
  }
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
  @media ${({ theme }) => theme.device.mobile} {
    display: none;
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
