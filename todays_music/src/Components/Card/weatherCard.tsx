import { styled } from "styled-components";
import { flexAlignCenter, flexSpaceBetween } from "../../Style/common";

function WeatherCard() {
  return (
    <S.Tmp>
      <S.TmpImg>
        <S.TImg src="/Assets/Img/강수량.png" />
        <span>강수량</span>
      </S.TmpImg>
      <S.Ment>{}</S.Ment>
    </S.Tmp>
  );
}
export default WeatherCard;

const Tmp = styled.div`
  ${flexSpaceBetween}
  cursor: pointer;
  &:hover {
    scale: 1.02;
    transition: all 0.8s;
  }
`;

const TmpImg = styled.div`
  ${flexAlignCenter}
  &>span {
    font-size: 1.2rem;
  }
`;

const TImg = styled.img`
  width: 4.2rem;
  margin: 0 1rem;
`;

const Ment = styled.span`
  margin-right: 1.5rem;
  font-size: 2rem;
`;

const S = {
  Tmp,
  TmpImg,
  TImg,
  Ment,
};
