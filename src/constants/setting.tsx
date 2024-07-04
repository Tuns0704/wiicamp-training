import AboutUsIcon from '@/components/icons/about-us';
import AppereanceIcon from '@/components/icons/appereance';
import RestaurantIcon from '@/components/icons/restaurant';
import SecurityIcon from '@/components/icons/security';
import SettingDiscountIcon from '@/components/icons/setting-discount';
import SettingNotificationIcon from '@/components/icons/setting-notification';

const setting = [
  {
    id: 1,
    name: 'Appereance',
    icon: <AppereanceIcon />,
    path: 'appereance',
    description: 'Dark and Light mode, Font size',
  },
  {
    id: 2,
    name: 'Your Restaurant',
    icon: <RestaurantIcon />,
    path: 'your-restaurant',
    description: 'Dark and Light mode, Font size',
  },
  {
    id: 3,
    name: 'Products Management',
    icon: <SettingDiscountIcon />,
    path: 'products-management',
    description: 'Manage your product, pricing, etc',
  },
  {
    id: 4,
    name: 'Notifications',
    icon: <SettingNotificationIcon />,
    path: 'notifications',
    description: 'Customize your notifications',
  },
  {
    id: 5,
    name: 'Security',
    icon: <SecurityIcon />,
    path: 'security',
    description: 'Configure Password, PIN, etc',
  },
  {
    id: 6,
    name: 'About Us',
    icon: <AboutUsIcon />,
    path: 'about-us',
    description: 'Find out more about Posly',
  },
];

export default setting;
