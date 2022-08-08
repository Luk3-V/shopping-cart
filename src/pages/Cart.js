import { Container, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, Button, IconButton, Select, MenuItem, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import DeleteIcon from '@mui/icons-material/Delete';

const Img = styled('img')({
    width: '100px'
});

function Cart({cart, removeFromCart, setQuanity}) {
    

    function getSubtotal(items) {
        return items.map(({ price, quantity }) => price*quantity).reduce((sum, n) => sum + n, 0);
    }

    const TAX_RATE = 0.07;
    const subtotal = getSubtotal(cart);
    const tax = TAX_RATE * subtotal;
    const total = subtotal + tax;

    return (
        <Container>
            <TableContainer component={Paper}>
                <Table sx={{ display:{xs:'none', md:'table'},minWidth: 650 }} aria-label="cart table">
                    <TableHead>
                        <TableRow>
                            <TableCell padding="checkbox"></TableCell>
                            <TableCell>PRODUCT</TableCell>
                            <TableCell align="right">PRICE</TableCell>
                            <TableCell align="right">QUANITY</TableCell>
                            <TableCell align="right">TOTAL</TableCell>
                            <TableCell padding="checkbox"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cart.map((item, i) => (<TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    <Img src={require(`../assets/${item.image}`)} alt=""/>
                                </TableCell>
                                <TableCell>
                                    <Typography variant='subtitle1' mb={1}>{item.name}</Typography>
                                    {(item.color)?<span style={{paddingRight: 20}}>Color: {item.color}</span>:<></>}
                                    {(item.size)?<span>Size: {item.size}</span>:<></>} 
                                </TableCell>
                                <TableCell align="right"><Typography variant="body1">${item.price}</Typography></TableCell>
                                <TableCell align="right">  
                                    <Select size="small" value={item.quantity} onChange={e => setQuanity(i, e.target.value)}>
                                        <MenuItem value={1}>1</MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
                                        <MenuItem value={3}>3</MenuItem>
                                        <MenuItem value={4}>4</MenuItem>
                                        <MenuItem value={5}>5</MenuItem>
                                    </Select>
                                </TableCell>
                                <TableCell align="right"><Typography variant="body1">${item.price * item.quantity}</Typography></TableCell>
                                <TableCell align="right">
                                    <IconButton onClick={() => removeFromCart(i)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>    
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                <Table sx={{ display:{xs:'table', md:'none'} }} aria-label="cart table">
                    <TableBody>
                        {cart.map((item, i) => (<TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row" padding="checkbox">
                                    <Img src={require(`../assets/${item.image}`)} alt=""/>
                                </TableCell>
                                <TableCell>
                                    <Typography variant='subtitle1' mb={1}>{item.name}</Typography>
                                    {(item.color)?<span style={{paddingRight: 20}}>Color: {item.color}</span>:<></>}
                                    {(item.size)?<span>Size: {item.size}</span>:<></>} 
                                    <Box sx={{ display:'flex', justifyContent: 'space-between', marginTop: 2}}>
                                        <div>
                                            <Typography variant="overline">PRICE</Typography>
                                            <Typography variant="body1">${item.price}</Typography> 
                                        </div>
                                        <div>
                                            <Typography variant="overline">QUANITITY</Typography>
                                            <Select size="small" value={item.quantity} onChange={e => setQuanity(i, e.target.value)} sx={{display:'flex'}}>
                                                <MenuItem value={1}>1</MenuItem>
                                                <MenuItem value={2}>2</MenuItem>
                                                <MenuItem value={3}>3</MenuItem>
                                                <MenuItem value={4}>4</MenuItem>
                                                <MenuItem value={5}>5</MenuItem>
                                            </Select>
                                        </div>
                                        <div>
                                            <Typography variant="overline">TOTAL</Typography>
                                            <Typography variant="body1">${item.price * item.quantity}</Typography>
                                        </div>
                                        <div>
                                            <IconButton onClick={() => removeFromCart(i)}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </div>
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TableContainer component={Box}>
                <Table sx={{ float:'right', width: '50%', minWidth:'400px', '@media (max-width:600px)':{width: '100%', minWidth:'0'} }} aria-label="total table">
                    <TableBody>
                        <TableRow>
                            <TableCell>SUBTOTAL</TableCell>
                            <TableCell align="right"><Typography variant="body1">${subtotal.toFixed(2)}</Typography></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>{`TAX (${(TAX_RATE * 100).toFixed(0)} %)`}</TableCell>
                            <TableCell align="right"><Typography variant="body1">${tax.toFixed(2)}</Typography></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell  sx={{ border: 0 }}>TOTAL</TableCell>
                            <TableCell align="right" sx={{ border: 0 }}><Typography variant='h5'>${total.toFixed(2)}</Typography></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Button variant="outlined" sx={{ marginTop: 3, float:'right', width: '50%', minWidth:'400px', '@media (max-width:600px)':{width: '100%', minWidth:'0'} }} size="large">Checkout</Button>
        </Container>
    );
}
export default Cart;