const OrderCart = () => {
  return (
    <div className="hidden lg:flex lg:flex-col gap-6 p-6  md:min-w-[40vw] text-white bg-darkbg2">
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
      <div className="flex">
        <p>Item</p>
        <p>Qty</p>
        <p>Price</p>
      </div>
    </div>
  );
};

export default OrderCart;
