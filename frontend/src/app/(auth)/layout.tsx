import {CoffeeLogoSection} from "./createAccount/component/CoffeeLogoSection";

export default function AuthLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex h-screen">
      <div className="flex w-[50%]">
        <CoffeeLogoSection />
      </div>
      <div className="flex w-[50%]">{children}</div>
    </div>
  );
}
