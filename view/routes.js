import Home from './views/Home/Home';
import Test from './views/test/test2';

const routes = [
  {
    path: '/',
    name: 'Home',
    description: '',
    component: Home
  },
  {
    path: '/test',
    name: 'Test',
    description: '',
    component: Test
  },
  {
    path: '/*',
    name: 'other',
    description: '',
    component: Home
  },

];

export default routes;
