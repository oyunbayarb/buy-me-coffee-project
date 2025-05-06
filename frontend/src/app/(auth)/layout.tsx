import {CoffeeLogoSection} from "./createAccount/component/CoffeeLogoSection";
import {Button} from "@/components/ui/button";
export default function AuthLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex h-screen">
      <div className="flex w-[50%]">
        <CoffeeLogoSection />
      </div>
      <div className="flex w-[50%] h-full">{children}</div>
    </div>
  );
}
