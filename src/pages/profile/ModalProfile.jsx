import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { putUserInfo } from "../../store/nguoiDung/nguoiDungReducer";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const ModalProfile = (props) => {
  const { modalIsOpen, afterOpenModal, closeModal, customStyles, userInfo } =
    props;
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(props);
  const checkGender = (data) => {
    if (data.gender === "true") {
      return (data.gender = true);
    } else if (data.gender === "false") {
      return (data.gender = false);
    }
  };

  const onSubmitModal = (data) => {
    checkGender(data);
    console.log("propsModal", data);
    dispatch(
      putUserInfo({
        id: userInfo?.id || "",
        name: data.name || "",
        email: userInfo?.email || "",
        phone: data.phone || "",
        birthday: data.birthday || "",
        gender: data.gender || Boolean,
        role: userInfo?.role || "",
        skill: [data.skill] || "",
        certification: [data.certification] || "",
      })
    );

    document.getElementById("alert-success").innerHTML = "Thay đổi thành công";
  };

  console.log(userInfo);
  return (
    <Container>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <form onSubmit={handleSubmit(onSubmitModal)}>
          <textarea {...register("name")}></textarea>
          <button>click</button>
        </form> */}
        <form onSubmit={handleSubmit(onSubmitModal)}>
          <div className="flex justify-center relative">
            <svg
              className="absolute left-0"
              width="89"
              height="27"
              viewBox="0 0 89 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#404145">
                <path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path>
              </g>
              <g fill="#1dbf73">
                <path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path>
              </g>
            </svg>
            <div className="text-2xl font-bold text-center mb-5 text-green-500">
              Edit Profile
            </div>
            <button
              onClick={closeModal}
              className="absolute right-0 bg-green-500 py-2 px-4 text-white text-base font-semibold rounded-md"
            >
              X
            </button>
          </div>
          <div className="mb-3">
            <div className="text-lg font-semibold">Name</div>
            <input
              className="w-full border rounded-md p-2"
              placeholder="Name"
              {...register("name", {
                minLength: {
                  value: 6,
                  message:
                    "Make sure it's at least 32 characters OR at least 6 characters.",
                },
                maxLength: {
                  value: 32,
                  message:
                    "Make sure it's at least 32 characters OR at least 6 characters.",
                },
                pattern: {
                  value:
                    /^[a-zA-Z\u00C0-\u017F]+(?:\s[a-zA-Z\u00C0-\u017F]+)*$/,
                  message:
                    "Please only use alphabetical characters and spaces in name",
                },
              })}
            />
            <p className="text-red-600 error">{errors.name?.message}</p>
          </div>
          <div className="mb-3">
            <div className="text-lg font-semibold">Birthday</div>
            <input
              className="w-full border rounded-md p-2"
              placeholder="Birthday"
              {...register("birthday", {
                pattern: {
                  value:
                    /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
                  message: "Please input dd-mm-yyyy",
                },
              })}
            />
            <p className="text-red-600 error">{errors.birthday?.message}</p>
          </div>
          <div className="mb-3">
            <div className="text-lg font-semibold">Phone</div>
            <input
              className="w-full border rounded-md p-2"
              placeholder="Phone"
              {...register("phone", {
                minLength: {
                  value: 10,
                  message:
                    "Make sure it's at least 11 numbers OR at least 10 numbers.",
                },
                maxLength: {
                  value: 11,
                  message:
                    "Make sure it's at least 11 numbers OR at least 10 numbers.",
                },
                pattern: {
                  value: /^[0-9\b]+$/,
                  message: "Please input numeric characters only.",
                },
              })}
            />
            <p className="text-red-600 error">{errors.phone?.message}</p>
          </div>
          <div className=" w-full mb-3">
            <div className="w-full text-lg font-semibold mb-1">Gender</div>
            <div className="flex w-full items-center">
              <div>Male</div>
              <input
                type="radio"
                value={true}
                className="ml-1 mr-4 mt-1"
                {...register("gender")}
              />
              <div>Female</div>
              <input
                type="radio"
                value={false}
                className="mx-1 mt-1"
                {...register("gender")}
              />
            </div>
          </div>
          <div
            id="alert-success"
            className="text-center text-red-600 font-semibold text-lg"
          ></div>
          <div className="mt-3 text-center">
            <button className="bg-green-500 rounded-md text-lg text-white font-semibold px-5 py-2">
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </Container>
  );
};

export default ModalProfile;

const Container = styled.div`
  .error {
    &:empty {
      display: none;
    }
  }
`;
