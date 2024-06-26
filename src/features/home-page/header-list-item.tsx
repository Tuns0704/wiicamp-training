import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';

const HeaderListItem = () => {
  return (
    <div className="min-h-[5vh] flex items-center justify-between mb-6">
      <h2 className="text-white font-semibold">Choose Dishes</h2>
      <Select>
        <SelectTrigger className="w-[100px] bg-darkbg2 text-white border-2 border-darklinebase focus:ring-0 p-[14px] font-medium">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent className="bg-darkbg2 border border-darklinebase text-white font-medium">
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default HeaderListItem;
