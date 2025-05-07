"use client";

import {useState} from "react";
import {CreateEmailPassword} from "./CreateEmailPassword";
import {CreateUserName} from "./CreateUserName";

export const SignUpPage = () => {
  const [step, setStep] = useState<number>(0);
  if (step === 0) {
    return <CreateUserName setStep={setStep} />;
  } else {
    return <CreateEmailPassword />;
  }
};
