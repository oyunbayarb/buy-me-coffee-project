import {Coffee} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function AuthLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex h-screen flex-col">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center font-bold">
          <Coffee className="size-8" />
          Buy Me Coffee
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger>Log out</DropdownMenuTrigger>
            <DropdownMenuContent></DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="flex w-[100%]">{children}</div>
    </div>
  );
}
