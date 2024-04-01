import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { EditProduct, NewProducts, Products } from './views';
import { action as newProductAction } from './views/NewProducts';
import { loader as productsLoader } from './views/Products';
import { loader as editProductsLoader, action as editProductAction } from './views/EditProduct';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Products />,
                loader: productsLoader
            },
            {
                path:'productos/nuevo',
                element: <NewProducts />,
                action: newProductAction
            },
            {
                path:'productos/:id/editar', // Roa Patter - Resource-oriented design
                element:<EditProduct />,
                loader: editProductsLoader,
                action: editProductAction
            }
        ]
    }
])