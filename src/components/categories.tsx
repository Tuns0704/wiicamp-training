import meals from '@/constants/meals';

interface CategoriesProps {
  mealOption: string;
  setMealOption: (value: string) => void;
}

function Categories({ mealOption, setMealOption }: CategoriesProps) {
  return (
    <div className="flex gap-8 max-h-[33px]">
      {meals.map((item) => (
        <button
          onClick={() => setMealOption(item.value)}
          key={`${item.value}`}
          type="button"
          aria-label="select meal"
          className={`transition-all max-h-[33px] duration-300 ease-linear after:content-[""] relative min-w-fit pb-5  hover:cursor-pointer font-semibold text-sm after:transition-all after:duration-300 after:ease-linear after:w-2/3 after:h-[2px] after:absolute sm:after:-bottom-[0px] after:-bottom-[0px] after:left-0 after:rounded ${mealOption === item.value ? 'text-primary after:bg-primary' : 'text-white after:bg-transparent'}`}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default Categories;
