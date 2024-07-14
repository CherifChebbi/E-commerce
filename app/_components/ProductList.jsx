'use client'

import React from 'react'
import ProductItem from './ProductItem'

function ProductList({ productList }) {
    if (!productList || !Array.isArray(productList)) {
        return <div>No products available</div>;
    }

    return (
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4'>
            {productList.map(item => (
                <ProductItem product={item} key={item.id} />
            ))}
        </div>
    )
}

export default ProductList
