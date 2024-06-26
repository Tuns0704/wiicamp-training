import getFormatCurrentDate from '../../helpers/get-format-current-date';
import SearchIcon from './../../components/icons/search';

const Header = () => {
  return (
    <div className="flex flex-col gap-2 sm:gap-0 sm:flex-row justify-between items-center mb-6">
      <div className="text-center sm:text-start">
        <h1 className="text-white text-lg sm:text-2xl font-semibold">
          Jaerga Restro
        </h1>
        <p className="text-textlighter text-sm sm:text-base">
          {getFormatCurrentDate()}
        </p>
      </div>
      <div className="flex w-fit gap-3 p-[14px] bg-darkbgbase outline outline-darklinebase rounded-md  justify-center items-center">
        <SearchIcon />
        <input
          type="text"
          className="bg-darkbgbase w-[200px] focus:outline-none focus:ring-0 focus:text-white placeholder:text-textlight"
          placeholder="Search for food, coffe, etc..."
        />
      </div>
    </div>
  );
};

export default Header;
