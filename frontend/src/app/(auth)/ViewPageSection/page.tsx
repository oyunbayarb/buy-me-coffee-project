import {CoffeeDonationSection} from "./components/CoffeeDonationSection";
import {ProfileIntroSection} from "./components/ProfileIntroSection";

export default function ViewPageSection() {
  return (
    <div className="flex w-full h-screen p-6 justify-center items-center">
      <ProfileIntroSection />
      <CoffeeDonationSection />
    </div>
  );
}
