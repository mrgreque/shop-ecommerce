import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import BasePageTemplate from './components/template/basePage';
import Home from './components/pages/home';
import ErrorPage from './components/pages/error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BasePageTemplate />,
    errorElement: <ErrorPage type="notFound" />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
  {
    path: '*',
    element: <BasePageTemplate />,
    children: [
      {
        path: '*',
        element: <ErrorPage type="notFound" />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
);
