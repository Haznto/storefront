import { AppBar, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


function Header(props) {
    return (
        <AppBar position='static' color='secondary'>
            <Toolbar>

                <IconButton component={Link} to='/' size='large' color='inherit' edge='start'><StorefrontOutlinedIcon fontSize='large' /></IconButton>

                <Typography variant='h6' component={'div'} sx={{ flexGrow: 1 }}>Hasan's Store</Typography>
                <Stack>
                    <IconButton component={Link} to='/cart' color='inherit'><ShoppingCartOutlinedIcon fontSize='medium' /> ( {props.cart.cart.length} )</IconButton>
                </Stack>
            </Toolbar>

        </AppBar>
    )
}
const mapStateToProps = state => ({
    cart: state.cartReducer
})
export default connect(mapStateToProps)(Header)