import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { connect } from 'react-redux'
import { setActiveCategory, setCategories, setProducts, setRenderList } from '../Reducers/CategoryReducer'
import { addToCart, removeFromCart } from '../Reducers/CartReducer'
import { Link } from 'react-router-dom'


function Product(props) {
    function handleAddToCart(product) {
        console.log(product)
        console.log(props.cart.cart)
        let found = props.cart.cart.filter(element => element.name === product.name)
        if (!found[0]) {
            
            props.addToCart(product)
        }
        else return
    }
    return (

        <Box bgcolor={'#eeeeee'} width={'300px'}>
            <Card >
                <CardMedia
                    component={'img'}
                    image={`https://source.unsplash.com/random?${props.name}`}
                    height={'200px'} />
                <CardContent sx={
                    {
                        textAlign: 'center'
                    }
                }>
                    <Typography variant='h5'>{props.product.name}</Typography>
                    <Typography variant='body1'>Price: {props.price}$</Typography>
                    <Typography variant='body1'>Stock: {props.inStock}</Typography>
                </CardContent>
                <CardActions sx={
                    {
                        justifyContent: 'center'
                    }
                } >
                    <Button onClick={() => handleAddToCart(props.product)} color={'secondary'}>Add to Cart</Button>
                    <Button color={'secondary'} component={Link} to={`/product/${props.product._id}`} >More Details</Button>
                </CardActions>
            </Card>
        </Box>

    )
}
const mapStateToProps = state => ({
    productManager: state.categoryReducer,
    cart: state.cartReducer

})
const mapDispatchToProps = {
    setActiveCategory,
    setCategories,
    setProducts,
    setRenderList,
    addToCart,
    removeFromCart
}
export default connect(mapStateToProps, mapDispatchToProps)(Product)
