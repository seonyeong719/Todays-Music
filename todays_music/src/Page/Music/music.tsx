import styled from "styled-components";
import { flexAllCenter, flexJustifyCenter } from "../../Style/common";
import { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { audioPlay } from "../../Atom/audioPlay.atom";
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
  const [play, setPlay] = useRecoilState(audioPlay);

  // 쿼리로 받아온 데이터지만 암시로 구현을 위해 다 적어줌
  const { data, isLoading }: any = useGetVillageWeather(wth);
  let datas = data?.response.body?.items?.item;

  const sky = datas?.find((e: { category: string }) => e.category === "SKY");
  const pty = datas?.find((e: { category: string }) => e.category === "PTY");

  let weatherImg = WeatherData(sky?.fcstValue, pty?.fcstValue);

  // 날씨 정보와 목데이터를 비교해 알맞은 데이터 찾아줌
  let all = ALL_MUSIC.map((music) => music).find((el) => el.weather === weatherImg?.wthr);
  console.log(all);

  // 재생 버튼
  const start = (idx: string | number) => {
    const audioRef = audioRefs.current.find((item) => item.idx === idx)?.ref;
    console.log(audioRef);
    if (audioRef && audioRef.current) {
      audioRef.current.play();
    }
    setPlay(true);
  };

  // 일시정지 버튼
  const stop = (idx: string | number) => {
    const audioRef = audioRefs.current.find((item) => item.idx === idx)?.ref;
    if (audioRef && audioRef.current) {
      audioRef.current.pause();
    }
    setPlay(false);
  };

  // 클릭 시 타겟팅 해주는 기능
  useEffect(() => {
    // if (!audioRefs.current) return;
    // if (play) {
    //   audioRefs.current.play();
    // } else audioRefs.current.pause();
    audioRefs.current.forEach((item) => {
      const audioRef = item.ref.current;
      if (audioRef) {
        if (play) {
          audioRef.play();
        } else {
          audioRef.pause();
        }
      }
    });
  }, [play]);

  return (
    <S.Wrapper>
      <S.MusicWrapper>
        <S.Title>Today's Music</S.Title>
        <S.MusicContainer>
          <img src="https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/8uEC/image/LkDCPehk0dm5Rz3m19-Y3DIC6u4" />
          <S.MusicList>
            {ALL_MUSIC.map((list, idx: any) => (
              <S.Li key={idx}>
                <div>{/* {list.title} - {list.singer} */}</div>
                {play ? (
                  <S.IconPauseBtn onClick={() => stop(idx)} />
                ) : (
                  <S.IconPlayBtn onClick={() => start(idx)} />
                )}
                {/* <audio ref={(ref) => (audioRefs[idx] = ref)} id={idx} src={list.audio} controls></audio> */}
                <audio
                  ref={(ref) => {
                    if (ref) {
                      audioRefs.current[idx] = { ref, idx };
                    }
                  }}
                  id={idx}
                  // src={list.audio}
                  controls
                />
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
  ${flexAllCenter}
`;

const MusicWrapper = styled.div`
  width: 60%;
  padding-top: 2rem;
  /* background-color: yellow; */
`;

const Title = styled.span`
  font-size: 6rem;
  color: white;
  font-family: "Lobster-Regular.ttf";
  ${flexJustifyCenter}
  /* margin-top: 6rem; */
  padding-bottom: 2rem;
  border-bottom: 1px solid white;
`;

const MusicContainer = styled.div`
  display: flex;
  margin: 70px 50px 0 50px;
  & > img {
    min-width: 25rem;
    max-height: 25rem;
    margin-right: 100px;
  }
`;

const MusicList = styled.div`
  text-align: start;
  width: 100%;
  & > h3 {
    font-size: 40px;
  }
  & > div {
    font-size: 20px;
    margin-top: 5px;
    border-bottom: 1px solid white;
    padding-bottom: 20px;
  }
`;
const Li = styled.div`
  & > div {
    padding: 0.5rem 0;
  }
  & > audio {
    width: 27rem;
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
