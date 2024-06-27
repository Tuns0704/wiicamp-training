import getFormatCurrentDate from '../../helpers/get-format-current-date';
import SearchIcon from '../../components/icons/search';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';
import meals from '../../constants/meals';
import { useState } from 'react';

const Header = () => {
  const [mealOption, setMealOption] = useState(meals[0].value);
  return (
    <>
      <div className="flex flex-col gap-2 sm:gap-0 sm:flex-row justify-between items-center mb-6">
        <div className="text-center sm:text-start">
          <h1 className="text-white text-lg sm:text-2xl font-semibold">
            Jaerga Restro
          </h1>
          <p className="text-textlighter text-sm sm:text-base">
            {getFormatCurrentDate()}
          </p>
        </div>
        <div className="flex w-fit gap-3 p-[14px] bg-darkbgbase outline outline-darklinebase rounded-md  justify-center items-center">
          <SearchIcon />
          <input
            type="text"
            className="bg-darkbgbase w-[200px] focus:outline-none focus:ring-0 focus:text-white placeholder:text-textlight"
            placeholder="Search for food, coffe, etc..."
          />
        </div>
      </div>
      <div className="w-full max-h-[33px] pb-[13px] flex gap-8 border-b border-darklinebase mb-3 sm:mb-6">
        {meals.map((item) => (
          <div
            onClick={() => {
              setMealOption(item.value);
            }}
            key={item.value}
            className={`${mealOption === item.value ? 'text-primary after:content-[""] after:w-2/3 after:h-[2px] after:bg-primary after:absolute after:-bottom-[14px] after:left-0 after:rounded' : 'text-white '} relative  hover:cursor-pointer font-semibold text-sm`}
          >
            {item.name}
          </div>
        ))}
      </div>
      <div className="min-h-[5vh] flex items-center justify-between mb-6">
        <h2 className="text-white font-semibold">Choose Dishes</h2>
        <Select>
          <SelectTrigger className="w-[100px] bg-darkbg2 text-white border-2 border-darklinebase focus:ring-0 p-[14px] font-medium">
            <SelectValue placeholder="Service" />
          </SelectTrigger>
          <SelectContent className="bg-darkbg2 border border-darklinebase text-white font-medium">
            <SelectItem value="dinein">Dine In</SelectItem>
            <SelectItem value="togo">To Go</SelectItem>
            <SelectItem value="delivery">Delivery</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </>
  );
};

export default Header;
