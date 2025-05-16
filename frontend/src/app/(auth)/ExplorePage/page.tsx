import {ProfilePageButton} from "../HomeProfilePage/component";
import {ExploreSearchSection} from "./components/ExploreCreatedSearchSection";

export default function ExplorePage() {
  return (
    <div className="w-[100%] flex flex-row gap-[50px]">
      <ProfilePageButton />
      <ExploreSearchSection />
    </div>
  );
}
