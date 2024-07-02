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
    <div className="w-full md:max-h-[calc(100vh-550px)] sm:min-h-[calc(100vh-262px)] flex flex-col">
      <div className="flex items-center justify-between">
        <h1 className="text-white base:text-xl font-semibold base:leading-8">
          Products Management
        </h1>
        <Button className="base:min-w-[178px] h-12 rounded-lg flex gap-2 py-[14px] border bg-dark-bg2 border-dark-linebase">
          <OptionIcon />
          Manage Categories
        </Button>
      </div>
      <div className="w-full border-b border-dark-linebase min-h-[33px] overflow-x-scroll scrollbar-none mt-6">
        <Categories mealOption={mealOption} setMealOption={setMealOption} />
      </div>
      <div className="base:min-h-[450px] base:max-h-[450px] xl:max-h-[500px] max-h-[300px] grid md:grid-cols-2 base:grid-cols-3 xl:grid-cols-4 gap-4 mt-[23px] overflow-y-scroll scrollbar-none">
        <div className="min-h-[299px] w-full flex flex-col justify-center items-center gap-2 border border-dashed rounded-lg border-primary text-primary">
          <PlusIcon className="size-10" />
          <p className="text-base font-medium">Add new dishes</p>
        </div>
        {dishes.map((item) => (
          <DishCard key={item.id} item={item} />
        ))}
      </div>
      <div className="flex gap-2 pt-[49px] mt-auto">
        <Button className="lg:min-w-[172px] min-h-[48px] bg-dark-bg2 border-primary border rounded-lg text-primary focus:text-white">
          Discard Changes
        </Button>
        <Button className="lg:min-w-[172px] min-h-[48px]">Save Changes</Button>
      </div>
    </div>
  );
}

export default ProductsManagement;
