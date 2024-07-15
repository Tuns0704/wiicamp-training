import { useState } from 'react';
import EditIcon from '@/components/icons/edit';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import formatCurrency from '@/helpers/format-currency';
import { IDishItem } from '@/types/dish-item';
import ModalProduct from '../modals/product-modal';
import DishesServices from '@/services/dishes';
import { useToast } from '@/components/ui/use-toast';

interface DishCardProps {
  item: IDishItem;
  reload: () => void;
}

function DishCard({ item, reload }: DishCardProps) {
  const [isOpenEditModal, setIsOpenEditModal] = useState<boolean>(false);

  const toggleEditModal = () => {
    setIsOpenEditModal(!isOpenEditModal);
  };

  const { toast } = useToast();
  const { updateDish } = DishesServices;

  const handleUpdateDish = async (body: Partial<IDishItem>) => {
    const response = await updateDish(item.id, body);
    if (response.status === 200) {
      reload();
      toggleEditModal();
    } else {
      toast({
        title: 'Error',
        description: 'Something went wrong',
      });
    }
  };

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
      <Dialog open={isOpenEditModal} onOpenChange={setIsOpenEditModal}>
        <DialogTrigger asChild>
          <div className="flex min-h-[3.25rem] w-full items-center justify-center gap-2 rounded-b-lg bg-primary/25 text-primary hover:cursor-pointer">
            <EditIcon />
            <p className="text-sm font-semibold">Edit</p>
          </div>
        </DialogTrigger>
        <ModalProduct dish={item} action={handleUpdateDish} />
      </Dialog>
    </div>
  );
}

export default DishCard;
