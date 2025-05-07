"use client";
import {InputComponent} from "./InputComponent";
import {ButtonComponent} from "./ButtonComponent";
import {Dispatch, SetStateAction, useState} from "react";

export const CreateUserName = ({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<number>>;
}) => {
  const [userName, setUserName] = useState<string>("");
  const [error, setError] = useState<string>("g");
  const [step1, setStep1] = useState(0);

  // const existingUser = localStorage.getItem("user");

  const handleSubmitUserName = (setStep: Dispatch<SetStateAction<number>>) => {
    if (userName.length < 5) {
      console.log("working error");
      setError("Username must be at least 5 characters.");
      // } else if (existingUser === userName) {
      setError("Username already taken");
    } else {
      setError("");
      setStep(step1 + 1);
    }
  };
  console.log("working", userName);

  return (
    <div className="flex w-full h-full flex-col p-10 gap-[370px] items-center relative">
      <ButtonComponent
        buttonText={"Log in"}
        className="absolute top-8 right-20"
      ></ButtonComponent>
      <div className="w-[359px] h-fit flex gap-5 flex-col">
        <div>
          <p className="font-bold text-[24px]">Create your account</p>
          <p className="text-[#71717A] text-[14px]">
            Choose a username for your page
          </p>
        </div>
        <InputComponent
          inputTitle={"Username"}
          placeholder={"Enter username here"}
          className="w-full"
          setChange={setUserName}
          error={error}
        ></InputComponent>

        <ButtonComponent
          buttonText={"Continue"}
          className="w-full"
          onClick={() => {
            handleSubmitUserName(setStep);
          }}
        ></ButtonComponent>
      </div>
    </div>
  );
};
