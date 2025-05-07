import {Input} from "@/components/ui/input";

export const InputComponent = ({
  inputTitle,
  placeholderText,
  classname,
}: {
  inputTitle: string;
  placeholderText: string;
  classname: string;
}) => {
  return (
    <div>
      <p>{inputTitle}</p>
      <Input placeholder={placeholderText} className={classname}></Input>
    </div>
  );
};
