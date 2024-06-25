import DiscountIcon from '../components/icons/discount';
import GraphIcon from '../components/icons/graph';
import HomeIcon from '../components/icons/home';
import React from 'react';
import MessageIcon from '../components/icons/message';
import NotificationIcon from '../components/icons/notification';
import SettingIcon from '../components/icons/setting';
import HomePage from '../features/home-page';

export const routes = [
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
    element: <HomePage />,
    icon: <SettingIcon />,
  },
];
