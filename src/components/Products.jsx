import React, { useState } from 'react'
import ProductCard from './ProductCard'
import { useGetAllQuery } from '../lib/productsApi'

function Products() {
    const limit = 10
    const [page, setPage] = useState(0)


    const { data, error, isLoading } = useGetAllQuery()
    return (
        <div>
            <h1 className='my-4 ml-8'>Products</h1>
            {error ? (
                <div className=' ml-8 text-2xl '><i className='fa fa-times pr-1' />Something went wrong :{'('}</div>
            ) : isLoading ? (
                <div className='text-center text-3xl opacity-75 py-10'><i className='fa fa-circle-notch fa-spin'></i></div>
            ) : (
                <div className='grid grid-cols-4 gap-2 px-9'>
                    {data.products?.map((p) => (<ProductCard key={p.id} product={p} />))}
                </div>
            )}
        </div>
    )
}

export default Products
