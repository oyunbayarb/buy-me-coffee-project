import {Coffee} from "lucide-react";

export const CoffeeLogoSection = () => {
  return (
    <div className="w-full h-full bg-[#FBBF24] rounded-lg flex-col flex gap-[235px]">
      <div className="flex gap-2 items-center mt-10 ml-15 font-bold">
        <Coffee className="size-8" />
        Buy Me Coffee
      </div>
      <div className="flex items-center justify-center flex-col gap-4">
        <img
          src="./illustration.png"
          className="flex rounded-lg w-[240px] h-[240px]"
        />
        <p className="text-[24px] font-bold">Fund your creative work</p>
        <p className="text-[16px] w-[455px] flex text-center">
          Accept support. Start a membership. Setup a shop. It’s easier than you
          think.
        </p>
      </div>
    </div>
  );
};
