import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { connect } from 'react-redux'
import { setActiveCategory, setCategories, setProducts, setRenderList } from '../Reducers/CategoryReducer'


function Product(props) {

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
                    <Typography variant='body1'>Price: {props.price} inStock :{props.inStock}</Typography>
                </CardContent>
                <CardActions sx={
                    {
                        justifyContent: 'center'
                    }
                } >
                    <Button color={'secondary'}>Add to Cart</Button>
                    <Button color={'secondary'}>More Details</Button>
                </CardActions>
            </Card>
        </Box>

    )
}
const mapStateToProps = state => ({
    productManager: state
})
const mapDispatchToProps = {
    setActiveCategory,
    setCategories,
    setProducts,
    setRenderList
}
export default connect(mapStateToProps, mapDispatchToProps)(Product)
