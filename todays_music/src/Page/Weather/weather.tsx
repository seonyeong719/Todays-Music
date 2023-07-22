import { styled } from "styled-components";
import {
  flexAlignCenter,
  flexAllCenter,
  flexJustifyCenter,
  flexSpaceBetween,
} from "../../Style/common";
import { TodayDate } from "../../Utils/dateTime";
import { BaseTime } from "../../Utils/baseTime";
import { useGetVillageWeather } from "../../Hooks/Queries/get-weather-query";
import { WeatherData } from "../../Utils/weatherData";

function Weather() {
  const wth = {
    numOfRows: 10,
    pageNo: 1,
    dataType: "JSON",
    base_date: TodayDate(),
    base_time: BaseTime(),
    nx: 59,
    ny: 125,
  };

  const { data, isLoading }: any = useGetVillageWeather(wth);
  let datas = data?.response.body.items?.item;

  const tmp = datas?.find((e: { category: string }) => e.category === "TMP");
  const sky = datas?.find((e: { category: string }) => e.category === "SKY");
  const pty = datas?.find((e: { category: string }) => e.category === "PTY");
  const wsd = datas?.find((e: { category: string }) => e.category === "WSD");
  const pop = datas?.find((e: { category: string }) => e.category === "POP");
  const pcp = datas?.find((e: { category: string }) => e.category === "PCP");

  let weatherImg = WeatherData(sky?.fcstValue, pty?.fcstValue);

  console.log(datas);
  return (
    <S.Wrapper>
      {isLoading ? (
        <div>skeleton</div>
      ) : (
        <S.TitleWrap>
          <S.Title>Today's Weather</S.Title>
          <S.Wrap>
            <S.Today>
              <img src={weatherImg} />
              <div>영등포구 기준</div>
              <div>{`현재 기온은 ${tmp?.fcstValue}도 입니다!`}</div>
            </S.Today>
            <S.TmpWrap>
              <S.Tmp>
                <S.TmpImg>
                  <S.TImg src="/Assets/Img/비.png" />
                  <span>강수 확률</span>
                </S.TmpImg>
                <S.Ment>{`${pop?.fcstValue} %`}</S.Ment>
              </S.Tmp>
              <S.Tmp>
                <S.TmpImg>
                  <S.TImg src="/Assets/Img/풍속.png" />
                  <span>풍속</span>
                </S.TmpImg>
                <S.Ment>{`${wsd?.fcstValue} m/s`}</S.Ment>
              </S.Tmp>
              <S.Tmp>
                <S.TmpImg>
                  <S.TImg src="/Assets/Img/강수량.png" />
                  <span>강수량</span>
                </S.TmpImg>
                <S.Ment>{`${pcp?.fcstValue} mm`}</S.Ment>
              </S.Tmp>
            </S.TmpWrap>
          </S.Wrap>
        </S.TitleWrap>
      )}
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

const TitleWrap = styled.div`
  width: 60%;
`;

const Wrap = styled.div`
  ${flexJustifyCenter}
  padding-top: 2rem;
`;

const Today = styled.div`
  width: 25rem;
  height: 34rem;
  border-radius: 1rem;
  box-shadow: 2px 2px 2px 2px gray;
  ${flexAlignCenter}
  flex-direction: column;
  cursor: pointer;
  &:hover {
    scale: 1.02;
    transition: all 0.8s;
  }
  & > img {
    width: 20rem;
    margin-bottom: 1rem;
  }
  & > div {
    font-size: 1.7rem;
    margin-bottom: 1rem;
  }
`;

const Title = styled.span`
  font-size: 6rem;
  color: white;
  font-family: "Lobster-Regular.ttf";
  ${flexJustifyCenter}
  padding-bottom: 2rem;
  margin: 2rem 0;
  border-bottom: 1px solid white;
`;

const TmpWrap = styled.div`
  width: 30rem;
  margin-left: 5rem;
  & > * {
    border-radius: 1rem;
    box-shadow: 2px 2px 2px 1px gray;
    height: 6.5rem;
    margin-bottom: 2rem;
  }
`;

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
  Wrapper,
  TitleWrap,
  Today,
  Wrap,
  Title,
  TmpWrap,
  Tmp,
  TmpImg,
  TImg,
  Ment,
};
