import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import dishes from '../../constants/dishes';
import Header from './header';
import Carts from './carts';
import ListDishes from './list-dishes';
import { Button } from '../../components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { useMediaQuery } from 'usehooks-ts';

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
        (dish) => dish.mealOption === mealOption
      );
    }
    if (typeService) {
      filteredDishes = filteredDishes.filter(
        (dish) => dish.typeService === typeService
      );
    }
    if (name) {
      filteredDishes = filteredDishes.filter((dish) =>
        dish.name.toLowerCase().includes(name.toLowerCase())
      );
    }
    setFoodDishes(filteredDishes);
  }, [searchParams]);

  const handleToggleCartButton = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="relative flex flex-col base:flex-row justify-between lg:max-h-screen">
      <div
        className={`${smallDeviceView && isCartOpen ? 'hidden' : ''} base:min-w-[681px] 2xl:min-w-[68vw] w-full sm:max-h-screen max-h-[calc(100vh-90px)] flex flex-col px-6 sm:mt-6`}
      >
        <Header />
        <ListDishes dishes={foodDishes} />
      </div>
      <div className={`${smallDeviceView && !isCartOpen ? 'hidden' : ''}`}>
        <Carts />
      </div>
      <div className="bg-primary rounded-l-full w-20 fixed z-[99] bottom-[50%] -right-8 hover:-right-0 base:hidden">
        <Button
          onClick={handleToggleCartButton}
          className="rounded-l-full border-none size-16 bg-primary text-white active:bg-primary focus:bg-primary"
        >
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
}

export default HomePage;
