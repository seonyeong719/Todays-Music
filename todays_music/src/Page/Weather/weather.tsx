import { styled } from "styled-components";
import { flexAlignCenter, flexAllCenter, flexSpaceBetween } from "../../Style/common";
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
  const tmn = datas?.find((e: { category: string }) => e.category === "TMN");
  const tmx = datas?.find((e: { category: string }) => e.category === "TMX");

  let weatherImg = WeatherData(sky?.fcstValue, pty?.fcstValue);

  console.log(datas);
  return (
    <S.Wrapper>
      <S.Wrap>
        <S.Today>
          <img src={weatherImg} />
          <div>{`현재 기온은 ${tmp?.fcstValue}도 입니다!`}</div>
        </S.Today>
        <S.TmpWrap>
          <S.Tmp>
            <S.TmpImg>
              <S.TImg src="/Assets/Img/최고기온.png" />
              <span>최고 기온</span>
            </S.TmpImg>
            <S.Ment>30도</S.Ment>
          </S.Tmp>
          <S.Tmp>
            <S.TmpImg>
              <S.TImg src="/Assets/Img/최저기온.png" />
              <span>최저 기온</span>
            </S.TmpImg>
            <S.Ment>0도</S.Ment>
          </S.Tmp>
          <S.Tmp>
            <S.TmpImg>
              <S.TImg src="/Assets/Img/강수량.png" />
              <span>강수량</span>
            </S.TmpImg>
            <S.Ment>0도</S.Ment>
          </S.Tmp>
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
  box-shadow: 2px 2px 2px 2px gray;
  ${flexAlignCenter}
  justify-content: space-around;
  flex-direction: column;
  & > img {
    width: 20rem;
  }
  & > div {
    font-size: 1.7rem;
    margin-bottom: 3rem;
  }
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

const Tmp = styled.div`
  ${flexSpaceBetween}
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
  Today,
  Wrap,
  TmpWrap,
  Tmp,
  TmpImg,
  TImg,
  Ment,
};
