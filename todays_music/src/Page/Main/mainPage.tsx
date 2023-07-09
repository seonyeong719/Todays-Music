import { styled } from "styled-components";
import LP from "../../Components/LP/lp";
import { flexAllCenter, flexJustifyCenter } from "../../Style/common";
import { useGetVillageWeather } from "../../Hooks/Queries/get-weather-query";

function MainPage() {
  const ww = {
    numOfRows: 10,
    pageNo: 1,
    dataType: "JSON",
    base_date: 20230709,
    base_time: 1400,
    nx: 55,
    ny: 127,
  };

  const { data } = useGetVillageWeather(ww);
  console.log(data);

  return (
    <S.Wrapper>
      <S.Wrap>
        <S.TitleWrap>
          <Time>시간</Time>
          <S.Weather>날씨</S.Weather>
        </S.TitleWrap>
        <S.Title>Recommend music for today's weather!</S.Title>
        <LP />
      </S.Wrap>
    </S.Wrapper>
  );
}
export default MainPage;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("https://png.pngtree.com/thumb_back/fh260/background/20220707/pngtree-blue-sky-background-on-good-weather-image_1417461.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`;

const Wrap = styled.div`
  height: 100vh;
  ${flexAllCenter}
  flex-direction: column;
`;

const TitleWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
`;

const Weather = styled.div`
  font-size: 50px;
`;

const Time = styled.div`
  font-size: 50px;
`;

const Title = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.xl};
  font-size: 70px;
  max-width: 600px;
  text-align: center;
  color: ${({ theme }) => theme.COLOR.fontColor[100]};
  margin-bottom: 100px;
`;

const S = {
  Wrapper,
  Wrap,
  TitleWrap,
  Title,
  Weather,
};
