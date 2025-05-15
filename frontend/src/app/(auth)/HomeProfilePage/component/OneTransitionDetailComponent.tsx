import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const OneTransitionDetailComponent = () => {
  return (
    <div>
      <div className="flex flex-row gap-4 justify-between">
        <Select>
          <p className="font-semibold text-[20px]">Recent transactions</p>
          <SelectTrigger className="w-[80px]">
            <SelectValue placeholder={SelectItem.value} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">1$</SelectItem>
            <SelectItem value="dark">2$</SelectItem>
            <SelectItem value="system1">5$</SelectItem>
            <SelectItem value="system2">10$</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
