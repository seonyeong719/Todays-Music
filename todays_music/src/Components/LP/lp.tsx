import { styled } from "styled-components";

function LP() {
  return (
    <S.Box>
      <S.Img src="https://cdnimg.melon.co.kr/cm/album/images/022/93/703/2293703_500.jpg/melon/resize/282/quality/80/optimize" />
      <S.Lp src="https://cdn.pixabay.com/photo/2019/03/09/02/12/vinyl-record-4043560_1280.png" />
    </S.Box>
  );
}
export default LP;

const Box = styled.div`
  width: 32rem;
  height: 24rem;
  background-color: beige;
  border-radius: 0.6rem;
  box-shadow: 2px 2px 2px 1px gray;
  position: relative;
  z-index: 10;
`;

const Img = styled.img`
  position: absolute;
  height: 22rem;
  top: 1rem;
  left: 1rem;
  z-index: 20;
  box-shadow: 1px 1px 1px 1px gray;
`;

const Lp = styled.img`
  height: 22.5rem;
  position: absolute;
  z-index: 10;
  top: 0.8rem;
  right: -5.5rem;
  animation: rotate_image 2s linear infinite;
  transform-origin: 50% 50%;
  @keyframes rotate_image {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const S = { Box, Img, Lp };
