import { lazy } from 'react';
import DiscountIcon from '../components/icons/discount';
import GraphIcon from '../components/icons/graph';
import HomeIcon from '../components/icons/home';
import MessageIcon from '../components/icons/message';
import NotificationIcon from '../components/icons/notification';
import SettingIcon from '../components/icons/setting';
const HomePage = lazy(() => import('../features/home-page'));
const SettingPage = lazy(() => import('../features/setting-page'));

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
  },
];

export default routes;
