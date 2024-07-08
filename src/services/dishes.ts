import { IDishItem } from '@/types/dish-item';
import instance from './axios-config';

const DishesServices = {
  getAllDishes: (searchParams: URLSearchParams) =>
    instance
      .get(`/dishes?${searchParams}`)
      .then((dishes) => dishes)
      .catch((err) => err),
  getDish: (id: number) =>
    instance
      .get(`/dishes/${id}`)
      .then((dish) => dish)
      .catch((err) => err),
  addDish: (body: Partial<IDishItem>) =>
    instance
      .post(`/dishes`, body)
      .then((dish) => dish)
      .catch((err) => err),
};

export default DishesServices;
