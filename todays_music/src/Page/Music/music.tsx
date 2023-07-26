import styled from "styled-components";
import { flexJustifyCenter } from "../../Style/common";
import { useRef, useState } from "react";
import { ImPlay3 } from "react-icons/im";
import { IoIosPause } from "react-icons/io";
import { ALL_MUSIC } from "../../Consts/musicList";
import { WeatherData } from "../../Utils/weatherData";
import { useGetVillageWeather } from "../../Hooks/Queries/get-weather-query";
import { TodayDate } from "../../Utils/dateTime";
import { BaseTime } from "../../Utils/baseTime";
import { Weathers } from "../../Types/weatherType";

function Music() {
  const wth: Weathers = {
    numOfRows: 10,
    pageNo: 1,
    dataType: "JSON",
    base_date: TodayDate(),
    base_time: BaseTime(),
    nx: 59,
    ny: 125,
  };

  const audioRefs = useRef<any[]>([]);

  const [play, setPlay] = useState<number | null>(null);
  const [albumImg, setAlbumImg] = useState<any>();

  // 쿼리로 받아온 데이터지만 암시로 구현을 위해 다 적어줌
  const { data }: any = useGetVillageWeather(wth);
  let datas = data?.response?.body?.items?.item;

  const sky = datas?.find((e: { category: string }) => e.category === "SKY");
  const pty = datas?.find((e: { category: string }) => e.category === "PTY");

  let weatherImg = WeatherData(sky?.fcstValue, pty?.fcstValue);

  // 날씨 정보와 목데이터를 비교해 알맞은 데이터 찾아줌
  let all = ALL_MUSIC.map((music) => music).find((el) => el.weather === weatherImg?.wthr);
  console.log(all);

  // 재생 버튼
  const start = (idx: any) => {
    audioRefs?.current?.forEach((item) => {
      item.pause();
    });
    if (audioRefs.current) {
      audioRefs?.current[idx].play();
    }
    setPlay(idx);
    setAlbumImg(all?.children[idx].img);
  };

  // 일시정지 버튼
  const stop = (idx: any) => {
    if (audioRefs.current) {
      audioRefs?.current[idx].pause();
    }
    setPlay(null);
  };

  return (
    <S.Wrapper>
      <S.MusicWrapper>
        <S.Title>Today's Music</S.Title>
        <S.MusicContainer>
          {albumImg ? <img src={albumImg} /> : <img src="/Assets/Img/Logo배경.png" />}
          <S.MusicList>
            {all?.children.map((list, idx: any) => (
              <S.Li key={idx} status={idx === play}>
                {play === idx ? (
                  <S.IconPauseBtn onClick={() => stop(idx)} />
                ) : (
                  <S.IconPlayBtn onClick={() => start(idx)} />
                )}
                <audio
                  ref={(element) => (audioRefs.current[idx] = element)}
                  id={idx}
                  src={list.audio}
                  controls
                ></audio>
                <div onClick={() => start(idx)}>
                  {list.title} - {list.singer}
                </div>
              </S.Li>
            ))}
          </S.MusicList>
        </S.MusicContainer>
      </S.MusicWrapper>
    </S.Wrapper>
  );
}

export default Music;

const Wrapper = styled.div`
  background: linear-gradient(#d1c0a8, #e8ded1, #fafdf3);
  width: 100%;
  height: 100vh;
  ${flexJustifyCenter}
  align-items: start;
  padding-top: 7rem;
`;

const MusicWrapper = styled.div`
  width: 60%;
  padding-top: 1rem;
  @media ${({ theme }) => theme.device.mobile} {
    width: 90%;
  }
`;

const Title = styled.span`
  font-size: 6rem;
  color: white;
  font-family: "Lobster-Regular.ttf";
  ${flexJustifyCenter}
  text-align: center;
  padding-bottom: 2rem;
  border-bottom: 1px solid white;
  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
  }
`;

const MusicContainer = styled.div`
  display: flex;
  margin-top: 7rem;
  width: 100%;
  & > img {
    min-width: 25rem;
    max-width: 25rem;
    max-height: 25rem;
    min-height: 25rem;
    margin-right: 8rem;
    @media ${({ theme }) => theme.device.mobile} {
      min-width: 40rem;
      max-width: 40rem;
      max-height: 40rem;
      min-height: 40rem;
      margin-right: 0;
      margin-bottom: 5rem;
    }
  }
  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
    align-items: center;
  }
`;

const MusicList = styled.div`
  text-align: start;
  width: 100%;
  & > div {
    font-size: 1.5rem;
    margin-top: 0.5rem;
    border-bottom: 1px solid white;
    padding-bottom: 10px;
    cursor: pointer;
  }
`;

const Li = styled.div<{ status: boolean }>`
  color: ${({ status }) => status && "red"};
  display: flex;
  align-items: center;
  & > div {
    padding: 0.9rem 1.5rem;
    font-size: 1.6rem;
  }
  & > audio {
    display: none;
  }
`;

const IconPlayBtn = styled(ImPlay3)`
  cursor: pointer;
`;

const IconPauseBtn = styled(IoIosPause)`
  cursor: pointer;
`;

const S = {
  Wrapper,
  MusicWrapper,
  Title,
  MusicContainer,
  MusicList,
  Li,
  IconPlayBtn,
  IconPauseBtn,
};
