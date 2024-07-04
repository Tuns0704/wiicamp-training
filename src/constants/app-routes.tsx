import { lazy } from 'react';
import DiscountIcon from '@/components/icons/discount';
import GraphIcon from '@/components/icons/graph';
import HomeIcon from '@/components/icons/home';
import MessageIcon from '@/components/icons/message';
import NotificationIcon from '@/components/icons/notification';
import SettingIcon from '@/components/icons/setting';
import ProductsManagement from '@/features/setting-page/contents/product-management';

const HomePage = lazy(() => import('@/features/home-page'));
const SettingPage = lazy(() => import('@/features/setting-page'));

const routes = [
  {
    name: 'Home',
    path: '/',
    element: <HomePage />,
    icon: <HomeIcon />,
  },
  {
    name: 'Discount',
    path: '/discount',
    element: <HomePage />,
    icon: <DiscountIcon />,
  },
  {
    name: 'Graph',
    path: '/graph',
    element: <HomePage />,
    icon: <GraphIcon />,
  },
  {
    name: 'Message',
    path: '/message',
    element: <HomePage />,
    icon: <MessageIcon />,
  },
  {
    name: 'Notification',
    path: '/notification',
    element: <HomePage />,
    icon: <NotificationIcon />,
  },
  {
    name: 'Setting',
    path: '/setting',
    element: <SettingPage />,
    icon: <SettingIcon />,
    children: [
      {
        name: 'products-management',
        path: '/setting/products-management',
        element: <ProductsManagement />,
      },
      {
        name: 'notifications',
        path: '/setting/notifications',
        element: <ProductsManagement />,
      },
      {
        name: 'security',
        path: '/setting/security',
        element: <ProductsManagement />,
      },
      {
        name: 'about-us',
        path: '/setting/about-us',
        element: <ProductsManagement />,
      },
      {
        name: 'appereance',
        index: true,
        path: '/setting/appereance',
        element: <ProductsManagement />,
      },
      {
        name: 'your-restaurant',
        path: '/setting/your-restaurant',
        element: <ProductsManagement />,
      },
    ],
  },
];

export default routes;
