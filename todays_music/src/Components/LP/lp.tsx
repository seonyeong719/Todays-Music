import { styled } from "styled-components";

function LP() {
  return (
    <S.Box>
      <S.Img src="https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/8uEC/image/LkDCPehk0dm5Rz3m19-Y3DIC6u4" />
      <S.Lp src="https://cdn.pixabay.com/photo/2019/03/09/02/12/vinyl-record-4043560_1280.png" />
    </S.Box>
  );
}
export default LP;

const Box = styled.div`
  width: 450px;
  height: 350px;
  background-color: white;
  box-shadow: 2px 2px 2px 1px gray;
  position: relative;
  z-index: 1;
`;

const Img = styled.img`
  position: absolute;
  height: 320px;
  top: 15px;
  left: 15px;
  z-index: 20;
  box-shadow: 1px 1px 1px 1px gray;
`;

const Lp = styled.img`
  height: 330px;
  position: absolute;
  z-index: 10;
  top: 10px;
  right: -80px;
  animation: rotate_image 2s linear infinite;
  transform-origin: 50% 50%;
  @keyframes rotate_image {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const S = { Box, Img, Lp };
