import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteTwoTone, EditTwoTone, SearchOutlined } from "@ant-design/icons";
import {
  deleteUser,
  getUserPageSearch,
} from "../../../../store/nguoiDung/nguoiDungReducer";
import { Table, Button, Input, Space } from "antd";
import Highlighter from "react-highlight-words";
import Swal from "sweetalert2";
import {
  delHiredWork,
  getServicesSearch,
} from "../../../../store/thueCongViec/thueCongViec";
import {
  deleteComment,
  getCommentsSearch,
} from "../../../../store/quanLyBinhLuan/quanLyBinhLuanReducer";
import { useQuanLyBinhLuan } from "../../../../store/quanLyBinhLuan/quanLyBinhLuanSelector";

const Comments = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const { listCommentsSearch } = useQuanLyBinhLuan();
  console.log("listCommentsSearch: ", listCommentsSearch);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCommentsSearch());
  }, []);
  const data = [];
  listCommentsSearch?.map((item, i) => {
    data.push({
      id: <p key={i}>{item.id}</p>,
      maCongViec: item.maCongViec,
      maNguoiBinhLuan: item.maNguoiBinhLuan,
      ngayBinhLuan: item.ngayBinhLuan,
      noiDung: item.noiDung,
      saoBinhLuan: item.saoBinhLuan,
    });
  });

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
      title: "ID Job",
      dataIndex: "maCongViec",
      key: "maCongViec",
      width: "15%",
      ...getColumnSearchProps("maCongViec"),
      sorter: (a, b) => a.maCongViec - b.maCongViec,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "ID User Cmt",
      dataIndex: "maNguoiBinhLuan",
      key: "maNguoiBinhLuan",
      width: "15%",
      ...getColumnSearchProps("maNguoiBinhLuan"),
      sorter: (a, b) => a.maNguoiBinhLuan - b.maNguoiBinhLuan,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Date Cmt",
      dataIndex: "ngayBinhLuan",
      key: "ngayBinhLuan",
      with: "25%",
      ...getColumnSearchProps("ngayBinhLuan"),
    },
    {
      title: "Content Cmt",
      dataIndex: "noiDung",
      key: "noiDung",
      width: "30%",
      ...getColumnSearchProps("noiDung"),
    },
    {
      title: "Rate Cmt",
      dataIndex: "saoBinhLuan",
      key: "saoBinhLuan",
      width: "5%",
      ...getColumnSearchProps("saoBinhLuan"),
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
                    dispatch(deleteComment(record.id));
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

export default Comments;
