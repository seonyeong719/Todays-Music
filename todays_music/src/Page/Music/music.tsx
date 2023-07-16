import styled from "styled-components";
import { flexAllCenter } from "../../Style/common";

function Music() {
  const musicList = [
    {
      title: "Like Someone In Love",
      singer: "park",
      time: "00:36",
      img: "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/042/902/976/42902976_1405667580045_1_600x600.JPG/dims/resize/Q_80,0",
      audio: "/assets/audio/test.mp3",
    },
    {
      title: "Butter",
      singer: "BTS",
      time: "00:36",
      img: "https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/8uEC/image/LkDCPehk0dm5Rz3m19-Y3DIC6u4",
      audio: "/assets/audio/test.mp3",
    },
    {
      title: "You Cant Hide Away From Love",
      singer: "Jamie Cullum",
      time: "00:36",
      img: "https://cdn.muztext.com/i/32847573405913925347.jpg",
      audio: "/assets/audio/test.mp3",
    },
  ];

  return (
    <S.Wrapper>
      <S.MusicWrapper>
        <S.Title>오늘의 음악</S.Title>
        <S.MusicContainer>
          <img src="https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/8uEC/image/LkDCPehk0dm5Rz3m19-Y3DIC6u4" />
          <S.MusicList>
            <h3>노래제목</h3>
            <div>가수명</div>
            {musicList.map((list) => (
              <S.Li>
                <div>{list.title}</div>
                <audio src={list.audio} controls></audio>
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
  background: linear-gradient(#d1c0a8, #e8ded1); // #fafdf3
  width: 100%;
  height: 100vh;
  ${flexAllCenter}
`;
const MusicWrapper = styled.div`
  width: 60%;
  & > h1 {
    font-size: 100px;
    color: white;
    border-bottom: 1px solid white;
    padding-bottom: 30px;
  }
`;

const Title = styled.span`
  font-size: 30px;
  color: white;
`;
const MusicContainer = styled.div`
  display: flex;
  margin: 70px 50px 0 50px;
  & > img {
    width: 35%;
    margin-right: 100px;
  }
`;
const MusicList = styled.div`
  text-align: start;
  color: white;
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
  &:hover {
    color: red;
  }
`;
const S = {
  Wrapper,
  MusicWrapper,
  Title,
  MusicContainer,
  MusicList,
  Li,
};
