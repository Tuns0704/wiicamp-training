import { useState } from 'react';
import { PlusIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import OptionIcon from '../../components/icons/option';
import Categories from '@/components/categories';
import meals from '@/constants/meals';
import dishes from '@/constants/dishes';
import DishCard from './item/dish';

function ProductsManagement() {
  const [mealOption, setMealOption] = useState(meals[0].value);
  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-white base:text-xl base:leading-8">
          Products Management
        </h1>
        <Button className="flex h-12 gap-2 rounded-lg border border-dark-linebase bg-dark-bg2 py-[14px] base:min-w-[178px]">
          <OptionIcon />
          Manage Categories
        </Button>
      </div>
      <div className="mt-6 min-h-[33px] w-full overflow-x-scroll border-b border-dark-linebase scrollbar-none">
        <Categories mealOption={mealOption} setMealOption={setMealOption} />
      </div>
      <div className="mt-4 grid h-full gap-4 overflow-y-scroll scrollbar-none md:grid-cols-2 base:mt-[23px] base:grid-cols-3 xl:grid-cols-4">
        <div className="flex max-h-[299px] min-h-[299px] w-full flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-primary text-primary">
          <PlusIcon className="size-10" />
          <p className="text-base font-medium">Add new dishes</p>
        </div>
        {dishes.map((item) => (
          <DishCard key={item.id} item={item} />
        ))}
      </div>
      <div className="flex h-fit items-end gap-2 pt-5 md:pt-[55px]">
        <Button className="min-h-[48px] rounded-lg border border-primary bg-dark-bg2 text-primary focus:text-white lg:min-w-[172px]">
          Discard Changes
        </Button>
        <Button className="min-h-[48px] lg:min-w-[172px]">Save Changes</Button>
      </div>
    </div>
  );
}

export default ProductsManagement;
