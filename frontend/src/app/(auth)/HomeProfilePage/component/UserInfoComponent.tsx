import {Copy} from "lucide-react";

export const UserInfoComponent = () => {
  return (
    <div>
      <div className="w-full h-fit flex-row flex justify-between">
        <div className="flex flex-row gap-1">
          <img
            className="size-10 rounded-full"
            src="https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_hybrid&w=740"
          ></img>

          <div className="flex flex-col text-[12px]">
            <p>Jake</p>
            <p>buymecoffee.com/baconpanckes1</p>
          </div>
        </div>
        <div>
          <button className="bg-black text-white w-[159px] h-[40px] flex flex-row items-center gap-2 rounded-md p-1">
            <Copy />
            Share page link
          </button>
        </div>
      </div>
    </div>
  );
};
