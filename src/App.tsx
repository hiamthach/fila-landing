import { Routes, Route, RouteProps } from 'react-router-dom';

import routes from './config/routes';
import history from './config/routes/history';
import CustomRouter from './config/routes/CustomRouter';

import NotFoundPage from './pages/NotFoundPage';
import MainLayout from './components/layout/MainLayout';
import './styles/index.css';

import 'swiper/css';

function App() {
  const renderRouter = (routes: RouteProps[]) => {
    return routes.map((route, index) => (
      <Route path={route.path} key={index} element={route.element} />
    ));
  };
  return (
    <CustomRouter history={history}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {renderRouter(routes)}
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </CustomRouter>
  );
}

export default App;
