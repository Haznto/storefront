import React from 'react'
import { connect } from 'react-redux'
import { Box, Button, Container, Grid, List, ListItem, TextField, Typography } from '@mui/material'


function Cart(props) {
    return (
        <div style={{ minHeight: '100vh' }}>
            <div >
                <Container maxWidth="sm">
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom textTransform={'uppercase'} marginTop={'40px'}>
                        My Cart
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        Checkout
                    </Typography>
                </Container>
            </div>
            <Box display='flex' flexDirection="column" justifyContent='center' width='40%' height='40%' margin='auto' bgcolor='#F4EEEE' borderRadius='16px' boxShadow='3px 2px #B4B4B371'>

                <List direction={'row'} gap={'15px'} justifyContent='center' sx={{ width: '100%' }} flexWrap={'wrap'} margin={'auto'} marginY={'50px'}  >
                    <ListItem sx={{ display: "flex", justifyContent: 'space-between', width: '100%' }} > <span style={{ fontWeight: '700' }}>Item </span> <span style={{ fontWeight: '700' }}>Price$</span> </ListItem>
                    {props.cart.cart?.map(product => <ListItem sx={{ display: "flex", justifyContent: 'space-between', width: '100%' }} > <span>{product.name} </span> <span>{product.price}$</span> </ListItem>)}
                </List>

                <Typography textAlign='center' fontWeight='700'>Total {Math.floor(props.cart.cart?.reduce((a, b) => a + b.price, 0))}$</Typography>
                <Box marginTop='30px'>
                    <Grid container >
                        <Grid item xs={12} sm={12} md ga>
                            <Typography variant="h6" gutterBottom textAlign='center' >
                                Billing Address
                            </Typography>
                            <Box display='flex' flexDirection='column' alignItems='center'>
                                <TextField id="name" name="name" label="Full Name" />
                                <TextField id="address" name="address" label="Address" />
                                <TextField id="city" name="city" label="City" />
                                <TextField id="state" name="state" label="State" />
                                <TextField id="zip" name="zip" label="zip" />
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} gap={2} display='flex' direction='column' >
                            <Typography variant="h6" gutterBottom textAlign='center'>
                                Payment details
                            </Typography>
                            <Box display='flex' flexDirection='column' alignItems='center' height='100%' >
                                <TextField

                                    label="Expiration"
                                    type="date"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />

                                <TextField id="cc_number" name="cc_number" label="Credit Card #" />
                                <TextField id="cvv" name="cvv" label="CVV" />
                            </Box>
                            <Button variant="contained" color="secondary" onClick={() => alert('Thank you for your purchase')}>Place Your Order</Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </div >
    )
}

const mapStateToProps = state => ({
    productManager: state,
    cart: state.cartReducer
})

export default connect(mapStateToProps)(Cart)