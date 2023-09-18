import React from 'react'
import Categories from '../Categories/Categories'

import ProductList from '../Products/ProductList'
import CurrentCat from '../Categories/CurrentCat'


export default function ProductsPage() {

    return (
        <div>
            <Categories />
            <CurrentCat />
            <ProductList />
        </div>
    )
}
