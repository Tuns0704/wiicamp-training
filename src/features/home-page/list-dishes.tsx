import { IDishItem } from '@/types/dish-item';
import CardFoodItem from './item/dish';

interface IListDishesProps {
  dishes: IDishItem[];
}

function ListDishes({ dishes }: IListDishesProps) {
  return (
    <div className="overflow-y-scroll pb-8 scrollbar-none">
      {dishes.length > 0 ? (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 base:grid-cols-3 gap-5 sm:gap-5 lg:gap-x-7 2xl:grid-cols-4 lg:gap-y-6 ">
          {dishes.map((item) => (
            <CardFoodItem key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="text-primary w-full flex justify-center items-center  text-3xl font-medium">
          No dishes available
        </div>
      )}
    </div>
  );
}

export default ListDishes;
