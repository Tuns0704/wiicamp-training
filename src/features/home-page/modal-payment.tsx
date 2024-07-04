import { PlusIcon } from 'lucide-react';
import { useState } from 'react';
import BackIcon from '@/components/icons/back';
import {
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import payment from '@/constants/payment-method';
import CheckMarkCircleIcon from '@/components/icons/checkmark-circle';
import RenderListCartItem from './list-carts';
import { useCartStore } from '@/stores/cart';

interface ModalPaymentProps {
  totalCart: string;
}

function ModalPayment({ totalCart }: ModalPaymentProps) {
  const { cart } = useCartStore();
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');

  return (
    <SheetContent
      side="right"
      className="w-full border-none bg-dark-bg2 p-0 sm:min-w-[80vw] lg:w-[60vw]"
    >
      <SheetHeader>
        <SheetTitle className="hidden" />
        <SheetDescription className="hidden" />
      </SheetHeader>
      <div className="min-w-screen flex h-screen flex-col overflow-y-scroll md:flex-row">
        <div className="flex h-screen w-full flex-col justify-between border-r border-dark-linebase p-6 text-white md:w-1/2">
          <div>
            <SheetClose className="mb-4 rounded-xl text-white">
              <BackIcon />
            </SheetClose>
            <div className="flex items-center justify-between border-b border-dark-linebase pb-6">
              <div>
                <h1 className="mb-2 text-[5.625rem] font-semibold leading-8 text-white">
                  Confirmation
                </h1>
                <p className="text-textlight">Orders #13242</p>
              </div>
              <button
                className="rounded-lg bg-primary p-[0.875rem] text-white"
                type="button"
                aria-label="plus meal"
              >
                <PlusIcon />
              </button>
            </div>
          </div>
          <div className="flex h-full flex-col gap-4 overflow-scroll pt-6 scrollbar-none">
            <RenderListCartItem cart={cart} />
          </div>
          <div className="border-t border-dark-linebase pb-[3.313rem] pt-5">
            <div className="mb-4 flex justify-between">
              <p className="text-textlight">Discount</p>
              <p className="font-medium">$0</p>
            </div>
            <div className="flex justify-between">
              <p className="text-textlight">Sub total</p>
              <p className="font-medium">{totalCart}</p>
            </div>
          </div>
        </div>
        <div className="flex min-h-screen w-full flex-col justify-between gap-6 border-r border-dark-linebase p-6 text-white md:w-1/2">
          <div>
            <div className="mb-4 rounded-xl text-transparent">
              <BackIcon />
            </div>
            <div className="border-b border-dark-linebase pb-6">
              <h1 className="mb-2 text-[1.75rem] font-semibold leading-8 text-white">
                Payment
              </h1>
              <p className="text-textlight">3 payment method available</p>
            </div>
          </div>
          <div className="h-full flex-col gap-4">
            <h2 className="text-xl font-semibold">Payment method</h2>
            <div className="flex gap-2 pt-4">
              {payment.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setPaymentMethod(item.name);
                  }}
                  type="button"
                  aria-label="select payment method"
                  className={`relative flex w-[6.313rem] flex-col items-center justify-center rounded-lg border py-[0.625rem] ${item.name === paymentMethod ? 'border-textlight text-white' : 'border-dark-linebase text-textlight'}`}
                >
                  <div className="h-fit w-fit">{item.icon}</div>
                  <p className="text-sm font-medium">{item.name}</p>
                  {item.name === paymentMethod && (
                    <div className="absolute right-2 top-2">
                      <CheckMarkCircleIcon />
                    </div>
                  )}
                </button>
              ))}
            </div>
            <div className="mt-4 flex w-full flex-col gap-4">
              <div>
                <label htmlFor="cardholdername">
                  Cardholder Name
                  <input
                    id="cardholdername"
                    type="text"
                    placeholder="Levi Ackerman"
                    className="mt-2 w-full rounded-lg border border-dark-linebase bg-dark-form p-[0.875rem] focus:outline-none focus:ring-0"
                  />
                </label>
              </div>
              <div>
                <label htmlFor="cardnumber">
                  Card Number
                  <input
                    id="cardnumber"
                    placeholder="2564 1421 0897 1244"
                    type="text"
                    className="mt-2 w-full rounded-lg border border-dark-linebase bg-dark-form p-[0.875rem] focus:outline-none focus:ring-0"
                  />
                </label>
              </div>
              <div className="flex w-full gap-2">
                <div className="w-1/2">
                  <label htmlFor="exp">
                    Expiration Date
                    <input
                      id="exp"
                      type="text"
                      placeholder="02/2022"
                      className="mt-2 w-full rounded-lg border border-dark-linebase bg-dark-form p-[0.875rem] focus:outline-none focus:ring-0"
                    />
                  </label>
                </div>
                <div className="w-1/2">
                  <label htmlFor="cardholdername">
                    CVV
                    <input
                      type="password"
                      placeholder="&#9679;&#9679;&#9679;"
                      className="mt-2 w-full rounded-lg border border-dark-linebase bg-dark-form p-[0.875rem] focus:outline-none focus:ring-0"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full gap-4">
            <button
              className="w-1/2 rounded-lg border border-primary py-[0.875rem] font-semibold text-primary"
              type="button"
              aria-label="button"
            >
              Cancle
            </button>
            <button
              type="submit"
              aria-label="button"
              className="w-1/2 rounded-lg border border-primary bg-primary py-[0.875rem] font-semibold text-white"
            >
              Confirm payment
            </button>
          </div>
        </div>
      </div>
    </SheetContent>
  );
}

export default ModalPayment;
