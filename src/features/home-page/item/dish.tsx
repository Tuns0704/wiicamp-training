import { PlusIcon } from 'lucide-react';
import { cartStoreActions } from '../../../stores/cart';
import { IDishItem } from '../../../types/dish-item';

interface CardItemProps {
  item: IDishItem;
}

function CardFoodItem({ item }: CardItemProps) {
  const handleAddToCart = () => {
    const itemInCart = {
      id: item.id,
      name: item.name,
      price: item.price,
      typeService: item.typeService,
      quantity: 1,
      category: item.category,
      image: item.image,
    };
    cartStoreActions.addToCart(itemInCart);
  };
  return (
    <div className="relative mb-3 flex h-full max-h-72 w-full flex-col items-center gap-4 before:absolute before:-bottom-0 before:h-5/6 before:w-full before:rounded-2xl before:bg-dark-bg2 before:content-['']">
      <div className="group relative">
        <img className="z-10 size-[8.25rem]" src={item.image} alt={item.name} />
        <button
          onClick={() => handleAddToCart()}
          className="absolute top-0 hidden size-[8.25rem] rounded-full bg-primary text-white group-hover:flex group-hover:items-center group-hover:justify-center hover:cursor-pointer"
          aria-label="Add to cart"
          type="button"
        >
          <PlusIcon />
        </button>
      </div>
      <div className="z-10 flex h-full w-full flex-col items-center justify-between px-6 text-sm">
        <div className="flex h-full w-full flex-col items-center justify-between">
          <h3 className="mb-2 w-full text-center font-medium leading-5 text-white">
            {item.name}
          </h3>
          <p className="mb-1 text-white">$ {item.price}</p>
        </div>
        <p className="mt-1 pb-4 text-textlight">
          {item.available} Bowls available
        </p>
      </div>
    </div>
  );
}

export default CardFoodItem;
