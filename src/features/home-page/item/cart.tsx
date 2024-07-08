import formatForLongText from '@/helpers/format-for-long-text';
import TrashIcon from '../../../components/icons/trash';
import { cartStoreActions } from '../../../stores/cart';
import { ICartItem } from '../../../types/cart-item';
import formatCurrency from '@/helpers/format-currency';

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
        <div className="flex w-5/6 justify-between">
          <div className="flex gap-2">
            <img className="size-12" src={item.image} alt="" />
            <div>
              <p className="font-medium text-white">
                {formatForLongText(item.name)}
              </p>
              <p className="text-sm font-medium text-textlight">
                $ {item.price}
              </p>
            </div>
          </div>
          <div className="flex">
            <input
              type="number"
              className="size-12 rounded-lg border border-dark-linebase bg-dark-base text-center focus:right-0 focus:outline-none"
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
      <div className="mt-[0.625rem] flex gap-4">
        <input
          type="text"
          className="w-5/6 rounded-lg border-2 border-dark-linebase bg-dark-base px-2 py-[0.875rem] focus:right-0 focus:outline-none"
          placeholder="Order Note..."
        />
        <button
          onClick={() => handleRemoveFromCart(item.id)}
          className="flex w-1/6 items-center justify-center rounded-lg border border-primary text-primary"
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
