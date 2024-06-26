import { useState } from 'react';
import meals from '../../constants/meals';

const FilterMenu = () => {
  const [mealOption, setMealOption] = useState(meals[0].value);

  return (
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
  );
};

export default FilterMenu;
