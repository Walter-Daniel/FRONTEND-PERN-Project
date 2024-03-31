import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { NewProducts, Products } from './views';
import { action as newProductAction } from './views/NewProducts';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Products />
            },
            {
                path:'productos/nuevo',
                element: <NewProducts />,
                action: newProductAction
            }
        ]
    }
])