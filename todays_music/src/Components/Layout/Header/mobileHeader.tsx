import { RxHamburgerMenu } from "react-icons/rx";
import { styled } from "styled-components";
import { flexAlignCenter } from "../../../Style/common";
import { useState } from "react";

function MobileHeader() {
  const [open, setOpen] = useState<boolean>(false);

  const onSideBarBtn = () => {
    setOpen((prev) => !prev);
  };
  return (
    <S.Wrapper>
      <S.Wrap>
        <S.Title>Sunny Sounds</S.Title>
      </S.Wrap>
      <S.Hamburger onClick={onSideBarBtn} />
    </S.Wrapper>
  );
}
export default MobileHeader;

const Wrapper = styled.div`
  ${flexAlignCenter}
  display: none;
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
  color: ${({ theme }) => theme.COLOR.subColor}; // 색깔 추후 수정 예정
`;

const Hamburger = styled(RxHamburgerMenu)`
  color: white;
  font-size: 3.5rem;
  cursor: pointer;
`;

const S = { Wrapper, Wrap, LogoImg, Title, Hamburger };
