import { safeParse } from 'valibot';
import axios from 'axios';
import { DraftProductSchema, ProductsSchema, Product, ProductSchema } from '../types/typesValibot';


type ProductData = {
    [k: string]: FormDataEntryValue;
}

export const updateProduct = async(data:ProductData, id: Product['id']) => {
    try {
        const result = safeParse(DraftProductSchema, {
            name: data.name,
            price: +data.price
        })

        if(result.success){
            const url = `${import.meta.env.VITE_API_URL}/api/products`;
            await axios.post(url, {
                name: result.output.name,
                price: result.output.price
            })
        }else{
            throw new Error('Datos no válidos')
        }

    } catch (error) {
        console.log(error)
    }
}
export const addProduct = async(data:ProductData) => {
    try {
        const result = safeParse(DraftProductSchema, {
            name: data.name,
            price: +data.price
        })

        if(result.success){
            const url = `${import.meta.env.VITE_API_URL}/api/products`;
            await axios.post(url, {
                name: result.output.name,
                price: result.output.price
            })
        }else{
            throw new Error('Datos no válidos')
        }

    } catch (error) {
        console.log(error)
    }
}

export const getProduct = async() => {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/products`;
        const { data } = await axios(url);
        const result = safeParse(ProductsSchema, data.data)
        if(result.success){
            return result.output
        }else{
            throw new Error('Error al cargar datos')
        }
    } catch (error) {
        console.log(error)
    }
} 

export const getProductById = async(id: Product['id']) => {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`;
        const { data } = await axios(url);
        const result = safeParse(ProductSchema, data.data)
        if(result.success){
            return result.output
        }else{
            throw new Error('Error al cargar datos')
        }
    } catch (error) {
        console.log(error)
    }
} 