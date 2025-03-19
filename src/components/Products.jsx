import React, { useState } from 'react'
import ProductCard from './ProductCard'
import productsApi, { useAddProductMutation, useGetAllQuery } from '../lib/productsApi'
import { useDispatch } from 'react-redux'

function Products() {
    const limit = 10
    const [page, setPage] = useState(0)
    const { data, error, isLoading } = useGetAllQuery()
    const dispatch = useDispatch()
    const [addProduct] = useAddProductMutation()


    const formSubmit = async e => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const title = formData.get('title')
        if (!title.trim()) return alert("Mahsulot nomini kiriting!")
        const res = await addProduct({ title })
        dispatch(productsApi.util.resetApiState())
    }

    return (
        <div>
            <h1 className='my-4 ml-8'>Products</h1>
            <form className='ml-8 my-4' onSubmit={formSubmit}>
                <input type="text " name="title" className='border p-0 m-0 rounded-md bg-[#43d740]' />
                <button className='bg-[#4a911f] hover:bg-[#43d740] '>Add</button>
            </form>
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
