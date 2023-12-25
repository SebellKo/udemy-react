import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import RootLayout from './pages/Root';
import Error from './pages/Error';
import ProductDetailPage from './pages/ProductDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout></RootLayout>,
    errorElement: <Error></Error>,
    children: [
      { index: true, element: <HomePage></HomePage> },
      { path: 'products', element: <ProductsPage></ProductsPage> },
      {
        path: 'products/:productId',
        element: <ProductDetailPage></ProductDetailPage>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
