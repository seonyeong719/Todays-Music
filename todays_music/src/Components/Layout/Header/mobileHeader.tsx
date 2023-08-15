import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { styled } from "styled-components";
import { flexAlignCenter } from "../../../Style/common";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NAV_MENU } from "../../../Consts/navMenuList";

function MobileHeader() {
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  const onSideBarBtn = () => {
    setOpen((prev) => !prev);
  };

  const onClickNav = (page: string) => {
    navigate(`${page}`);
  };

  return (
    <S.Wrapper>
      <S.Wrap>
        <S.Title>Sunny Sounds</S.Title>
      </S.Wrap>
      {open ? <S.Cross onClick={onSideBarBtn} /> : <S.Hamburger onClick={onSideBarBtn} />}
      {open && (
        <S.Div>
          {NAV_MENU.map((nav, idx) => (
            <S.Li
              key={idx}
              state={nav.address === location.pathname}
              onClick={() => onClickNav(nav.address)}
            >
              {nav.title}
            </S.Li>
          ))}
        </S.Div>
      )}
    </S.Wrapper>
  );
}
export default MobileHeader;

const Wrapper = styled.div`
  position: relative;
  ${flexAlignCenter}
  display: none;
  width: 100%;
  justify-content: space-between;
  @media ${({ theme }) => theme.device.mobile} {
    display: block;
    ${flexAlignCenter};
  }
`;

const Wrap = styled.div`
  ${flexAlignCenter}
`;

const LogoImg = styled.img`
  @media ${({ theme }) => theme.device.mobile} {
    width: 10rem;
  }
`;

const Title = styled.span`
  font-size: 2.5rem;
  font-family: "LINESeedKR-Bd";
  color: white;
`;

const Hamburger = styled(RxHamburgerMenu)`
  color: white;
  font-size: 3.5rem;
  cursor: pointer;
`;

const Cross = styled(RxCross2)`
  color: white;
  font-size: 3.5rem;
  position: relative;
  cursor: pointer;
  z-index: 9999;
`;

const Div = styled.div`
  position: absolute;
  background-color: beige;
  right: -3rem;
  top: -4rem;
  font-size: 2.5rem;
  width: 60vw;
  height: 100vh;
  padding: 8rem 0 0 3rem;
  opacity: 0.7;
  @keyframes slide {
    0% {
      transform: translateX(50%);
    }
    100% {
      transform: translateX(0);
    }
  }
  animation: slide 1s ease;
  animation-duration: 0.4s;
  animation-timing-function: ease;
`;

const Li = styled.li<{ state: boolean }>`
  color: white;
  list-style: none;
  padding-top: 0.7rem;
  font-family: "LINESeedKR-Bd";
  color: black;
  color: ${({ state }) => (state ? "#E51013" : "")};
`;

const S = { Wrapper, Wrap, LogoImg, Title, Hamburger, Cross, Li, Div };
