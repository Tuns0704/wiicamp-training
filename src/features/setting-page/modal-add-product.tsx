import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import categories from '@/constants/categories';
import service from '@/constants/service';
import DishesServices from '@/services/dishes';

type ModalAddProductProps = {
  reload: () => void;
};

function ModalAddProduct({ reload }: ModalAddProductProps) {
  const [product, setProduct] = useState({
    name: '',
    price: 0,
    image: '',
    category: '',
    typeService: '',
    available: 0,
  });

  const handleChangeCategory = (value: string) => {
    setProduct((prev) => ({ ...prev, category: value }));
  };

  const handleChangeService = (value: string) => {
    setProduct((prev) => ({ ...prev, typeService: value }));
  };

  const handleChangeProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const body = {
      ...product,
      price: Number(product.price),
      available: Number(product.available),
    };

    const response = await DishesServices.addDish(body);
    if (response.status === 201) {
      reload();
    }
  };

  return (
    <DialogContent className="w-[95vw] border-none bg-dark-bg2 text-white">
      <DialogHeader>
        <DialogTitle>Add new dishes</DialogTitle>
        <DialogDescription />
      </DialogHeader>
      <div className="grid gap-3 py-3">
        <input
          name="name"
          className="rounded-lg border border-dark-linebase bg-dark-bg2 p-3 text-white focus:outline-none"
          type="text"
          placeholder="Dish name"
          onChange={handleChangeProduct}
          value={product.name}
        />
        <div className="relative">
          <input
            name="price"
            className="w-full rounded-lg border border-dark-linebase bg-dark-bg2 p-3 pr-6 text-white focus:outline-none"
            type="number"
            onChange={handleChangeProduct}
            value={product.price}
            placeholder="Price"
          />
          <div className="absolute right-3 top-3 text-textlight">$</div>
        </div>
        <input
          name="image"
          onChange={handleChangeProduct}
          value={product.image}
          className="w-full rounded-lg border border-dark-linebase bg-dark-bg2 p-3 text-white focus:outline-none"
          type="text"
          placeholder="Image path"
        />
        <div className="flex gap-4">
          <Select
            name="category"
            value={product.category}
            onValueChange={handleChangeCategory}
          >
            <SelectTrigger className="w-1/2 border-2 border-dark-linebase bg-dark-bg2 py-3 font-medium text-white focus:ring-0">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent className="z-[999] border border-dark-linebase bg-dark-bg2 font-medium text-white">
              {service.map((item) => (
                <div key={item.value}>
                  {item.value !== 'All' && (
                    <SelectItem value={item.value}>{item.name}</SelectItem>
                  )}
                </div>
              ))}
            </SelectContent>
          </Select>
          <Select
            value={product.typeService}
            onValueChange={handleChangeService}
          >
            <SelectTrigger className="w-1/2 border-2 border-dark-linebase bg-dark-bg2 py-3 font-medium text-white focus:ring-0">
              <SelectValue placeholder="Service" />
            </SelectTrigger>
            <SelectContent className="z-[999] border border-dark-linebase bg-dark-bg2 font-medium text-white">
              {categories.map((item) => (
                <div key={item.value}>
                  {item.value !== 'All' && (
                    <SelectItem value={item.value}>{item.name}</SelectItem>
                  )}
                </div>
              ))}
            </SelectContent>
          </Select>
        </div>
        <input
          className="w-full rounded-lg border border-dark-linebase bg-dark-bg2 p-3 text-white focus:outline-none"
          type="number"
          value={product.available}
          name="available"
          onChange={handleChangeProduct}
          placeholder="Available"
        />
      </div>
      <DialogFooter>
        <Button type="submit" onClick={handleSubmit}>
          Save changes
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}

export default ModalAddProduct;
