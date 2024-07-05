import EmptyCartIcon from '@/components/icons/empty-cart';
import { ICartItem } from '@/types/cart-item';
import CardCartItem from './item/cart';

interface IListCartProps {
  cart: ICartItem[];
}

function ListCart({ cart }: IListCartProps) {
  return (
    <div className="flex flex-col gap-6 overflow-y-scroll scrollbar-none">
      {cart.length > 0 ? (
        cart.map((item) => {
          return <CardCartItem key={`${item.id}`} item={item} />;
        })
      ) : (
        <div className="flex min-h-64 w-full flex-col items-center justify-center text-primary">
          <EmptyCartIcon />
          <p className="text-3xl font-medium">Cart is empty</p>
        </div>
      )}
    </div>
  );
}

export default ListCart;
