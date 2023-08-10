import { styled } from "styled-components";
import { flexAlignCenter, flexSpaceBetween } from "../../Style/common";

function WeatherCard(props: { img: string; title: string; comment: string }): React.ReactElement {
  return (
    <S.Tmp>
      <S.TmpImg>
        <S.TImg src={props.img} />
        <span>{props.title}</span>
      </S.TmpImg>
      <S.Ment>{props.comment}</S.Ment>
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
