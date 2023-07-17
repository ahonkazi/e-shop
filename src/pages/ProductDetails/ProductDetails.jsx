import React from 'react'
import { useParams } from 'react-router-dom'
import UseQuery from '../../hooks/UseQuery'

const ProductDetails = () => {
    const productId = UseQuery().get('id')
    console.log(productId)
    return (
        <>
         <div>ProductDetails</div>
         <div>ProductDetails after edit</div>
        </>
       
    )
}

export default ProductDetails