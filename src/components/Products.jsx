import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setError, setIsLoading, setProducts } from '../lib/productsSlice'

function Products() {
    const dispatch = useDispatch()
    const BASE_URL = import.meta.env.VITE_BASE_URL || process?.env?.VITE_BASE_URL
    const limit = 10
    const [page, setPage] = useState(0)
    const { products, error, isLoading } = useSelector(state => state.products)

    useEffect(() => {
        const getProducts = async () => {
            dispatch(setIsLoading(true))
            try {
                const res = await axios(`${BASE_URL}/products?limit=${limit}&skip=${page * 10}`)
                dispatch(setProducts(res.data.products))
            }
            catch (error) {
                dispatch(setError(error.message))
            }
            finally {
                dispatch(setIsLoading(false))
            }
        }
        getProducts()
    }, [])

    return (
        <div>
            <h1>Products</h1>
            <div>{error ? (<div><i className='fa fa-times' />Somethinh went wrong :{'('}</div>) : isLoading ? (<div className='text-center text-3xl opacity-75 py-10'><i className='fa fa-circle-notch fa-spin'></i></div>) : (<div>awd</div>)}</div>
        </div>
    )
}

export default Products