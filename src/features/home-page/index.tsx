import dishes from '../../constants/dishes';
import Header from './header';
import Cart from './carts';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ListDishes from './list-dishes';

function HomePage() {
  const [searchParams] = useSearchParams();
  const [foodDishes, setFoodDishes] = useState(dishes);

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

  return (
    <div className="flex flex-col lg:flex-row justify-between md:max-h-screen">
      <div className="md:min-w-[60vw] w-full sm:max-h-screen max-h-[calc(100vh-90px)] flex flex-col px-6 mt-6">
        <Header />
        <ListDishes dishes={foodDishes} />
      </div>
      <div className="md:min-w-[25vw] flex flex-col gap-6 p-6 w-full text-white bg-darkbg2 min-h-[calc(100vh-200px)] max-h-[calc(100vh-95px)] sm:min-h-screen sm:max-h-screen">
        <Cart />
      </div>
    </div>
  );
}

export default HomePage;
