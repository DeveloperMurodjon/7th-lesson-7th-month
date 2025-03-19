import { useNavigate, useParams } from 'react-router-dom'
import { useGetByIDQuery } from '../lib/productsApi'

function ProductDetails() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { data: product, error, isLoading } = useGetByIDQuery(id)

    function handleBack() {
        navigate("/")
    }

    if (error) {
        return (
            <div>
                {'Something went wrong :('}
            </div>)
    }

    if (isLoading) {
        return (
            <div>
                <i className='fa fa-circle-fa-circle-notch fa-spin' />
            </div>)
    }
    return (
        <div>
            {product &&
                <div className='flex container gap-5'>
                    <div className='  flex flex-shrink-0 w-full items-center '>
                        <img src={product.images[0]} alt={product.title} className='w-[500px] object-contain' />
                        <div className='flex flex-col items-start'>
                            <h2 className="font-bold text-4xl">{product.title}</h2>
                            <p className="font-medium my-6  text-lg ">{product.description}</p>
                            <p className="font-medium mb-4  bg-gray-700 p-0.5 rounded-sm text-sm">{product.category}</p>
                            <button className="bg-[#43d740] hover:bg-[#4a911f] px-2 py-1 inline-block text-white font-semibold rounded-sm" onClick={handleBack}>{`Go Back`}</button>
                        </div>
                    </div>
                </div>}
        </div>
    )
}

export default ProductDetails