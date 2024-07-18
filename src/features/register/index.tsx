import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import AuthService from '@/services/auth';
import { authStoreActions } from '@/stores/auth';
import { toast } from '@/components/ui/use-toast';

const formSchema = z
  .object({
    username: z.string().nonempty('Name is required'),
    email: z
      .string()
      .nonempty('Email is required')
      .email('Invalid email address'),
    password: z.string().nonempty('Password is required'),
    confirmPassword: z.string().nonempty('Confirm password is required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

function Register() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onSubmit',
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  });

  const { setUser } = authStoreActions;
  const navigate = useNavigate();

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const response = await AuthService.register(data);
    if (response.status === 201) {
      form.reset();
      setUser(response.data);
      toast({
        title: 'Success',
        description: 'Register successfully',
      });
      navigate('/');
    }
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-3 base:w-[30vw]"
        >
          <h1 className="text-2xl font-bold text-white">Register</h1>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Username</FormLabel>
                <FormControl>
                  <Input
                    className="w-full rounded-lg border border-dark-linebase bg-dark-bg2 p-3 pr-6 text-white focus:outline-none"
                    {...field}
                    placeholder="Username"
                  />
                </FormControl>
                <FormMessage className="text-primary" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Email</FormLabel>
                <FormControl>
                  <Input
                    className="w-full rounded-lg border border-dark-linebase bg-dark-bg2 p-3 pr-6 text-white focus:outline-none"
                    {...field}
                    placeholder="Email"
                  />
                </FormControl>
                <FormMessage className="text-primary" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Password</FormLabel>
                <FormControl>
                  <Input
                    className="w-full rounded-lg border border-dark-linebase bg-dark-bg2 p-3 pr-6 text-white focus:outline-none"
                    {...field}
                    placeholder="Password"
                    type="password"
                  />
                </FormControl>
                <FormMessage className="text-primary" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    className="w-full rounded-lg border border-dark-linebase bg-dark-bg2 p-3 pr-6 text-white focus:outline-none"
                    {...field}
                    placeholder="Confirm Password"
                    type="password"
                  />
                </FormControl>
                <FormMessage className="text-primary" />
              </FormItem>
            )}
          />
          <Button className="mt-2 text-white" type="submit">
            Log in
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default Register;
