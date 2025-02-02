import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import dishes from '@/constants/dishes';
import Header from './header';
import Carts from './carts';
import ListDishes from './list-dishes';
import { Button } from '@/components/ui/button';
import { IDishItem } from '@/types/dish-item';
import DishesServices from '@/services/dishes';

function HomePage() {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState<IDishItem[]>(dishes);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  const getData = useCallback(async () => {
    const response = await DishesServices.getAllDishes(searchParams);
    if (response.status === 200) {
      setProducts(response.data);
    }
  }, [searchParams]);

  useEffect(() => {
    getData();
  }, [getData]);

  const handleToggleCartButton = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="relative flex flex-col justify-between lg:max-h-screen lg:flex-row">
      <div
        className={`${isCartOpen ? 'hidden' : ''} h-[calc(100vh-5.625rem)] w-full flex-col px-6 sm:mt-6 sm:h-screen lg:flex lg:min-w-[35vw] base:min-w-[42.563rem] xl:min-w-[60vw]`}
      >
        <Header />
        <ListDishes dishes={products} />
      </div>
      <div className={`${!isCartOpen ? 'hidden' : ''} lg:block`}>
        <Carts />
      </div>
      <div className="fixed -right-8 bottom-[50%] z-[50] w-20 rounded-l-full bg-primary lg:hidden">
        <Button
          onClick={() => handleToggleCartButton()}
          className="size-16 rounded-l-full border-none bg-primary text-white focus:bg-primary active:bg-primary"
        >
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
}

export default HomePage;
