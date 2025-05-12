import React, {ChangeEvent} from "react";
import {Input} from "@/components/ui/input";

type FormInputProps = {
  inputTitle: string;
  type?: string;
  placeholder: string;
  error?: string | null;
  className: string;
  setChange: (_value: string) => void;
};

export const InputComponent = ({
  inputTitle,
  type,
  placeholder,
  error,
  setChange,
}: FormInputProps) => {
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChange(event.target.value);
  };
  return (
    <div>
      <p>{inputTitle}</p>
      <Input
        onChange={handleOnChange}
        placeholder={placeholder}
        className={error ? "border-red-400" : ""}
        type={type}
      ></Input>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};
