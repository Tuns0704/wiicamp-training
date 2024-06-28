import { IDishItem } from '../../types/dish-item';
import CardFoodItem from './item/dish';

interface IListDishesProps {
  dishes: IDishItem[];
}

const ListDishes = ({ dishes }: IListDishesProps) => {
  return (
    <>
      {dishes.length > 0 ? (
        <>
          {
            <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-5 lg:gap-7 overflow-y-scroll scrollbar-none">
              {dishes.map((item, index) => (
                <CardFoodItem key={index} item={item} />
              ))}
            </div>
          }
        </>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <h1 className="text-white text-3xl font-medium">
            No dishes available
          </h1>
        </div>
      )}
    </>
  );
};

export default ListDishes;
