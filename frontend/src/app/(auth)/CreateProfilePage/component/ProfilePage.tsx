"use client";

import {useState} from "react";
import {CreateProfilePage} from "./CreateProfilePage";
import {CreatePaymentPage} from "./CreatePaymentPage";

export const ProfilePage = () => {
  const [step, setStep] = useState(true);
  return (
    <>
      {step ? <CreateProfilePage setStep={setStep} /> : <CreatePaymentPage />}
    </>
  );
};
