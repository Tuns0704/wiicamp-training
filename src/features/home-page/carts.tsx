import { useEffect, useState } from 'react';
import formatCurrency from '../../helpers/format-currency';
import useCartStore from '../../stores/cart';
import ModalPayment from './modal-payment';
import RenderListCartItem from './list-carts';
import service from '../../constants/service';
import { Button } from '../../components/ui/button';
import { Sheet, SheetTrigger } from '../../components/ui/sheet';

const Cart = () => {
  const { cart } = useCartStore();
  const [listCart, setListCart] = useState(cart);
  const [totalCart, setTotalCart] = useState('');
  const [selectedServiceOption, setSelectedServiceOption] = useState(
    service[0].value
  );

  const handCalculateTotalcart = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return formatCurrency(total);
  };

  const handleSelectType = (value: string) => {
    setSelectedServiceOption(value);
  };

  useEffect(() => {
    setTotalCart(handCalculateTotalcart());
    let filteredCart = cart;
    if (selectedServiceOption !== 'All') {
      filteredCart = cart.filter(
        (item) => item.typeService === selectedServiceOption
      );
    }

    setListCart(filteredCart);
  }, [cart, selectedServiceOption]);

  return (
    <>
      <h1 className="font-semibold text-xl">Order #13242</h1>
      <div className="flex gap-2">
        {service.map((item) => (
          <div
            onClick={() => handleSelectType(item.value)}
            className={`py-[7px] hover:cursor-pointer  font-medium rounded-lg border  px-3  ${item.value === selectedServiceOption ? 'border-primary bg-primary text-white' : 'border border-darklinebase text-primary'}`}
          >
            {item.name}
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-6 overflow-y-scroll scrollbar-none">
        <div className="flex w-full justify-between">
          <p className="w-4/6 font-semibold">Item</p>
          <p className="font-semibold w-1/6 text-center">Qty</p>
          <p className="font-semibold w-1/6 text-end">Price</p>
        </div>
        <div className="flex flex-col gap-6 overflow-y-scroll scrollbar-none">
          <RenderListCartItem cart={listCart} />
        </div>
      </div>
      <div className="mt-auto">
        <div className="mb-4 flex justify-between">
          <p className="text-textlight">Discount</p>
          <p className="font-medium">$0</p>
        </div>
        <div className="flex  justify-between">
          <p className="text-textlight">Sub total</p>
          <p className="font-medium">{totalCart}</p>
        </div>
        <div className="w-full py-[14px] mt-[42px]">
          <Sheet>
            <SheetTrigger asChild>
              <Button className="w-full h-full">Continue to Payment</Button>
            </SheetTrigger>
            <ModalPayment totalCart={totalCart} />
          </Sheet>
        </div>
      </div>
    </>
  );
};

export default Cart;
