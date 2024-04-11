import { Colors } from "../../../common/color";
import { MdMenu } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";
import { MdAssuredWorkload } from "react-icons/md";
import { BiCommentDetail } from "react-icons/bi";
import { SiConvertio } from "react-icons/si";

export const SideMenu = () => {
  const menuData = [
    {
      key: "HOME",
      route_path: "/home",
      display_name: "Thông tin khách hàng",
      display_icon: <FaUser />,
    },
    {
      key: "surplus",
      route_path: "/surplus",
      display_name: "Số dư",
      display_icon: <MdAssuredWorkload />,
    },
    {
      key: "loan_details",
      route_path: "/loan_details",
      display_name: "Chi tiết khoản vay",
      display_icon: <BiCommentDetail />,
    },
    {
      key: "conversion_data",
      route_path: "/conversion_data",
      display_name: "Dữ liệu chuyển đổi",
      display_icon: <SiConvertio />,
    },
  ];
  const { collapseSidebar } = useProSidebar();
  const location = useLocation();

  return (
    <Sidebar
      style={{ overflowY: "auto", height: "100%" }}
      backgroundColor={Colors.primary}>
      <Menu
        menuItemStyles={{
          button: ({ active }) => {
            return {
              backgroundColor: active ? Colors.primaryDark : undefined,
              "&:hover": {
                backgroundColor: Colors.primaryDark,
              },
            };
          },
          icon: { color: Colors.white, fontSize: 16 },
          label: { fontSize: 14, color: Colors.white, fontWeight: "bold" },
        }}>
        <MenuItem
          icon={<MdMenu></MdMenu>}
          component={
            <div
              onClick={() => {
                collapseSidebar();
              }}></div>
          }>
          K
        </MenuItem>
        {menuData.map((menuItem) => {
          return (
            <MenuItem
              active={location.pathname.includes(menuItem.route_path)}
              icon={menuItem.display_icon}
              component={<Link to={menuItem.route_path} />}
              key={menuItem.key}>
              {`${menuItem.display_name}`}
            </MenuItem>
          );
        })}
      </Menu>
    </Sidebar>
  );
};
