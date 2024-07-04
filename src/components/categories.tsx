import categories from '@/constants/categories';

interface CategoriesProps {
  categoryOption: string;
  setCategoryOption: (value: string) => void;
}

function Categories({ categoryOption, setCategoryOption }: CategoriesProps) {
  return (
    <div className="flex max-h-[2.063rem] gap-8">
      {categories.map((item) => (
        <button
          onClick={() => setCategoryOption(item.value)}
          key={`${item.value}`}
          type="button"
          aria-label="select meal"
          className={`relative max-h-[2.063rem] min-w-fit pb-5 text-sm font-semibold transition-all duration-300 ease-linear after:absolute after:-bottom-[0rem] after:left-0 after:h-[0.125rem] after:w-2/3 after:rounded after:transition-all after:duration-300 after:ease-linear after:content-[""] hover:cursor-pointer sm:after:-bottom-[0rem] ${categoryOption === item.value ? 'text-primary after:bg-primary' : 'text-white after:bg-transparent'}`}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default Categories;
