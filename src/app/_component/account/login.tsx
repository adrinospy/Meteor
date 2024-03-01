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
  }, [loginUser, router, userData])

  return (
    <form onSubmit={handleSubmit} className="w-[400px] h-[500px] grid content-between">
      <div>
        <div className="absolute text-6xl text-[#34374d] flex flex-col justify-center">
          </div>
        </div>
    </form>