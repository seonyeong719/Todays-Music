import { Outlet } from "react-router-dom";
import Header from "./Header/header";
import styled from "styled-components";

function LayoutIndex() {
  return (
    <Div>
      <Header />
      <Outlet />
    </Div>
  );
}
export default LayoutIndex;

const Div = styled.div`
  width: 100%;
  background-color: pink;
  box-shadow: 0 5px 10px -5px "black";
`;
