import { styled } from "styled-components";
import LP from "../../Components/LP/lp";
import { flexAllCenter } from "../../Style/common";
import { useGetVillageWeather } from "../../Hooks/Queries/get-weather-query";
import { TodayDate } from "../../Utils/dateTime";
import { BaseTime } from "../../Utils/baseTime";
import { WeatherData } from "../../Utils/weatherData";
import { Weathers, www } from "../../Types/weatherType";

function MainPage() {
  const wth: Weathers = {
    numOfRows: 10,
    pageNo: 1,
    dataType: "JSON",
    base_date: TodayDate(),
    base_time: BaseTime(),
    nx: 59,
    ny: 125,
  };

  const { data, isLoading }: any = useGetVillageWeather(wth);
  let datas = data?.response.body?.items?.item;

  const sky = datas?.find((e: { category: string }) => e.category === "SKY");
  const pty = datas?.find((e: { category: string }) => e.category === "PTY");

  let weatherImg: www | undefined = WeatherData(sky?.fcstValue, pty?.fcstValue);
  console.log(weatherImg?.back);

  return (
    <S.Wrapper img={weatherImg?.back}>
      <Img src="/Assets/Img/ㅊㅁㅊㅁ.png" />
      {isLoading ? (
        <div>skeleton</div>
      ) : (
        <S.Wrap>
          <S.Title>Recommend music for today's weather!</S.Title>
          <LP />
        </S.Wrap>
      )}
    </S.Wrapper>
  );
}
export default MainPage;

const Wrapper = styled.div<{ img: string | undefined }>`
  width: 100%;
  height: 100vh;
  background-image: ${({ img }) => `url(${img})`};
  background-repeat: no-repeat;
  background-size: cover;
`;

const Img = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 3;
`;

const Wrap = styled.div`
  height: 100vh;
  ${flexAllCenter}
  flex-direction: column;
`;

const Time = styled.div`
  font-size: 1.5rem;
  z-index: 11;
`;

const Title = styled.span`
  font-size: 6rem;
  max-width: 800px;
  text-align: center;
  color: ${({ theme }) => theme.COLOR.fontColor[100]};
  margin-bottom: 100px;
  font-family: "Lobster-Regular.ttf";
  z-index: 11;
  @media ${({ theme }) => theme.device.mobile} {
    padding: 0 2rem;
  }
`;

const S = {
  Wrapper,
  Wrap,
  Title,
  Time,
};
