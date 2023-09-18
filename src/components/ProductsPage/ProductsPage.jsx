import React from 'react'
import Categories from '../Categories/Categories'

import ProductList from '../Products/ProductList'
import CurrentCat from '../Categories/CurrentCat'
import TemporaryDrawer from '../SideDrawer/SideDrawer'


export default function ProductsPage() {

    return (
        <div>
            <Categories />
            <TemporaryDrawer />
            <CurrentCat />
            <ProductList />
        </div>
    )
}
