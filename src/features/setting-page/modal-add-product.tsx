import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

type ModalAddProductProps = {
  reload: () => void;
};

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name dishes must be at least 2 characters.',
  }),
  price: z.number().min(1, {
    message: 'Price must be at least 2 characters.',
  }),
  image: z.string().min(2, {
    message: 'Image must be at least 2 characters.',
  }),
  category: z.string().min(2, {
    message: 'Category must select',
  }),
  typeService: z.string().min(2, {
    message: 'Type service must select',
  }),
  available: z.number().min(1, {
    message: 'Available must be at least 1 characters.',
  }),
});

function ModalAddProduct({ reload }: ModalAddProductProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      price: 0,
      image: '',
      category: '',
      typeService: '',
      available: 0,
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    const response = await DishesServices.addDish(values);
    if (response.status === 201) {
      reload();
    }
  };

  return (
    <DialogContent className="w-[95vw] rounded-lg border-none bg-dark-bg2 text-white">
      <DialogHeader>
        <DialogTitle>Add new dishes</DialogTitle>
        <DialogDescription />
      </DialogHeader>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="grid sm:gap-3 sm:py-3"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    className="w-full rounded-lg border border-dark-linebase bg-dark-bg2 p-3 pr-6 text-white focus:outline-none"
                    {...field}
                    placeholder="Dish name"
                  />
                </FormControl>
                <FormMessage className="text-primary" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type="number"
                      className="w-full rounded-lg border border-dark-linebase bg-dark-bg2 p-3 pr-6 text-white focus:outline-none"
                      {...field}
                      placeholder="Price"
                      onChange={(e) => {
                        const value = parseFloat(e.target.value);
                        field.onChange(isNaN(value) ? '' : value);
                      }}
                    />
                    <div className="absolute right-3 top-3 text-textlight">
                      $
                    </div>
                  </div>
                </FormControl>

                <FormMessage className="text-primary" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image Path</FormLabel>
                <FormControl>
                  <Input
                    className="w-full rounded-lg border border-dark-linebase bg-dark-bg2 p-3 pr-6 text-white focus:outline-none"
                    {...field}
                    placeholder="Image path"
                  />
                </FormControl>
                <FormMessage className="text-primary" />
              </FormItem>
            )}
          />
          <div className="flex gap-4">
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem className="w-1/2">
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="border-2 border-dark-linebase bg-dark-bg2 py-3 font-medium text-white focus:ring-0">
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                      <SelectContent className="z-[999] border border-dark-linebase bg-dark-bg2 font-medium text-white">
                        {service.map((item) => (
                          <div key={item.value}>
                            {item.value !== 'All' && (
                              <SelectItem value={item.value}>
                                {item.name}
                              </SelectItem>
                            )}
                          </div>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage className="text-primary" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="typeService"
              render={({ field }) => (
                <FormItem className="w-1/2">
                  <FormLabel>Type Service</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full border-2 border-dark-linebase bg-dark-bg2 py-3 font-medium text-white focus:ring-0">
                        <SelectValue placeholder="Service" />
                      </SelectTrigger>
                      <SelectContent className="z-[999] border border-dark-linebase bg-dark-bg2 font-medium text-white">
                        {categories.map((item) => (
                          <div key={item.value}>
                            {item.value !== 'All' && (
                              <SelectItem value={item.value}>
                                {item.name}
                              </SelectItem>
                            )}
                          </div>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage className="text-primary" />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="available"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Available</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    className="w-full rounded-lg border border-dark-linebase bg-dark-bg2 p-3 pr-6 text-white focus:outline-none"
                    {...field}
                    placeholder="Available"
                    onChange={(e) => {
                      const value = parseFloat(e.target.value);
                      field.onChange(isNaN(value) ? '' : value);
                    }}
                  />
                </FormControl>
                <FormMessage className="text-primary" />
              </FormItem>
            )}
          />
          <DialogFooter>
            <Button className="mt-2" type="submit">
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  );
}

export default ModalAddProduct;
