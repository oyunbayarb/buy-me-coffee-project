import {Button} from "@/components/ui/button";

export const ButtonComponent = ({
  buttonText,
  className,
}: {
  buttonText: string;
  className: string;
}) => {
  return (
    <div>
      <Button
        className={`bg-[#F4F4F5] text-black hover:bg-gray-500 ${className}`}
      >
        {buttonText}
      </Button>
    </div>
  );
};
