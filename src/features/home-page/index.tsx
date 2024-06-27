import dishes from '../../constants/dishes';
import Header from './header';
import OrderCart from './order-cart';
import CardFoodItem from './food-item';

function HomePage() {
  return (
    <div className="flex flex-col lg:flex-row justify-between md:max-h-screen">
      <div className="md:min-w-[50vw] w-full max-h-screen flex flex-col px-6 mt-6">
        <Header />
        <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-5 lg:gap-7 flex-grow overflow-y-scroll scrollbar-none">
          {dishes.map((item, index) => (
            <CardFoodItem key={index} item={item} />
          ))}
        </div>
        <div />
      </div>
      <div className="lg:block md:min-w-[35vw]">
        <OrderCart />
      </div>
    </div>
  );
}

export default HomePage;
