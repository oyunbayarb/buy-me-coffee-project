import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";

export const CreateAccountSection = () => {
  return (
    <div className="w-full h-full flex-col flex p-8 justify-start items-center gap-[223px]">
      <div className="flex w-full justify-between px-[80px]">
        <div>asdf</div>
        <Button className="bg-[#F4F4F5] text-black w-[73px] h-[40px] border-1 hover:bg-gray-400">
          Log in
        </Button>
      </div>
      <div className="w-[359px] flex size-fit p-6 flex-col">
        <p className="text-[24px]">Create Your Account</p>
        <p className="text-[#71717A] text-[14px]">
          Choose a username for your page
        </p>
        <div></div>
        <Input />
        <Button className="bg-[#F4F4F5] text-black w-full border-1 hover:bg-gray-400">
          Continue
        </Button>
      </div>
    </div>
  );
};
