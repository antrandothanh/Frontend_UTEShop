import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import CustomerLayout from './components/customer/CustomerLayout';
import CustomerAllProducts from './components/customer/CustomerAllProducts';
import CustomerProductDetail from './components/customer/CustomerProductDetail';
import CustomerCart from './components/customer/CustomerCart';
import CustomerSignIn from './components/customer/CustomerSignIn';

const router = createBrowserRouter([
  {
    path: "",
    element: <CustomerLayout />,
    children: [
      {
        path: "all-products",
        element: <CustomerAllProducts />
      },
      {
        path: "product-detail",
        element: <CustomerProductDetail />
      },
      {
        path: "cart",
        element: <CustomerCart />
      },
      {
        path: "sign-in",
        element: <CustomerSignIn />
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
