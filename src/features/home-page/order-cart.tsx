import { useEffect, useState } from 'react';
import { Button } from '../../components/ui/button';
import formatCurrency from '../../helpers/format-currency';

import useCartStore from '../../stores/cart';
import CardCartItem from './cart-item';

const OrderCart = () => {
  const { cart } = useCartStore();
  const [totalCart, setTotalCart] = useState('');

  const handCalculateTotalcart = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return formatCurrency(total);
  };

  useEffect(() => {
    setTotalCart(handCalculateTotalcart());
  }, [cart]);

  return (
    <div className="flex flex-col gap-6 p-6 w-full text-white bg-darkbg2 h-full">
      <h1 className="font-semibold text-xl">Order #13242</h1>
      <div className="flex gap-2">
        <div className="py-[7px] text-white font-medium rounded-lg border border-primary px-3 bg-primary">
          Dine in
        </div>
        <div className="py-[7px] text-primary font-medium rounded-lg border border-darklinebase px-3">
          To Go
        </div>
        <div className="py-[7px] text-primary font-medium rounded-lg border border-darklinebase px-3">
          Delivery
        </div>
      </div>
      <div className="flex flex-col gap-6 h-full overflow-y-scroll scrollbar-none">
        <div className="flex w-full justify-between">
          <p className="w-4/6 font-semibold">Item</p>
          <p className="font-semibold w-1/6 text-center">Qty</p>
          <p className="font-semibold w-1/6 text-end">Price</p>
        </div>
        <div className="flex flex-col gap-6 overflow-y-scroll scrollbar-none">
          {cart.map((item) => {
            return <CardCartItem key={item.id} item={item} />;
          })}
        </div>
      </div>
      <div className="">
        <div className="mb-4 flex justify-between">
          <p className="text-textlight">Discount</p>
          <p className="font-medium">$0</p>
        </div>
        <div className="flex  justify-between">
          <p className="text-textlight">Sub total</p>
          <p className="font-medium">{totalCart}</p>
        </div>
        <Button className="w-full py-[14px] mt-[42px]">
          Continue to Payment
        </Button>
      </div>
    </div>
  );
};

export default OrderCart;
