import { Colors } from "../../../common/color";
import { SideMenu } from "../../pages/menu/SideMenu";
import { Navigate, Outlet } from "react-router-dom";

const RootLayout = () => {
  const auth = true;
  if (auth) {
    return (
      <div
        className={"main-app"}
        style={{
          flexDirection: "row",
          display: "flex",
          flex: 1,
          height: "100vh",
        }}>
        <SideMenu></SideMenu>
        <div
          id={"main-view"}
          style={{
            height: "100vh",
            flex: 1,
            overflow: "auto",
          }}>
          <div style={{ padding: "24px" }}>
            <Outlet />
          </div>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/login" />;
  }
};

export default RootLayout;
