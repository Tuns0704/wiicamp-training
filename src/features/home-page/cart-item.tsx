import TrashIcon from '../../components/icons/trash';
import useCartStore from '../../stores/cart';
import formatForLongText from '../../helpers/format-for-long-text';
import formatCurrency from '../../helpers/format-currency';

interface CartItemProps {
  item: {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
  };
}

const CardCartItem = ({ item }: CartItemProps) => {
  const { removeFromCart } = useCartStore();

  const handleRemoveFromCart = (id: number) => {
    removeFromCart(id);
  };
  return (
    <div>
      <div className="flex items-center">
        <div className="w-4/6 flex gap-2 ">
          <img className="size-12" src={item.image} alt="" />
          <div>
            <p className="font-medium">{formatForLongText(item.name)}</p>
            <p className="font-medium text-sm text-textlight">$ {item.price}</p>
          </div>
        </div>
        <div className="w-1/6 flex justify-end">
          <input
            type="number"
            className="bg-darkbgbase border focus:right-0 focus:outline-none border-darklinebase text-center size-12 rounded-lg"
            value={item.quantity}
            placeholder="0"
          />
        </div>
        <div className="w-1/6">
          <p className="text-end font-medium">
            {formatCurrency(item.price * item.quantity)}
          </p>
        </div>
      </div>
      <div className="flex mt-[10px] justify-between">
        <input
          type="text"
          className="w-5/6 rounded-lg border-2 focus:right-0 focus:outline-none border-darklinebase px-2 bg-darkbgbase"
          placeholder="Order Note..."
        />
        <button
          onClick={() => handleRemoveFromCart(item.id)}
          className="size-12 text-primary border border-primary rounded-lg flex justify-center items-center"
        >
          <TrashIcon />
        </button>
      </div>
    </div>
  );
};

export default CardCartItem;
