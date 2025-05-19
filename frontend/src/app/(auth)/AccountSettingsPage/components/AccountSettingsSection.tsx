import {Button} from "@/components/ui/button";
import {Header} from "./Header";
import {ProfileIntroSection} from "../../ViewPageSection/components";

export const AccountSettingsSection = () => {
  return (
    <div className="flex p-10 flex-col">
      <Header />
      <div className="flex gap-5">
        <div className="w-[30%] flex flex-col gap-2">
          <Button className="bg-[#F4F4F5] border-1 text-black hover:bg-gray-400">
            Home
          </Button>
          <Button className="bg-[#F4F4F5] border-1 text-black hover:bg-gray-400">
            Explore
          </Button>
          <Button className="bg-[#F4F4F5] border-1 text-black hover:bg-gray-400">
            View page
          </Button>
          <Button className="bg-[#F4F4F5] border-1 text-black hover:bg-gray-400">
            Account settings
          </Button>
        </div>
        <div className="flex gap-5 flex-col">
          <p className="text-[24px] font-bold">My account</p>
          <ProfileIntroSection />
        </div>
      </div>
    </div>
  );
};
