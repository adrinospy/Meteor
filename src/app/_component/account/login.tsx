"use client";

import { IoEyeOff, IoEye } from "react-icons/io5";
import React, { useCallback, useState } from "react";
import axios from "axios";
import useLogin from "../../../store/store";
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const [showPassword, handleShowPassword] = useState(false);
  const [invalidCredentials, setCredentials] = useState(false);
  const loginUser = useLogin((state) => state.loginUser);
  const router = useRouter();
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    axios.post("http://localhost:8080/auth/login", userData).then(
      () => {
        loginUser();
        router.push('/')
      }
    ).catch((error) => {
      if (error.message === "Request failed with status code 400") {
        setCredentials(true)
      }
      setTimeout(() => {
        setCredentials(false);
      }, 4000);
    })
  },[loginUser, router, userData])

  return (
    <form onSubmit={handleSubmit} className="w-[400px] h-[500px] grid content-between">
      <div>
        <div className="absolute text-6xl text-[#34374d] flex flex-col justify-center">
          Welcome Back!
          <span className="text-xl mt-4">Please Log in to you account.</span>
        </div>
      </div>
      <div>

        <p className={`top-[-20px] ml-[10px] text-[16px] text-[#ff6468] z-10 ${invalidCredentials ? 'visible animate-shake animate-thrice animate-duration-200 animate-ease-linear' : 'hidden'}`}>Invalid Credentials!</p>
        <div className="relative my-[10px]">
          <input className="block px-2.5 pb-2.5 pt-4 w-full text-xl text-gray-500 rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
            placeholder=" "
            type="email"
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            required />
          <label className="absolute pointer-events-none text-xl text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
            Email Address
          </label>
        </div>
        <div className="relative my-[10px] flex">
          <input className="block px-2.5 pb-2.5 pt-4 w-full text-xl text-gray-500 rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
            placeholder=" "
            type={showPassword ? 'text' : 'password'}
            value={userData.password}
            minLength={8}
            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
            required />
          <label className="absolute pointer-events-none text-xl text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Password:</label>
          <button type="button" className="mr-[45px]" onClick={() => { handleShowPassword(!showPassword) }}>
            {showPassword ? <IoEye style={{ height: '20px', width: "20px" }} fill={'#6b7280'} /> : <IoEyeOff style={{ height: '20px', width: "20px" }} fill={'#6b7280'} />}
          </button>
          <label className="absolute pointer-events-none text-xl text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Password:</label>
        </div>
        <div className="my-6 flex flex-row align-middle justify-between">
          <div className="flex items-center mb-4 ml-3">
            <input type="checkbox" value="" className="w-4 h-4 border-r-4 bg-gray-100 border-gray-300 rounded focus:ring-2" />
            <label className="ms-2 text-sm font-medium text-gray-500">Remember me</label>
          </div>
          <label className="text-[#ff6468] mr-[45px]">Forgot Password?</label>

          <button
            className="w-[150px] text-white bg-[#6534d9] hover:bg-[#3f3f3c] focus:outline-none focus:ring-4 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"
          >Login
          </button>
        </div>
      </div>
    </form>