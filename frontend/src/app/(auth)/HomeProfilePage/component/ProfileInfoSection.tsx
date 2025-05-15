import {EarningsInfoComponent} from "./EarningsInfoComponent";
import {OneDonationComponent} from "./OneDonationComponent";
import {OneTransitionDetailComponent} from "./OneTransitionDetailComponent";
import {UserInfoComponent} from "./UserInfoComponent";

export const ProfileInfoSection = () => {
  return (
    <div className="flex gap-5 flex-col">
      <div className="border-1 rounded-2xl min-w-[859px] h-fit p-10 gap-5 flex flex-col">
        <UserInfoComponent />
        <EarningsInfoComponent />
      </div>
      <div className="flex gap-2 flex-col">
        <OneTransitionDetailComponent />
        <div className="border-1 rounded-md">
          <OneDonationComponent />
          <OneDonationComponent />
          <OneDonationComponent />
          <OneDonationComponent />
          <OneDonationComponent />
        </div>
      </div>
    </div>
  );
};
