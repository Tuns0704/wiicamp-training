import EditIcon from '@/components/icons/edit';
import formatCurrency from '@/helpers/format-currency';
import { IDishItem } from '@/types/dish-item';

interface DishCardProps {
  item: IDishItem;
}

function DishCard({ item }: DishCardProps) {
  return (
    <div
      key={item.id}
      className="flex h-[15rem] flex-col items-center justify-between rounded-lg border border-dark-linebase pt-6 sm:h-[18.688rem]"
    >
      <img
        src={`/${item.image}`}
        alt={item.name}
        className="size-20 rounded-lg sm:size-[7.938rem]"
      />
      <div className="mb-4 flex flex-col items-center justify-center gap-2">
        <p className="mt-2 text-center text-sm font-medium text-white base:max-w-[9rem]">
          {item.name}
        </p>
        <p className="text-sm text-textlight">
          {formatCurrency(item.price)} • {item.available} Bowls
        </p>
      </div>
      <div className="flex min-h-[3.25rem] w-full items-center justify-center gap-2 rounded-b-lg bg-primary/25 text-primary">
        <EditIcon />
        <p className="text-sm font-semibold">Edit</p>
      </div>
    </div>
  );
}

export default DishCard;
