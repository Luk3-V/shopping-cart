import { Container, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, Button, IconButton, Select, MenuItem } from "@mui/material";
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
                <Table sx={{ minWidth: 650 }} aria-label="cart table">
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
                                    <p>{item.name}</p>
                                    {(item.color)?<p>Color: {item.color}</p>:<></>}
                                    {(item.size)?<p>Size: {item.size}</p>:<></>} 
                                </TableCell>
                                <TableCell align="right">${item.price}</TableCell>
                                <TableCell align="right">  
                                    <Select size="small" value={item.quantity} onChange={e => setQuanity(i, e.target.value)}>
                                        <MenuItem value={1}>1</MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
                                        <MenuItem value={3}>3</MenuItem>
                                        <MenuItem value={4}>4</MenuItem>
                                        <MenuItem value={5}>5</MenuItem>
                                    </Select>
                                </TableCell>
                                <TableCell align="right">${item.price * item.quantity}</TableCell>
                                <TableCell align="right">
                                    <IconButton onClick={() => removeFromCart(i)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>    
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TableContainer component={Box}>
                <Table sx={{ float:'right', maxWidth: '50%' }} aria-label="total table">
                    <TableBody>
                        <TableRow>
                            <TableCell>SUBTOTAL</TableCell>
                            <TableCell align="right">${subtotal.toFixed(2)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>{`TAX (${(TAX_RATE * 100).toFixed(0)} %)`}</TableCell>
                            <TableCell align="right">${tax.toFixed(2)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell  sx={{ border: 0 }}>TOTAL</TableCell>
                            <TableCell align="right" sx={{ border: 0 }}>${total.toFixed(2)}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Button variant="outlined" sx={{ float:'right', width: '50%' }}>Checkout</Button>
        </Container>
    );
}
export default Cart;