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
  className,
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
        className={error!.length > 0 ? "border-red-400" : ""}
        type={type}
      ></Input>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};
