import dishes from './../../constants/dishes';
import Header from './header';
import OrderCart from './order-cart';
import CardItem from './card-item';
import FilterMenu from './filter-menu';
import HeaderListItem from './header-list-item';

function HomePage() {
  return (
    <div className="flex justify-between max-h-screen">
      <div className="md:min-w-[60vw] w-full max-h-screen flex flex-col px-6 mt-6">
        <Header />
        <FilterMenu />
        <HeaderListItem />
        <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-5 lg:gap-7 flex-grow overflow-y-scroll scrollbar-none">
          {dishes.map((item, index) => (
            <CardItem key={index} item={item} />
          ))}
        </div>
        <div />
      </div>
      <OrderCart />
    </div>
  );
}

export default HomePage;
