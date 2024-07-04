import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useMediaQuery } from 'usehooks-ts';
import dishes from '@/constants/dishes';
import Header from './header';
import Carts from './carts';
import ListDishes from './list-dishes';
import { Button } from '@/components/ui/button';

function HomePage() {
  const [searchParams] = useSearchParams();
  const [foodDishes, setFoodDishes] = useState(dishes);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const smallDeviceView = useMediaQuery('(max-width: 1024px)');

  useEffect(() => {
    const mealOption = searchParams.get('mealOption');
    const typeService = searchParams.get('typeService');
    const name = searchParams.get('name');

    let filteredDishes = dishes;

    if (mealOption) {
      filteredDishes = filteredDishes.filter(
        (dish) => dish.mealOption === mealOption,
      );
    }
    if (typeService) {
      filteredDishes = filteredDishes.filter(
        (dish) => dish.typeService === typeService,
      );
    }
    if (name) {
      filteredDishes = filteredDishes.filter((dish) =>
        dish.name.toLowerCase().includes(name.toLowerCase()),
      );
    }
    setFoodDishes(filteredDishes);
  }, [searchParams]);

  const handleToggleCartButton = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="relative flex flex-col justify-between lg:max-h-screen lg:flex-row">
      <div
        className={`${smallDeviceView && isCartOpen ? 'hidden' : ''} flex max-h-[calc(100vh-5.625rem)] w-full flex-col px-6 sm:mt-6 sm:max-h-screen lg:min-w-[35vw] base:min-w-[42.563rem] xl:min-w-[60vw]`}
      >
        <Header />
        <ListDishes dishes={foodDishes} />
      </div>
      <div className={`${smallDeviceView && !isCartOpen ? 'hidden' : ''}`}>
        <Carts />
      </div>
      <div className="fixed -right-8 bottom-[50%] z-[50] w-20 rounded-l-full bg-primary hover:-right-0 lg:hidden">
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
