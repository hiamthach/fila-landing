import { RouteProps } from 'react-router-dom';

import HomePage from '@/pages/HomePage';

import NoResponsiblePage from '@/pages/NoResponsiblePage';

const routes: RouteProps[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/no-responsible',
    element: <NoResponsiblePage />,
  },
];

export default routes;
