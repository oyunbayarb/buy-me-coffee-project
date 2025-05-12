"use client";

import {useState} from "react";
import {CreateEmailPassword, CreateUserName} from "./component";

export const SignUpPage = () => {
  const [step, setStep] = useState<number>(0);
  if (step === 0) {
    return <CreateUserName setStep={setStep} />;
  } else {
    return <CreateEmailPassword />;
  }
};
