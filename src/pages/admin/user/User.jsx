import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DeleteTwoTone, EditTwoTone, SearchOutlined } from "@ant-design/icons";
import {
  deleteUser,
  getUserPageSearch,
} from "../../../store/nguoiDung/nguoiDungReducer";
import { Table, Button, Input, Space, Layout } from "antd";
import Highlighter from "react-highlight-words";
import Swal from "sweetalert2";

const User = () => {
  const { userLogIn } = useSelector((state) => state.authReducer);
  console.log("userLogIn: ", userLogIn);
  const { listUserPageSearch } = useSelector((state) => state.nguoiDungReducer);
  console.log("listUserPageSearch: ", listUserPageSearch);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserPageSearch());
  }, []);

  const data = [];
  listUserPageSearch?.data.map((item, i) => {
    data.push({
      id: item.id,
      name: item.name,
      birthday: item.birthday,
      email: item.email,
      phone: item.phone,
      role: item.role,
    });
  });
  console.log(data);

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
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: "5%",
      ...getColumnSearchProps("id"),
      sorter: (a, b) => a.id - b.id,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "20%",
      ...getColumnSearchProps("name"),
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Birthday",
      dataIndex: "birthday",
      key: "birthday",
      width: "15%",
      ...getColumnSearchProps("birthday"),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      with: "25%",
      ...getColumnSearchProps("email"),
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      width: "15%",
      ...getColumnSearchProps("phone"),
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      width: "10%",
      ...getColumnSearchProps("role"),
    },
    {
      title: "Edit",
      with: "25%",
      dataIndex: "edit",
      key: "edit",
      render: (_, record) => (
        <Space size="middle">
          <a>
            <EditTwoTone
              onClick={() => {
                console.log("hello");
              }}
            ></EditTwoTone>
          </a>
          <a>
            <DeleteTwoTone
              twoToneColor="#ee1d40"
              onClick={() => {
                Swal.fire({
                  title: "Are you sure?",
                  text: "You won't be able to revert this!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!",
                }).then((result) => {
                  if (result.isConfirmed) {
                    dispatch(deleteUser(record.id));
                  }
                });
              }}
            ></DeleteTwoTone>
          </a>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default User;
