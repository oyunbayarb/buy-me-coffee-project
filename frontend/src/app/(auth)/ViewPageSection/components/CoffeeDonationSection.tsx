import {Button} from "@/components/ui/button";
import {Coffee} from "lucide-react";
import {Textarea} from "@/components/ui/textarea";

export const CoffeeDonationSection = () => {
  return (
    <div className="flex w-[50%] h-fit flex-col border-2 p-6 rounded-md bg-white gap-9">
      <p className="text-2xl font-bold">Buy Jake a Coffee</p>
      <div className="border-1 rounded-md items-center flex-col p-2">
        <p>Select amount:</p>
        <div className="flex gap-2">
          <Button className="bg-[#E4E4E7] text-black hover:bg-gray-500">
            <Coffee /> $1
          </Button>
          <Button className="bg-[#E4E4E7] text-black hover:bg-gray-500">
            <Coffee /> $2
          </Button>
          <Button className="bg-[#E4E4E7] text-black hover:bg-gray-500">
            <Coffee /> $5
          </Button>
          <Button className="bg-[#E4E4E7] text-black hover:bg-gray-500">
            <Coffee /> $10
          </Button>
        </div>
      </div>
      <div className="flex gap-1 flex-col">
        <p>Enter BuyMeCoffee or social acount URL:</p>
        <input
          className="w-full border-1 rounded-md text-[#E4E4E7] p-3"
          placeholder="buymeacoffee.com/"
        ></input>
      </div>
      <div className="flex gap-1 flex-col">
        <p>Social message</p>
        <Textarea placeholder="Please write your message here" />
      </div>
      <Button className="bg-[#E4E4E7] text-black hover:bg-gray-500">
        Support
      </Button>
    </div>
  );
};
