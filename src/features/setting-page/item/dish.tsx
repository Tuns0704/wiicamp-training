import formatCurrency from '@/helpers/format-currency';
import { IDishItem } from '@/types/dish-item';
import EditIcon from '../../../components/icons/edit';

interface DishCardProps {
  item: IDishItem;
}

function DishCard({ item }: DishCardProps) {
  return (
    <div
      key={item.id}
      className="min-h-[299px] flex flex-col items-center justify-between pt-6 border border-dark-linebase rounded-lg"
    >
      <img
        src={item.image}
        alt={item.name}
        className="size-[127px] rounded-lg"
      />
      <div className="mb-4 flex flex-col justify-center items-center gap-2">
        <p className="text-white base:max-w-[144px] text-center text-sm font-medium mt-2">
          {item.name}
        </p>
        <p className="text-textlight text-sm">
          {formatCurrency(item.price)} • {item.available} Bowls
        </p>
      </div>
      <div className="min-h-[52px] flex items-center justify-center gap-2 bg-primary/25 w-full rounded-b-lg text-primary">
        <EditIcon />
        <p className="text-sm font-semibold ">Edit</p>
      </div>
    </div>
  );
}

export default DishCard;
