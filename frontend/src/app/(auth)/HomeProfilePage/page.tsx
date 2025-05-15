import {ProfileInfoSection, ProfilePageButton} from "./component";

export default function HomeProfilePage() {
  return (
    <div className="flex flex-row gap-5 p-10 w-fit">
      <ProfilePageButton />
      <ProfileInfoSection />
    </div>
  );
}
