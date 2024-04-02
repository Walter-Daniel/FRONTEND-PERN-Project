import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { EditProduct, NewProducts, Products } from './views';
import { action as newProductAction } from './views/NewProducts';
import { loader as productsLoader, action as productsAction } from './views/Products';
import { loader as editProductsLoader, action as editProductAction } from './views/EditProduct';
import { action as deleteProductAction} from './components/ProductDetails';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Products />,
                loader: productsLoader,
                action: productsAction
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
            },
            {
                path:'productos/:id/eliminar',
                action: deleteProductAction
            }
        ]
    }
])