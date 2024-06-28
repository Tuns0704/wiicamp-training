import EmptyCartIcon from '../../components/icons/empty-cart';
import { ICartItem } from '../../types/cart-item';
import CardCartItem from './item/cart';

interface IListCartProps {
  cart: ICartItem[];
}

const ListCart = ({ cart }: IListCartProps) => {
  return (
    <>
      {cart.length > 0 ? (
        cart.map((item, index) => {
          return <CardCartItem key={index} item={item} />;
        })
      ) : (
        <div className="w-full text-primary min-h-64 flex flex-col gap-4 justify-center items-center">
          <EmptyCartIcon />
          <p className="font-medium text-3xl">Cart is empty</p>
        </div>
      )}
    </>
  );
};

export default ListCart;
