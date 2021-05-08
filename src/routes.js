import Home from './Home';
import ItemDetails from './ItemDetails';
import PageNotFound from './PageNotFound';
import CartCheckoutWrapper from './CartCheckoutWrapper';
import LoginScreen from './LoginScreen';

const routes = [
  {
    path: '/',
    redirect: {
      name: 'login',
    },
  },

  {
    path: '/login',
    component: LoginScreen,
    name: 'login',
  },

  {
    path: '/home',
    component: Home,
    name: 'home',
  },

  {
    path: '/item-details',
    component: ItemDetails,
    name: 'ItemDetails',
  },
  {
    path: '/checkout',
    component: CartCheckoutWrapper,
    name: 'CartCheckoutWrapper',
  },
  {
    path: '*',
    component: PageNotFound,
    name: 'PageNotFound',
  },
];

export default routes;
