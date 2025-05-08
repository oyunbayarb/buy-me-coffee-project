"use client";
import {useState} from "react";
import {ButtonComponent} from "./ButtonComponent";
import {InputComponent} from "./InputComponent";

export const CreateEmailPassword = () => {
  // const [email, setEmail] = useState<string>("");
  // const [password, setPassword] = useState<string>("");

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
          placeholder={"Enter email here"}
          className="w-full"
        ></InputComponent>

        <InputComponent
          inputTitle={"Password"}
          placeholder={"Enter password here"}
          className="w-full"
        ></InputComponent>

        <ButtonComponent
          buttonText={"Continue"}
          className="w-full"
        ></ButtonComponent>
      </div>
    </div>
  );
};
