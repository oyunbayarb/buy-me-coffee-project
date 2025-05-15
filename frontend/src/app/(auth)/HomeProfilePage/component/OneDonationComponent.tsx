export const OneDonationComponent = () => {
  return (
    <div>
      <div className="w-full h-fit flex-col flex justify-between p-5">
        <div className="flex flex-row gap-1 justify-between">
          <div className="flex-row flex items-center gap-1">
            <img
              className="size-10 rounded-full"
              src="https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_hybrid&w=740"
            ></img>
            <div className="text-[10px]">
              <p>Jake</p>
              <p>buymecoffee.com/baconpanckes1</p>
            </div>
          </div>
          <div className="flex-col flex text-[12px]">
            <p>+ $1</p>
            <p>10 hours ago</p>
          </div>
        </div>
        <p>
          Thank you for being so awesome everyday! You always manage to brighten
          up my day when I’m feeling down. Although $1 isn’t that much money
          it’s all I can contribute at the moment.
        </p>
      </div>
    </div>
  );
};
