import {Button} from "@/components/ui/button";

export const ProfilePageButton = () => {
  return (
    <div className="w-[30%] h-fit flex flex-col text-black gap-2">
      <Button className="bg-[#F4F4F5]  text-black">Home</Button>
      <Button className="bg-[#F4F4F5]  text-black">Explore</Button>
      <Button className="bg-[#F4F4F5]  text-black">View page</Button>
      <Button className="bg-[#F4F4F5]  text-black">Account settings</Button>
    </div>
  );
};
