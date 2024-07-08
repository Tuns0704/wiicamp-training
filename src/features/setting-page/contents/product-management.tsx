import { useCallback, useEffect, useState } from 'react';
import { PlusIcon } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import OptionIcon from '../../../components/icons/option';
import Categories from '@/components/categories';
import meals from '@/constants/categories';
import dishes from '@/constants/dishes';
import DishCard from '../item/dish';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import ModalAddProduct from '../modal-add-product';
import { IDishItem } from '@/types/dish-item';
import DishesServices from '@/services/dishes';

function ProductsManagement() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState<string>(
    searchParams.get('category') || meals[0].value,
  );
  const [products, setProduct] = useState<IDishItem[]>(dishes);

  useEffect(() => {
    const params = new URLSearchParams();
    if (category && category !== 'All') params.set('category', category);
    setSearchParams(params);
  }, [category, setSearchParams]);

  const getData = useCallback(async () => {
    const response = await DishesServices.getAllDishes(searchParams);
    if (response.status === 200) {
      setProduct(response.data);
    }
  }, [searchParams]);

  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex items-center justify-between">
        <h1 className="text-sm font-semibold text-white base:text-xl base:leading-8">
          Products Management
        </h1>
        <Button className="flex h-12 gap-2 rounded-lg border border-dark-linebase bg-dark-bg2 px-2 text-xs sm:px-[0.875rem] sm:py-[0.875rem] base:min-w-[11.125rem]">
          <OptionIcon />
          Manage Categories
        </Button>
      </div>
      <div className="mt-6 min-h-[2.063rem] w-full overflow-x-scroll border-b border-dark-linebase scrollbar-none">
        <Categories categoryOption={category} setCategoryOption={setCategory} />
      </div>
      <div className="mt-4 grid h-full gap-4 overflow-y-scroll scrollbar-none xs:grid-cols-2 base:mt-[1.438rem] base:grid-cols-3 xl:grid-cols-4">
        <Dialog>
          <DialogTrigger asChild>
            <div className="flex h-[15rem] w-full flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-primary text-primary hover:cursor-pointer sm:h-[18.688rem]">
              <PlusIcon className="size-10" />
              <p className="text-base font-medium">Add new dishes</p>
            </div>
          </DialogTrigger>
          <ModalAddProduct reload={getData} />
        </Dialog>

        {products.map((item) => (
          <DishCard key={item.id} item={item} />
        ))}
      </div>
      <div className="flex h-fit items-end gap-2 pt-3 md:pt-[3.438rem] base:gap-2">
        <Button className="w-1/2 rounded-lg border border-primary bg-dark-bg2 text-xs text-primary focus:text-white sm:w-[10.75rem] sm:text-sm base:h-[3rem] base:p-3">
          Discard Changes
        </Button>
        <Button className="w-1/2 text-xs sm:w-[10.75rem] sm:text-sm base:min-h-[3rem]">
          Save Changes
        </Button>
      </div>
    </div>
  );
}

export default ProductsManagement;
