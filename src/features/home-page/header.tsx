import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDebounceCallback } from 'usehooks-ts';
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
import service from '../../constants/service';
import Categories from '@/components/categories';

function Header() {
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
    if (mealOption && mealOption !== 'All')
      params.set('mealOption', mealOption);
    if (name) params.set('name', name);
    if (typeService && typeService !== 'All')
      params.set('typeService', typeService);
    setSearchParams(params);
  }, [mealOption, name, typeService, setSearchParams]);

  const debouncedSetName = useDebounceCallback(setName, 500);

  return (
    <>
      <div className="flex mt-4 gap-2 sm:gap-0 sm:flex-row justify-between items-center mb-5 sm:mb-6">
        <div className="min-w-[164px] text-start">
          <h1 className="text-white text-lg sm:text-2xl font-semibold">
            Jaerga Restro
          </h1>
          <p className="text-textlighter text-sm sm:text-base">
            {getFormatCurrentDate()}
          </p>
        </div>
        <div className="flex base:min-w-[220px] p-[14px] bg-dark-base outline outline-dark-linebase rounded-md text-white justify-between items-center">
          <div className="text-white mr-2">
            <SearchIcon />
          </div>
          <input
            type="text"
            className="w-full bg-dark-base text-sm focus:outline-none focus:ring-0 focus:text-white text-white placeholder:text-textlight"
            placeholder="Search for food, coffe, etc..."
            defaultValue={name}
            onChange={(e) => debouncedSetName(e.target.value)}
          />
        </div>
      </div>
      <div className="w-full border-b border-dark-linebase min-h-[33px] overflow-x-scroll overflow-y-clip  scrollbar-none base:mb-6">
        <Categories mealOption={mealOption} setMealOption={setMealOption} />
      </div>
      <div className="min-h-12 max-h-12 flex items-center justify-between mb-6">
        <h2 className="text-white font-semibold">Choose Dishes</h2>
        <Select value={typeService} onValueChange={(e) => setTypeService(e)}>
          <SelectTrigger className="w-[105px] bg-dark-bg2 text-white border-2 border-dark-linebase focus:ring-0 py-3 font-medium">
            <SelectValue placeholder="Service" />
          </SelectTrigger>
          <SelectContent className="bg-dark-bg2 z-[999] border border-dark-linebase text-white font-medium">
            {service.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </>
  );
}

export default Header;
