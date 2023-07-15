import { styled } from "styled-components";
import LP from "../../Components/LP/lp";
import { flexAllCenter } from "../../Style/common";
import { useGetVillageWeather } from "../../Hooks/Queries/get-weather-query";
import { TodayDate } from "../../Utils/dateTime";
import { BaseTime } from "../../Utils/baseTime";

function MainPage() {
  const ww = {
    numOfRows: 10,
    pageNo: 1,
    dataType: "JSON",
    base_date: TodayDate(),
    base_time: BaseTime(),
    nx: 59,
    ny: 125,
  };

  const { data }: any = useGetVillageWeather(ww);
  let datas = data?.response.body.items?.item;

  // const b = datas?.map((el: { category: string }) => ({ [el.category]: el }));

  const tmp = datas?.find((e: { category: string }) => e.category === "TMP");
  const pop = datas?.find((e: { category: string }) => e.category === "POP");
  const sky = datas?.find((e: { category: string }) => e.category === "SKY");
  const pty = datas?.find((e: { category: string }) => e.category === "PTY");

  console.log(tmp.fcstValue);

  return (
    <S.Wrapper>
      <S.Wrap>
        <S.TitleWrap>
          <S.Time>{`현재 온도는 ${tmp.fcstValue}도 입니다!`}</S.Time>
          <S.Weathers src="/Assets/Img/비.png" />
          <S.Time></S.Time>
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

const Weathers = styled.img`
  width: 4rem;
  background-color: white;
`;

const Time = styled.div`
  font-size: 50px;
  background-color: white;
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
  Weathers,
  Time,
};
