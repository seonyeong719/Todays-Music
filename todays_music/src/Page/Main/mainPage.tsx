import { styled } from "styled-components";
import LP from "../../Components/LP/lp";
import { flexAllCenter } from "../../Style/common";
import { useEffect } from "react";
import { useGetVillageWeather } from "../../Hooks/Queries/get-weather-query";
import Weather from "../Weather/weather";

function MainPage() {
  // const { data } = useGetVillageWeather();
  return (
    <S.Wrapper>
      <S.Wrap>
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
  Title,
};
