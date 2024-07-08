import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDebounceCallback } from 'usehooks-ts';
import SearchIcon from '../../components/icons/search';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';
import meals from '../../constants/categories';
import service from '../../constants/service';
import Categories from '@/components/categories';
import getFormatCurrentDate from '@/helpers/get-format-current-date';

function Header() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(
    searchParams.get('category') || meals[0].value,
  );
  const [name, setName] = useState(searchParams.get('name') || '');
  const [typeService, setTypeService] = useState(
    searchParams.get('typeService') || '',
  );

  useEffect(() => {
    const params = new URLSearchParams();
    if (category && category !== 'All') params.set('category', category);
    if (name) params.set('name_like', name);
    if (typeService && typeService !== 'All')
      params.set('typeService', typeService);
    setSearchParams(params);
  }, [category, name, typeService, setSearchParams]);

  const debouncedSetName = useDebounceCallback(setName, 500);

  return (
    <>
      <div className="mb-5 mt-4 flex items-center justify-between gap-2 sm:mb-6 sm:flex-row sm:gap-0">
        <div className="min-w-[10.25rem] text-start">
          <h1 className="text-lg font-semibold text-white sm:text-2xl">
            Jaerga Restro
          </h1>
          <p className="text-sm text-textlighter sm:text-base">
            {getFormatCurrentDate()}
          </p>
        </div>
        <div className="flex items-center justify-between rounded-md bg-dark-base p-[0.875rem] text-white outline outline-dark-linebase base:min-w-[13.75rem]">
          <div className="mr-2 text-white">
            <SearchIcon />
          </div>
          <input
            type="text"
            className="w-full bg-dark-base text-sm text-white placeholder:text-textlight focus:text-white focus:outline-none focus:ring-0"
            placeholder="Search for food, coffe, etc..."
            defaultValue={name}
            onChange={(e) => debouncedSetName(e.target.value)}
          />
        </div>
      </div>
      <div className="min-h-[2.063rem] w-full overflow-y-clip overflow-x-scroll border-b border-dark-linebase scrollbar-none base:mb-6">
        <Categories categoryOption={category} setCategoryOption={setCategory} />
      </div>
      <div className="mb-6 flex max-h-12 min-h-12 items-center justify-between">
        <h2 className="font-semibold text-white">Choose Dishes</h2>
        <Select value={typeService} onValueChange={(e) => setTypeService(e)}>
          <SelectTrigger className="w-[6.563rem] border-2 border-dark-linebase bg-dark-bg2 py-3 font-medium text-white focus:ring-0">
            <SelectValue placeholder="Service" />
          </SelectTrigger>
          <SelectContent className="z-[999] border border-dark-linebase bg-dark-bg2 font-medium text-white">
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
