import EmptyCartIcon from '../../components/icons/empty-cart';
import { ICartItem } from '../../types/cart-item';
import CardCartItem from './item/cart';

interface IListCartProps {
  cart: ICartItem[];
}

function ListCart({ cart }: IListCartProps) {
  return (
    <div className="flex flex-col gap-6 overflow-y-scroll scrollbar-none">
      {cart.length > 0 ? (
        cart.map((item, index) => {
          return <CardCartItem key={`${item.name}${index}`} item={item} />;
        })
      ) : (
        <div className="w-full text-primary min-h-64 flex flex-col justify-center items-center">
          <EmptyCartIcon />
          <p className="font-medium text-3xl">Cart is empty</p>
        </div>
      )}
    </div>
  );
}

export default ListCart;
