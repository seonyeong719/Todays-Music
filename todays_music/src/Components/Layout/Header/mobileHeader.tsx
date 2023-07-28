import { RxHamburgerMenu } from "react-icons/rx";
import { styled } from "styled-components";
import { flexAlignCenter } from "../../../Style/common";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { navMenu } from "../../../Consts/navMenuList";

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
      <S.Hamburger onClick={onSideBarBtn} />
      {open && (
        <S.Div>
          {navMenu.map((nav, idx) => (
            <S.Li key={idx} onClick={() => onClickNav(nav.address)}>
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

const Div = styled.div`
  position: absolute;
  background-color: beige;
  right: 0;
  top: 4rem;
  font-size: 2rem;
  height: 15rem;
  width: 11rem;
  padding: 1rem 0 0 0.8rem;
  opacity: 0.7;
`;

const Li = styled.li`
  color: white;
  list-style: none;
  padding-top: 0.7rem;
  color: black;
`;

const S = { Wrapper, Wrap, LogoImg, Title, Hamburger, Li, Div };
