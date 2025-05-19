import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";

export const ProfileIntroSection = () => {
  return (
    <div>
      <div className="flex gap-5 flex-col w-full h-fit border-1 rounded-md p-5">
        <p className="font-bold">Personal info</p>
        <img
          className="size-20 rounded-full"
          src="https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_hybrid&w=740"
        ></img>

        <div>
          <p>Name</p>
          <Textarea placeholder="Jake" />
        </div>
        <div>
          <p>About</p>
          <Textarea placeholder="I’m a typical person who enjoys exploring different things. I also make music art as a hobby. Follow me along." />
        </div>
        <div>
          <p>Social media URL</p>
          <Textarea placeholder="https://buymeacoffee.com/spacerulz44" />
        </div>
        <Button>Save changes</Button>
      </div>
      <div className="flex gap-5 flex-col w-full h-fit border-1 rounded-md p-5">
        <p className="font-bold">Set a new password</p>
        <div>
          <p>New password</p>
          <Input placeholder="Enter a new password" />
        </div>
        <div>
          <p>Confirm password</p>
          <Input placeholder="Confirm password" />
        </div>
        <Button>Save changes</Button>
      </div>
      <div className="flex gap-5 flex-col w-full h-fit border-1 rounded-md p-5">
        <p className="font-bold">Payment details</p>
        <div>
          <p>Select Country</p>
          <Input placeholder="United States" />
        </div>
        <div className="flex w-full gap-2">
          <div>
            <p>First name</p>
            <Input placeholder="Jake" />
          </div>
          <div>
            <p>Last name</p>
            <Input placeholder="Mulligan" />
          </div>
        </div>
        <div>
          <p>Enter card number</p>
          <Input placeholder="xxxx-xxxx-xxxx" />
        </div>
        <div className="flex gap-2 w-full">
          <div>
            <p>Expires</p>
            <Input placeholder="August" />
          </div>
          <div>
            <p>Year</p>
            <Input placeholder="2025" />
          </div>
          <div>
            <p>CVV</p>
            <Input placeholder="225" />
          </div>
        </div>
        <Button>Save changes</Button>
      </div>
      <div className="flex gap-5 flex-col w-full h-fit border-1 rounded-md p-5">
        <p className="font-bold">Success page</p>
        <div>
          <p>Confirmation message</p>
          <Input
            className="w-full h-[60px]"
            placeholder="Thank you for supporting me! It means a lot to have your support."
          />
        </div>
        <Button>Save changes</Button>
      </div>
    </div>
  );
};
