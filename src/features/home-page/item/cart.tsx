import TrashIcon from '../../../components/icons/trash';
import { cartStoreActions } from '../../../stores/cart';
import formatForLongText from '../../../helpers/format-for-long-text';
import formatCurrency from '../../../helpers/format-currency';
import { ICartItem } from '../../../types/cart-item';

interface CartItemProps {
  item: ICartItem;
}

function CardCartItem({ item }: CartItemProps) {
  const handleRemoveFromCart = (id: number) => {
    cartStoreActions.removeFromCart(id);
  };
  return (
    <div className="">
      <div className="flex items-center justify-between gap-4">
        <div className="w-5/6 flex justify-between">
          <div className="flex gap-2">
            <img className="size-12" src={item.image} alt="" />
            <div>
              <p className="font-medium text-white">
                {formatForLongText(item.name)}
              </p>
              <p className="font-medium text-sm text-textlight">
                $ {item.price}
              </p>
            </div>
          </div>
          <div className="flex">
            <input
              type="number"
              className="bg-dark-base border focus:right-0 focus:outline-none border-dark-linebase text-center size-12 rounded-lg"
              value={item.quantity}
              placeholder="0"
              readOnly
            />
          </div>
        </div>
        <div className="w-1/6">
          <p className="text-end font-medium">
            {formatCurrency(item.price * item.quantity)}
          </p>
        </div>
      </div>
      <div className="flex mt-[10px] gap-4">
        <input
          type="text"
          className="w-5/6 py-[14px] rounded-lg border-2 focus:right-0 focus:outline-none border-dark-linebase px-2 bg-dark-base"
          placeholder="Order Note..."
        />
        <button
          onClick={() => handleRemoveFromCart(item.id)}
          className="w-1/6 text-primary border border-primary rounded-lg flex justify-center items-center"
          aria-label="button"
          type="button"
        >
          <TrashIcon />
        </button>
      </div>
    </div>
  );
}

export default CardCartItem;
