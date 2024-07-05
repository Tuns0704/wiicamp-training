import { IDishItem } from '@/types/dish-item';
import CardFoodItem from './item/dish';

interface IListDishesProps {
  dishes: IDishItem[];
}

function ListDishes({ dishes }: IListDishesProps) {
  return (
    <div className="overflow-y-scroll pb-8 scrollbar-none">
      {dishes.length > 0 ? (
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5 lg:gap-x-7 lg:gap-y-6 base:grid-cols-3 2xl:grid-cols-4">
          {dishes.map((item) => (
            <CardFoodItem key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="flex w-full items-center justify-center text-3xl font-medium text-primary">
          No dishes available
        </div>
      )}
    </div>
  );
}

export default ListDishes;
