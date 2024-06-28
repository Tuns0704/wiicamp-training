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
import { useSearchParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { debounce } from 'lodash';
import service from '../../constants/service';

const Header = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mealOption, setMealOption] = useState(
    searchParams.get('mealOption') || meals[0].value
  );
  const [name, setName] = useState(searchParams.get('name') || '');
  const [typeService, setTypeService] = useState(
    searchParams.get('typeService') || ''
  );

  useEffect(() => {
    const params = new URLSearchParams();
    if (mealOption) params.set('mealOption', mealOption);
    if (name) params.set('name', name);
    if (typeService && typeService !== 'All')
      params.set('typeService', typeService);
    setSearchParams(params);
  }, [mealOption, name, typeService, setSearchParams]);

  const debouncedSetName = useCallback(
    debounce((value) => {
      setName(value);
    }, 500),
    []
  );

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
            className="bg-darkbgbase w-[200px] focus:outline-none focus:ring-0 focus:text-white text-white placeholder:text-textlight"
            placeholder="Search for food, coffe, etc..."
            defaultValue={name}
            onChange={(e) => debouncedSetName(e.target.value)}
          />
        </div>
      </div>
      <div className="w-full overflow-x-scroll scrollbar-none max-h-[33px] pb-[15px] flex gap-8 border-b border-darklinebase mb-3 sm:mb-6">
        <div className="flex gap-8 ">
          {meals.map((item) => (
            <div
              onClick={() => setMealOption(item.value)}
              key={item.value}
              className={`${mealOption === item.value ? 'text-primary after:content-[""] after:w-2/3 after:h-[2px] after:bg-primary after:absolute sm:after:-bottom-[12px] after:-bottom-[6px] after:left-0 after:rounded' : 'text-white '} relative min-w-fit pb-5  hover:cursor-pointer font-semibold text-sm`}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
      <div className="min-h-[5vh] flex items-center justify-between mb-6">
        <h2 className="text-white font-semibold">Choose Dishes</h2>
        <Select value={typeService} onValueChange={(e) => setTypeService(e)}>
          <SelectTrigger className="w-[105px] bg-darkbg2 text-white border-2 border-darklinebase focus:ring-0 py-3 font-medium">
            <SelectValue placeholder="Service" />
          </SelectTrigger>
          <SelectContent className="bg-darkbg2 z-[999] border border-darklinebase text-white font-medium">
            {service.map((item) => (
              <SelectItem value={item.value}>{item.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </>
  );
};

export default Header;
