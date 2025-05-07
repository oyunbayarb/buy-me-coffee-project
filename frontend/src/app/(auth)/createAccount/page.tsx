import {ButtonComponent} from "./buttonComponent";
import {InputComponent} from "./inputComponent";

export default function createAccount() {
  return (
    <div className="flex w-full h-full flex-col p-10 gap-[370px] items-center">
      <ButtonComponent
        buttonText="Log in"
        className="absolute flex"
      ></ButtonComponent>
      <div className="w-[359px h-fit flex gap-5 flex-col">
        <div>
          <p className="font-bold text-[24px]">Create your account</p>
          <p className="text-[#71717A] text-[14px]">
            Choose a username for your page
          </p>
        </div>

        <InputComponent
          inputTitle="Username"
          placeholderText="Enter username here"
          classname="w-full"
        ></InputComponent>
        <ButtonComponent
          buttonText="Continue"
          className="w-[359px] h-[40px]"
        ></ButtonComponent>
      </div>
    </div>
  );
}
