import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logOut } from "../../store/auth/authReducer";
import { ContactsTwoTone } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import "./admin.css";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { getUserPageSearch } from "../../store/nguoiDung/nguoiDungReducer";
import { Form, Input, InputNumber, Popconfirm, Table, Typography } from "antd";
import { useForm } from "react-hook-form";

const originData = [];
console.log("originData: ", originData);
const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === "number" ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const { Search } = Input;

const Admin = () => {
  const [togglePopover, setTogglePopover] = useState(false);
  const { userLogIn } = useSelector((state) => state.authReducer);
  console.log("userLogIn: ", userLogIn);
  const { register, handleSubmit } = useForm();
  const { listUserPageSearch } = useSelector((state) => state.nguoiDungReducer);
  console.log("listUserPageSearch: ", listUserPageSearch);
  const [collapsed, setCollapsed] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogOut = () => {
    dispatch(logOut());
    navigate("/");
  };

  useEffect(() => {
    dispatch(getUserPageSearch());
  }, []);

  useEffect(() => {
    listUserPageSearch?.data.map((user, i) => {
      originData.push({
        key: i.toString(),
        name: `${user.name}`,
        birthday: `${user.birthday}`,
        email: `${user.email}`,
        phone: `${user.phone}`,
        role: `${user.role}`,
      });
    });
  }, []);

  const { Content, Footer, Sider } = Layout;

  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState("");
  const isEditing = (record) => record.key === editingKey;
  const edit = (record) => {
    form.setFieldsValue({
      name: "",
      birthday: "",
      email: "",
      phone: "",
      role: Boolean,
      ...record,
    });
    setEditingKey(record.key);
  };
  const cancel = () => {
    setEditingKey("");
  };
  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      width: "25%",
      editable: true,
    },
    {
      title: "Birthday",
      dataIndex: "birthday",
      width: "25%",
      editable: true,
    },
    {
      title: "Email",
      dataIndex: "email",
      width: "25%",
      editable: true,
    },
    {
      title: "Phone",
      dataIndex: "phone",
      width: "30%",
      editable: true,
    },
    {
      title: "Role",
      dataIndex: "role",
      width: "10%",
      editable: true,
    },
    {
      title: "operation",
      dataIndex: "operation",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== ""}
            onClick={() => edit(record)}
          >
            Edit
          </Typography.Link>
        );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === "age" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <div className="container w-full h-full">
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
              UserOutlined,
              VideoCameraOutlined,
              UploadOutlined,
              UserOutlined,
            ].map((icon, index) => ({
              key: String(index + 1),
              icon: React.createElement(icon),
              label: `nav ${index + 1}`,
            }))}
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
                      <NavLink
                        to="/admin"
                        className="text-md text-zinc-400 font-medium w-full border-b mt-2"
                      >
                        Admin
                      </NavLink>
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
            <Search
              className="mb-2"
              placeholder="input search text"
              enterButton="Search"
              size="large"
              loading
              {...register("search")}
              onSubmit={handleSubmit((data) => {
                console.log("s", data);
              })}
            />
            <Form form={form} component={false}>
              <Table
                components={{
                  body: {
                    cell: EditableCell,
                  },
                }}
                bordered
                dataSource={data}
                columns={mergedColumns}
                rowClassName="editable-row"
                pagination={{
                  onChange: cancel,
                }}
              />
            </Form>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default Admin;
