import EmptyCartIcon from '../../components/icons/empty-cart';
import useCartStore from '../../stores/cart';
import CardCartItem from './cart-item';

const RenderListCartItem = () => {
  const { cart } = useCartStore();

  return (
    <>
      {cart.length > 0 ? (
        cart.map((item) => {
          return <CardCartItem key={item.id} item={item} />;
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

export default RenderListCartItem;
