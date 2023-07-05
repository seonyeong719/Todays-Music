import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { flexJustifyCenter } from "Style/common";

function Header() {
  const navigate = useNavigate();
  const [scroll, setScroll] = useState<boolean>(false);
  const [locationUrl, setLocationUrl] = useState<string>("");

  const handleScroll = () => {
    if (window.scrollY >= 20) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const location = useLocation();
  console.log(location.pathname);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setLocationUrl(location.pathname);
  }, [location]);

  const navMenu = [
    {
      title: "오늘의 음악",
      address: "/todays-music",
    },
    {
      title: "오늘의 날씨",
      address: "/todays-weather",
    },
    {
      title: "",
      address: "/",
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
              {locationUrl === nav.address && <S.UnderBar />}
            </li>
          ))}
        </S.NavBar>
      </S.Wrap>
    </S.Wrapper>
  );
}
export default Header;

const Wrapper = styled.div`
  ${flexJustifyCenter}
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 99;
  align-items: center;
  height: 90px;
  margin-bottom: 40px;
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
