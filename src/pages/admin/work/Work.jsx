import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteTwoTone, EditTwoTone, SearchOutlined } from "@ant-design/icons";
import { deleteUser } from "../../../store/nguoiDung/nguoiDungReducer";
import { Table, Button, Input, Space, Layout } from "antd";
import Highlighter from "react-highlight-words";
import Swal from "sweetalert2";
import {
  deleteWork,
  getAllWork,
} from "../../../store/congViec/congViecReducer";

const Work = () => {
  const { allWork } = useSelector((state) => state.congViecReducer);
  console.log("AllWork: ", allWork);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllWork());
  }, []);
  const data = [];
  allWork.map((value, i) => {
    data.push({
      id: value.id,
      hinhAnh: <img src={value.hinhAnh} alt="" />,
      tenCongViec: value.tenCongViec,
      danhGia: value.danhGia,
      giaTien: value.giaTien,
    });
  });

  console.log(data);

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
      title: "Picture",
      dataIndex: "hinhAnh",
      key: "hinhAnh",
      width: "10%",
    },
    {
      title: "Work",
      dataIndex: "tenCongViec",
      key: "tenCongViec",
      width: "25%",
      ...getColumnSearchProps("tenCongViec"),
    },
    {
      title: "Rate",
      dataIndex: "danhGia",
      key: "danhGia",
      with: "25%",
      ...getColumnSearchProps("danhGia"),
    },
    {
      title: "Price",
      dataIndex: "giaTien",
      key: "giaTien",
      width: "15%",
      ...getColumnSearchProps("giaTien"),
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
                    dispatch(deleteWork(record.id));
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

export default Work;
