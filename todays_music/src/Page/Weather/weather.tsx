import { styled } from "styled-components";
import { flexAllCenter, flexSpaceBetween } from "../../Style/common";

function Weather() {
  return (
    <S.Wrapper>
      <S.Wrap>
        <S.Today>오늘의 날씨 이미지</S.Today>
        <S.TmpWrap>
          <S.HighTmp>최고 기온</S.HighTmp>
          <S.LowTmp>최저 기온</S.LowTmp>
          <S.Rain>강수량</S.Rain>
        </S.TmpWrap>
      </S.Wrap>
    </S.Wrapper>
  );
}
export default Weather;

const Wrapper = styled.div`
  background: linear-gradient(#add7fb, #bddff9, #d1e6fb);
  width: 100%;
  height: 100vh;
  ${flexAllCenter}
`;

const Today = styled.div`
  width: 25rem;
  height: 35rem;
  border-radius: 1rem;
  box-shadow: 2px 2px 2px 1px gray;
`;

const Wrap = styled.div`
  ${flexSpaceBetween}
  width: 53%;
`;

const TmpWrap = styled.div`
  width: 30rem;
  & > * {
    border-radius: 1rem;
    box-shadow: 2px 2px 2px 1px gray;
    height: 6.5rem;
    margin-bottom: 2rem;
  }
`;

const HighTmp = styled.div``;

const LowTmp = styled.div``;

const Rain = styled.div``;
const S = {
  Wrapper,
  Today,
  Wrap,
  TmpWrap,
  HighTmp,
  LowTmp,
  Rain,
};
