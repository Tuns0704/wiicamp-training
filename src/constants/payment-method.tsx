import PaypalIcon from '../components/icons/paypal';
import WalletIcon from '../components/icons/wallet';
import CreditCardIcon from '../components/icons/card';

const payment = [
  {
    id: 1,
    name: 'Credit Card',
    icon: <CreditCardIcon />,
  },
  {
    id: 2,
    name: 'Paypal',
    icon: <PaypalIcon />,
  },
  {
    id: 3,
    name: 'Cash',
    icon: <WalletIcon />,
  },
];

export default payment;
