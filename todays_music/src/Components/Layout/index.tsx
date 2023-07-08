import { Outlet } from "react-router";
import Header from "./Header/header";

function LayoutIndex() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
export default LayoutIndex;
