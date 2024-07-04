import { useCallback, useEffect, useState } from 'react';
import formatCurrency from '../../helpers/format-currency';
import { useCartStore } from '../../stores/cart';
import ModalPayment from './modal-payment';
import RenderListCartItem from './list-carts';
import service from '../../constants/service';
import { Button } from '../../components/ui/button';
import { Sheet, SheetTrigger } from '../../components/ui/sheet';

function Carts() {
  const { cart } = useCartStore();
  const [listCart, setListCart] = useState(cart);
  const [totalCart, setTotalCart] = useState('');
  const [selectedServiceOption, setSelectedServiceOption] = useState(
    service[0].value,
  );

  const handCalculateTotalcart = useCallback(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return formatCurrency(total);
  }, [cart]);

  const handleSelectType = (value: string) => {
    setSelectedServiceOption(value);
  };

  useEffect(() => {
    setTotalCart(handCalculateTotalcart());
    let filteredCart = cart;
    if (selectedServiceOption !== 'All') {
      filteredCart = cart.filter(
        (item) => item.typeService === selectedServiceOption,
      );
    }

    setListCart(filteredCart);
  }, [cart, handCalculateTotalcart, selectedServiceOption]);

  return (
    <div className="flex max-h-[calc(100vh-5.938rem)] min-h-[calc(100vh-12.5rem)] w-full flex-col gap-6 bg-dark-bg2 p-6 text-white sm:max-h-screen sm:min-h-screen lg:min-w-[40vw] base:min-w-[35vw] xl:min-w-[30vw]">
      <h1 className="text-xl font-semibold">Order #13242</h1>
      <div className="flex gap-2">
        {service.map((item) => (
          <button
            onClick={() => handleSelectType(item.value)}
            key={item.value}
            type="button"
            aria-label="select service"
            className={`rounded-lg border px-3 py-[0.438rem] font-medium hover:cursor-pointer ${item.value === selectedServiceOption ? 'border-primary bg-primary text-white' : 'border border-dark-linebase text-primary'}`}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-6 overflow-y-scroll scrollbar-none">
        <div className="flex w-full justify-between">
          <p className="w-4/6 font-semibold">Item</p>
          <p className="w-1/6 text-center font-semibold">Qty</p>
          <p className="w-1/6 text-end font-semibold">Price</p>
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
        <div className="flex justify-between">
          <p className="text-textlight">Sub total</p>
          <p className="font-medium">{totalCart}</p>
        </div>
        <div className="mt-[2.625rem] w-full">
          <Sheet>
            <SheetTrigger asChild>
              <Button className="h-full w-full py-[0.875rem]">
                Continue to Payment
              </Button>
            </SheetTrigger>
            <ModalPayment totalCart={totalCart} />
          </Sheet>
        </div>
      </div>
    </div>
  );
}

export default Carts;
