import React, { useEffect, useState, useRef } from "react";
import Avatar from "react-avatar";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { logOut } from "../../store/auth/authReducer";
import { ContactsTwoTone } from "@ant-design/icons";
import "./admin.css";
import { getUserPageSearch } from "../../store/nguoiDung/nguoiDungReducer";
import { Menu, Layout } from "antd";

function getItem(label, key, children) {
  return {
    key,
    children,
    label,
  };
}

const Admin = () => {
  const [togglePopover, setTogglePopover] = useState(false);
  const { userLogIn } = useSelector((state) => state.authReducer);
  console.log("userLogIn: ", userLogIn);
  const { listUserPageSearch } = useSelector((state) => state.nguoiDungReducer);
  console.log("listUserPageSearch: ", listUserPageSearch);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogOut = () => {
    dispatch(logOut());
    navigate("/");
  };

  useEffect(() => {
    dispatch(getUserPageSearch());
  }, []);

  const { Content, Footer, Sider } = Layout;

  // Table
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  return (
    <div className="container w-full h-full">
      {userLogIn?.user?.role === "ADMIN" ? (
        <div className="w-full">
          <Layout>
            <Sider
              breakpoint="lg"
              collapsedWidth="0"
              onBreakpoint={(broken) => {
                console.log(broken);
              }}
              onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
              }}
            >
              <div className="logo" />
              <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={["4"]}
                items={[
                  getItem(
                    <NavLink to="/admin/user">Quản lý người dùng</NavLink>
                  ),
                  getItem(
                    <NavLink to="/admin/work">Quản lý công việc</NavLink>
                  ),
                  getItem(
                    <NavLink to="/admin/worktype">
                      Quản lý loại công việc
                    </NavLink>
                  ),
                ]}
              />
            </Sider>
            <Layout>
              <Content style={{ margin: "24px 16px 0" }}>
                <div className="mr-5 mb-3">
                  <div className="flex justify-end">
                    <div
                      className="relative"
                      onClick={() => {
                        setTogglePopover(!togglePopover);
                      }}
                    >
                      <Avatar
                        className="cursor-pointer"
                        size="40"
                        name={userLogIn?.user?.name}
                        src={userLogIn?.user?.avatar}
                        round
                      />
                      {togglePopover ? (
                        <div className="nav-popover-avatar py-3 px-5 h-[150px] bg-white border rounded-md absolute right-[-7px] z-10 top-[50px] flex flex-wrap">
                          <div className="absolute top-[-15px] right-[16px]">
                            <ContactsTwoTone className="text-xl" />
                          </div>
                          <NavLink
                            to={`/profile/${userLogIn?.user?.id}`}
                            className="text-md text-zinc-400 font-medium w-full border-b"
                          >
                            Profile
                          </NavLink>
                          {userLogIn?.user?.role === "ADMIN" ? (
                            <NavLink
                              to="/admin"
                              className="text-md text-zinc-400 font-medium w-full border-b mt-2"
                            >
                              Admin
                            </NavLink>
                          ) : (
                            <div></div>
                          )}
                          <div
                            className="text-md text-zinc-400 font-medium w-full cursor-pointer hover:text-[#40a9ff] mt-2"
                            onClick={userLogOut}
                          >
                            Logout
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
                {/* Table */}
                <div>
                  <Outlet />
                </div>
              </Content>
              <Footer style={{ textAlign: "center" }}></Footer>
            </Layout>
          </Layout>
        </div>
      ) : (
        navigate("/")
      )}
    </div>
  );
};

export default Admin;
