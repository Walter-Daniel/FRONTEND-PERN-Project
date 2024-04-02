import { coerce, number, parse, safeParse } from 'valibot';
import axios from 'axios';
import { DraftProductSchema, ProductsSchema, Product, ProductSchema } from '../types/typesValibot';
import { toBoolean } from '../utilities';


type ProductData = {
    [k: string]: FormDataEntryValue;
}

export const updateProduct = async(data:ProductData, id: Product['id']) => {
    const NumberSchema = coerce(number(), Number)
    try {
        const result = safeParse(ProductSchema, {
            id,
            name: data.name,
            price: parse(NumberSchema, data.price),
            availability: toBoolean(data.availability.toString())
        })

        if(result.success){
          const url = `${import.meta.env.VITE_API_URL}/api/products/${id}` 
          await axios.put(url, result.output) 
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