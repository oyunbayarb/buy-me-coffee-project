import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {Value} from "@radix-ui/react-select";

export const EarningsInfoComponent = () => {
  return (
    <div className="flex flex-row gap-4">
      <Select>
        <p className="font-semibold text-[20px]">Earnings</p>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={SelectItem.value} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Last 30 days</SelectItem>
          <SelectItem value="dark">Last 90 days</SelectItem>
          <SelectItem value="system">All times</SelectItem>
        </SelectContent>
      </Select>
      <p className="font-semibold text-[20px]">{450}$</p>
    </div>
  );
};
