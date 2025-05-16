import {Button} from "@/components/ui/button";

export const ExploreSearchSection = () => {
  return (
    <div className="w-full h-fit flex flex-col gap-[20px]">
      <div className="flex flex-col gap-[16px]">
        <p className="text-[30px]">Explore creators</p>
        <input
          type="text"
          placeholder="Search name"
          className="border-1 rounded-md p-2 w-[150px]"
        ></input>
      </div>
      <div className="w-full flex flex-col border-2 h-fit rounded-md p-5 gap-5">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center gap-2 text-[20px]">
            <img
              className="size-10 rounded-full"
              src="https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_hybrid&w=740"
            ></img>
            <p>Jake</p>
          </div>
          <Button className="bg-[#F4F4F5] text-black hover:bg-gray-500">
            View profile
          </Button>
        </div>
        <div className="flex-col text-[10px] w-fit h-fit flex gap-[20px]">
          <div className="w-full flex flex-col gap-1">
            <p className="font-bold">About Space ranger</p>
            <p>
              All day, every day, we're watching, listening to, reading and
              absorbing politics. It's exhausting. We then report on what we've
              seen in a way that's as chill as possible. None of the
              sensationalism and division you'll find elsewhere. It's about
              clarity, focus, approachability, and having a little wry smile
              almost all the time.
            </p>
          </div>
          <div className="w-fit flex gap-1 flex-col h-fit w-[] flex-wrap">
            <p className="font-bold">Social media URL</p>
            <p className="text-wrap w-[10px] h-fit ">
              https://buymeacoffee.com/baconpancakes1
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col border-2 h-fit rounded-md p-5 gap-5">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center gap-2 text-[20px]">
            <img
              className="size-10 rounded-full"
              src="https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_hybrid&w=740"
            ></img>
            <p>Jake</p>
          </div>
          <Button className="bg-[#F4F4F5] text-black hover:bg-gray-500">
            View profile
          </Button>
        </div>
        <div className="flex-col text-[10px] w-fit h-fit flex gap-[20px]">
          <div className="w-full flex flex-col gap-1">
            <p className="font-bold">About Space ranger</p>
            <p>
              All day, every day, we're watching, listening to, reading and
              absorbing politics. It's exhausting. We then report on what we've
              seen in a way that's as chill as possible. None of the
              sensationalism and division you'll find elsewhere. It's about
              clarity, focus, approachability, and having a little wry smile
              almost all the time.
            </p>
          </div>
          <div className="w-fit flex gap-1 flex-col h-fit w-[] flex-wrap">
            <p className="font-bold">Social media URL</p>
            <p className="text-wrap w-[10px] h-fit ">
              https://buymeacoffee.com/baconpancakes1
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col border-2 h-fit rounded-md p-5 gap-5">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center gap-2 text-[20px]">
            <img
              className="size-10 rounded-full"
              src="https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_hybrid&w=740"
            ></img>
            <p>Jake</p>
          </div>
          <Button className="bg-[#F4F4F5] text-black hover:bg-gray-500">
            View profile
          </Button>
        </div>
        <div className="flex-col text-[10px] w-fit h-fit flex gap-[20px]">
          <div className="w-full flex flex-col gap-1">
            <p className="font-bold">About Space ranger</p>
            <p>
              All day, every day, we're watching, listening to, reading and
              absorbing politics. It's exhausting. We then report on what we've
              seen in a way that's as chill as possible. None of the
              sensationalism and division you'll find elsewhere. It's about
              clarity, focus, approachability, and having a little wry smile
              almost all the time.
            </p>
          </div>
          <div className="w-fit flex gap-1 flex-col h-fit w-[] flex-wrap">
            <p className="font-bold">Social media URL</p>
            <p className="text-wrap w-[10px] h-fit ">
              https://buymeacoffee.com/baconpancakes1
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
