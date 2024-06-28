import { PlusIcon } from 'lucide-react';
import useCartStore from '../../../stores/cart';
import { IDishItem } from '../../../types/dish-item';

interface CardItemProps {
  item: IDishItem;
}

const CardFoodItem = ({ item }: CardItemProps) => {
  const { addToCart } = useCartStore();

  const handleAddToCart = () => {
    const itemInCart = {
      id: item.id,
      name: item.name,
      price: item.price,
      typeService: item.typeService,
      quantity: 1,
      image: item.image,
    };
    addToCart(itemInCart);
  };
  return (
    <div className="group flex h-fit max-h-72 w-full relative flex-col gap-4 items-center  before:content-[''] before:w-full before:bg-darkbg2 before:h-5/6 before:-bottom-0 before:absolute before:rounded-2xl mb-3">
      <div className="relative">
        <img className="size-[132px] z-10" src={item.image} alt={item.name} />
        <div
          onClick={() => handleAddToCart()}
          className="hidden group-hover:flex hover:cursor-pointer group-hover:items-center group-hover:justify-center absolute size-[132px] rounded-full bg-primary top-0 text-white"
        >
          <PlusIcon />
        </div>
      </div>
      <div className="w-full flex flex-col items-center px-6 z-10">
        <h3 className="text-white w-full leading-5 font-medium text-center mb-2">
          {item.name}
        </h3>
        <p className="text-white mb-1">$ {item.price}</p>
        <p className="text-textlight mt-1 pb-4">
          {item.available} Bowls available
        </p>
      </div>
    </div>
  );
};

export default CardFoodItem;
