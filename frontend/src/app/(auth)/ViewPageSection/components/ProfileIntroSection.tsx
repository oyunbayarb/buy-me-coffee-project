import {Heart} from "lucide-react";
export const ProfileIntroSection = () => {
  return (
    <div className="flex gap-5 flex-col w-[50%] p-6 h-fit ">
      <div className="p-6 gap-5 flex flex-col bg-white rounded-md border-2">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-2 text-[20px]">
            <img
              className="size-10 rounded-full"
              src="https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_hybrid&w=740"
            ></img>
            <p>Jake</p>
          </div>
          <button className="bg-[#F4F4f5] w-[96px] h-[40px] items-center justify-center rounded-md p-1 border-1">
            Edit page
          </button>
        </div>
        <div>
          <p>About Jake</p>
          <p>
            I’m a typical person who enjoys exploring different things. I also
            make music art as a hobby. Follow me along.
          </p>
        </div>
      </div>
      <div className="p-6 bg-white rounded-md border-2">
        <p>Social media URL</p>
        <p>https://buymeacoffee.com/spacerulz44</p>
      </div>
      <div className="p-6 bg-white rounded-md border-2 gap-5 flex flex-col">
        <p>Recent Supporters</p>
        <div className="p-6 bg-white rounded-md border-1 justify-center items-center flex-col flex">
          <Heart />
          <p>Be the first one to support Jake</p>
        </div>
      </div>
    </div>
  );
};
