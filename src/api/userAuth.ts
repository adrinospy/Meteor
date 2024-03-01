import axios from "axios";
import useStore from "../store/store";
import React from "react";

export function signUp(data: {
  userName: string;
  email: string;
  password: string;
}) {
  axios
    .post("http://localhost:8080/auth/register", data)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
}

export async function logIn(data: { email: string; password: string }) {
  const res = await axios.post("http://localhost:8080/auth/login", data);
  return res;
}
