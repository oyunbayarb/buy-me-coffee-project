import {Coffee} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {ChevronDown} from "lucide-react";

export const Header = () => {
  return (
    <div className="flex p-5 w-screen h-fit flex-col">
      <div className="flex flex-row justify-between">
        <div className="flex items-center gap-2">
          <Coffee className="size-8" />
          Buy Me Coffee
        </div>
        <div className="flex-row flex items-center gap-2">
          <img
            className="size-10 rounded-full"
            src="https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_hybrid&w=740"
          ></img>
          <p>Jake</p>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="size-fit">
              <DropdownMenuLabel>Log out</DropdownMenuLabel>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};
