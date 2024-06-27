import useCartStore from '../../stores/cart';

interface CardItemProps {
  item: {
    id: number;
    image: string;
    name: string;
    price: number;
    available: number;
  };
}

const CardFoodItem = ({ item }: CardItemProps) => {
  const { addToCart } = useCartStore();

  const handleAddToCart = () => {
    const itemInCart = {
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
      image: item.image,
    };
    addToCart(itemInCart);
  };
  return (
    <div
      onClick={() => handleAddToCart()}
      className="flex w-full relative flex-col gap-4 items-center  before:content-[''] before:w-full before:bg-darkbg2 before:h-5/6 before:-bottom-0 before:absolute before:rounded-2xl mb-3"
    >
      <img className="size-[132px] z-10" src={item.image} alt={item.name} />
      <div className="w-full flex flex-col items-center mx-6 z-10">
        <h3 className="text-white w-5/6 lg:w-4/5 xl:w-3/5 leading-5 font-medium text-center mb-2">
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
