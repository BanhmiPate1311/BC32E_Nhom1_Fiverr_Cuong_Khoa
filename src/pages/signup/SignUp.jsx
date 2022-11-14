import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { signUp } from "../../store/auth/authReducer";
import "./SignUp.css";
import styled from "styled-components";
import {
  CheckCircleOutlined,
  PropertySafetyOutlined,
  TeamOutlined,
  RocketOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  return (
    <div className="conatiner flex">
      <div className="w-2/4 bg-[#F1FDF7]">
        <div className="px-10 py-5 animate__animated animate__bounce animate__fadeInLeft">
          <h1 className="text-4xl font-bold mb-10">
            A whole world of freelance talent at your fingertips
          </h1>
          <div>
            <div className="mb-5">
              <div className="text-xl font-semibold flex items-center">
                <span className="w-[20px] h-[35px]">
                  <CheckCircleOutlined />
                </span>
                <h3 className="mb-0 ml-2">The best for every budget</h3>
              </div>
              <span className="text-lg text-zinc-700">
                Find high-quality services at every price point. No hourly
                rates, just project-based pricing.
              </span>
            </div>
            <div className="mb-5">
              <div className="text-xl font-semibold flex items-center">
                <span className="w-[20px] h-[35px]">
                  <RocketOutlined />
                </span>
                <h3 className="mb-0 ml-2">Quality work done quickly</h3>
              </div>
              <span className="text-lg text-zinc-700">
                Find the right freelancer to begin working on your project
                within minutes.
              </span>
            </div>
            <div className="mb-5">
              <div className="text-xl font-semibold flex items-center">
                <span className="w-[20px] h-[35px]">
                  <PropertySafetyOutlined />
                </span>
                <h3 className="mb-0 ml-2"> Protected payments, every time</h3>
              </div>
              <span className="text-lg text-zinc-700">
                Always know what you'll pay upfront. Your payment isn't released
                until you approve the work.
              </span>
            </div>
            <div className="mb-5">
              <div className="text-xl font-semibold flex items-center">
                <span className="w-[20px] h-[35px]">
                  <TeamOutlined />
                </span>
                <h3 className="mb-0 ml-2">24/7 support</h3>
              </div>
              <span className="text-lg text-zinc-700">
                Questions? Our round-the-clock support team is available to help
                anytime, anywhere.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-2/4 p-5">
        <Form
          className="form-signup justify-center"
          onSubmit={handleSubmit((data) => {
            console.log("data: ", data);
            dispatch(signUp(data));
          })}
        >
          <div className="border-b w-full text-center pt-2 mx-24">
            <span className="text-3xl font-bold mb-3 signin">Đăng ký</span>
          </div>
          <div className="w-full p-3">
            <span className="text-lg font-semibold">Tài khoản</span>
            <input
              className="w-full p-3 border border-indigo-600"
              type="text"
              placeholder="Tài khoản"
              {...register("name")}
            />
          </div>
          <div className="w-full p-3">
            <span className="text-lg font-semibold">Mật khẩu</span>
            <input
              className="w-full p-3 border border-indigo-600"
              type="password"
              placeholder="Mật khẩu"
              {...register("password")}
            />
          </div>
          <div className="w-full p-3">
            <span className="text-lg font-semibold">Nhập lại mật khẩu</span>
            <input
              className="w-full p-3 border border-indigo-600"
              type="repassword"
              placeholder="Nhập lại mật khẩu"
              {...register("password")}
            />
          </div>
          <div className="w-full p-3">
            <span className="text-lg font-semibold">Email</span>
            <input
              className="w-full p-3 border border-indigo-600"
              type="email"
              placeholder="Email"
              {...register("email")}
            />
          </div>
          <div className="w-full p-3">
            <span className="text-lg font-semibold">Số điện thoại</span>
            <input
              className="w-full p-3 border border-indigo-600"
              type="text"
              placeholder="Số điện thoại"
              {...register("phone")}
            />
          </div>
          <div className="w-full p-3">
            <button className="btn-signup w-full h-[40px]" type="submit">
              <span className="text-white text-xl font-semibold">Đăng ký</span>
            </button>
          </div>
          <div className="text-center flex flex-wrap mb-2">
            <div className="w-full">
              <span className="text-black-500">
                Đã có tài khoản?
                <Link
                  to="/dangnhap"
                  className="cursor-pointer underline text-green-600 ml-2"
                >
                  Đăng nhập
                </Link>
              </span>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 70%;
  height: 680px;
  background-color: white;
  border-radius: 18px;
  box-shadow: rgba(60, 66, 87, 0.12) 0px 7px 14px 0px,
    rgba(0, 0, 0, 0.12) 0px 3px 6px 0px;
`;
