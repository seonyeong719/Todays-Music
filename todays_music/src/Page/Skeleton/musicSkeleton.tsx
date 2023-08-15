import Skeleton from "@mui/material/Skeleton";
import styled from "styled-components";
import { flexAllCenter } from "../../Style/common";

const MusicSkeleton = () => {
  const length = new Array(4).fill(0);
  return (
    <S.Wrapper>
      <Div>
        <Skeleton variant="rectangular" width={"28rem"} height={"28rem"} />
      </Div>
      <S.List>
        {length.map((idx) => (
          <S.Wrap key={idx}>
            <Skeleton animation="wave" variant="rectangular" width={"28rem"} height={"4.8rem"} />
          </S.Wrap>
        ))}
      </S.List>
    </S.Wrapper>
  );
};
export default MusicSkeleton;

const Wrapper = styled.div`
  width: 100%;
  ${flexAllCenter}
  background-color: rgb(132, 132, 132);
  @media ${({ theme }) => theme.device.mobile} {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
  }
`;

const Div = styled.div`
  width: 30%;
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20rem;
  }
`;

const List = styled.div``;

const Wrap = styled.div`
  margin: 30px;
  @media ${({ theme }) => theme.device.mobile} {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem;
  }
`;

const S = {
  Wrapper,
  List,
  Wrap,
};
