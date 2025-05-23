"use client";

import {useRef, useState} from "react";
import axios from "axios";
import {ButtonComponent} from "./ButtonComponent";
import {InputComponent} from "./inputComponent";

export const CreateEmailPassword = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleOnClick = () => {
    const res = axios.post("http://localhost:8000/SignUpPage", {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
    console.log(res, "response");
  };

  return (
    <div className="flex w-full h-full flex-col p-10 gap-[370px] items-center relative">
      <ButtonComponent
        buttonText={"Log in"}
        className="absolute"
      ></ButtonComponent>
      <div className="w-[359px] h-fit flex gap-5 flex-col">
        <div>
          <p className="font-bold text-[24px]">Welcome, UserName</p>
          <p className="text-[#71717A] text-[14px]">
            Connect email and set a password
          </p>
        </div>
        <InputComponent
          inputTitle={"Email"}
          ref={emailRef}
          placeholder={"Enter email here"}
          className="w-full"
        ></InputComponent>

        <InputComponent
          inputTitle={"Password"}
          ref={passwordRef}
          placeholder={"Enter password here"}
          className="w-full"
        ></InputComponent>

        <ButtonComponent
          buttonText={"Continue"}
          className="w-full"
          onClick={() => {
            handleOnClick;
          }}
        ></ButtonComponent>
      </div>
    </div>
  );
};
