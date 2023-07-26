import { RxHamburgerMenu } from "react-icons/rx";
import { styled } from "styled-components";
import { flexAlignCenter } from "../../../Style/common";

function MobileHeader() {
  return (
    <S.Wrapper>
      <S.Wrap>
        <S.Title>Sunny Sounds</S.Title>
        <S.Hamburger />
      </S.Wrap>
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
const Title = styled.span`
  font-size: 3rem;
  font-family: "LINESeedKR-Bd";
  color: ${({ theme }) => theme.COLOR.subColor}; // 색깔 추후 수정 예정
`;
const Hamburger = styled(RxHamburgerMenu)`
  color: white;
  font-size: 4rem;
`;
const S = { Wrapper, Wrap, Title, Hamburger };
