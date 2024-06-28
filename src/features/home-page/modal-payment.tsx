import { PlusIcon } from 'lucide-react';
import BackIcon from '../../components/icons/back';
import {
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '../../components/ui/sheet';
import payment from '../../constants/payment-method';
import { useState } from 'react';
import CheckMarkCircleIcon from '../../components/icons/checkmark-circle';
import RenderListCartItem from './list-carts';
import useCartStore from '../../stores/cart';

interface ModalPaymentProps {
  totalCart: string;
}

const ModalPayment = ({ totalCart }: ModalPaymentProps) => {
  const { cart } = useCartStore();
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');

  return (
    <SheetContent
      side={'right'}
      className="bg-darkbg2 p-0 border-none w-full sm:min-w-[80vw] lg:w-[60vw]"
    >
      <SheetHeader>
        <SheetTitle className="hidden"></SheetTitle>
        <SheetDescription className="hidden"></SheetDescription>
      </SheetHeader>
      <div className="flex flex-col h-screen overflow-y-scroll md:flex-row min-w-screen">
        <div className="w-full md:w-1/2 flex flex-col justify-between text-white p-6 h-screen border-r border-darklinebase">
          <div>
            <SheetClose className="text-white rounded-xl mb-4">
              <BackIcon />
            </SheetClose>
            <div className="flex justify-between pb-6 border-b border-darklinebase items-center">
              <div>
                <h1 className="text-white text-[28px] leading-8 mb-2 font-semibold">
                  Confirmation
                </h1>
                <p className="text-textlight">Orders #13242</p>
              </div>
              <button className="bg-primary text-white p-[14px] rounded-lg">
                <PlusIcon />
              </button>
            </div>
          </div>
          <div className="flex h-full overflow-scroll scrollbar-none pt-6 flex-col gap-4">
            <RenderListCartItem cart={cart} />
          </div>
          <div className="pt-5 border-t border-darklinebase pb-[53px]">
            <div className="mb-4 flex justify-between">
              <p className="text-textlight">Discount</p>
              <p className="font-medium">$0</p>
            </div>
            <div className="flex  justify-between">
              <p className="text-textlight">Sub total</p>
              <p className="font-medium">{totalCart}</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-between text-white p-6 h-screen border-r border-darklinebase">
          <div>
            <div className=" text-transparent  rounded-xl mb-4">
              <BackIcon />
            </div>
            <div className="pb-6 border-b border-darklinebase">
              <h1 className="text-white text-[28px] leading-8 mb-2 font-semibold">
                Payment
              </h1>
              <p className="text-textlight">3 payment method available</p>
            </div>
          </div>
          <div className="h-full flex-col pt-6">
            <h2 className="text-xl font-semibold">Payment method</h2>
            <div className="flex gap-2 pt-4">
              {payment.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    setPaymentMethod(item.name);
                  }}
                  className={` relative flex flex-col rounded-lg border py-[10px] min-w-[101px] justify-center items-center ${item.name === paymentMethod ? 'border-textlight text-white' : 'border-darklinebase text-textlight'}`}
                >
                  <div className="w-fit h-fit">{item.icon}</div>
                  <p className="font-medium text-sm">{item.name}</p>
                  {item.name === paymentMethod && (
                    <div className="absolute top-2 right-2">
                      <CheckMarkCircleIcon />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div></div>
          </div>
          <div className="w-full flex gap-4">
            <button className="w-1/2 py-[14px] border border-primary rounded-lg text-primary font-semibold">
              Cancle
            </button>
            <button className="w-1/2 py-[14px] bg-primary border border-primary rounded-lg text-white font-semibold ">
              Confirm payment
            </button>
          </div>
        </div>
      </div>
    </SheetContent>
  );
};

export default ModalPayment;
