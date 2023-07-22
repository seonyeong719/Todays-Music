import styled from "styled-components";
import { flexAllCenter, flexJustifyCenter } from "../../Style/common";
import { CLOUDY_MUSIC, RAINY_MUSIC, SNOW_MUSIC } from "../../Consts/musicList";

function Music() {
  return (
    <S.Wrapper>
      <S.MusicWrapper>
        <S.Title>Today's Music</S.Title>
        <S.MusicContainer>
          <img src="https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/8uEC/image/LkDCPehk0dm5Rz3m19-Y3DIC6u4" />
          <S.MusicList>
            {SNOW_MUSIC.map((list) => (
              <S.Li>
                <div>
                  {list.title} - {list.singer}
                </div>
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
  background: linear-gradient(#d1c0a8, #e8ded1, #fafdf3);
  width: 100%;
  height: 100vh;
  ${flexAllCenter}
`;

const MusicWrapper = styled.div`
  width: 60%;
  padding-top: 2rem;
`;

const Title = styled.span`
  font-size: 6rem;
  color: white;
  font-family: "Lobster-Regular.ttf";
  ${flexJustifyCenter}
  margin-top: 6rem;
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
const S = {
  Wrapper,
  MusicWrapper,
  Title,
  MusicContainer,
  MusicList,
  Li,
};
