import { Container, Grid, Typography, FormControl, InputLabel, Select, MenuItem, Button, Link } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { styled, Box } from "@mui/system";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const MainImg = styled('img')({
    width: '100%',
});

const Img = styled('img')({
    width: '100%',
    cursor: 'pointer',
    '&:hover':{
        filter: 'opacity(70%)',
        //outline: '1px solid grey',
    }
});

function Product({addToCart}) {
    const navitgate = useNavigate();
    const {product} = useLocation().state;
    const [img, setImg] = useState(product.images[0][0]);
    const [color, setColor] = useState(product.colors[0]);
    const [size, setSize] = useState('M');
    const [quantity, setQuantity] = useState(1);

    function capitalize(str) {
        return str.substring(0,1).toUpperCase()+str.substring(1);
    }

    function handleColor(e) {
        setColor(e.target.value);
        const colorIndex = product.colors.findIndex(c => c == e.target.value);
        setImg(product.images[colorIndex][0]);
    }

    function handleSubmit(e) {
        e.preventDefault();
        let cartItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            image: img,
            quantity: quantity,
            color: null,
            size: null
        };
        if(product.colors.length > 1)
            cartItem.color = capitalize(color);
        if(product.hasSizes)
            cartItem.size = size;
        
        addToCart(cartItem);
    }

    return (
        <Container>
            <Link component="button" variant="button" onClick={() => navitgate('/shop')} sx={{display:{sm:'none'}}}>Back</Link>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <MainImg src={require(`../assets/${img}`)} alt="" />
                    <Grid container rowSpacing={3} columnSpacing={1} style={{marginTop: '25px'}}>
                        {product.images.map((array, i) => array.map((url, j) => <Grid item xs={3}>
                            <Img src={require(`../assets/${url}`)} alt="" onClick={() => setImg(url)} key={i+''+j}/>
                        </Grid>))}
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Link component="button" variant="button" onClick={() => navitgate('/shop')} sx={{display:{xs:'none', sm:'block'}}}>Back</Link>
                    <Typography variant="h4" sx={{margin: '20px 0 0 0'}}>{product.name}</Typography>
                    <Typography variant="h5" sx={{margin: '10px 0 50px 0'}}>${product.price}</Typography>
                    <form onSubmit={handleSubmit}>
                        <Box style={{display:'flex'}}>
                        {(product.colors.length > 1) ? 
                            <FormControl sx={{ width: 200, marginRight: 1, marginBottom: 3}}>
                                <InputLabel>Color</InputLabel>
                                <Select label="Color" value={color} onChange={handleColor}>
                                    {product.colors.map(c => <MenuItem key={c} value={c}>{capitalize(c)}</MenuItem>)}
                                </Select>
                            </FormControl> : <></>}
                        {(product.hasSizes) ? 
                        <FormControl sx={{ width: 200, marginBottom: 3 }}>
                            <InputLabel>Size</InputLabel>
                            <Select label="Size" value={size} onChange={e => setSize(e.target.value)}>
                                <MenuItem value="XS">XS</MenuItem>
                                <MenuItem value="S">S</MenuItem>
                                <MenuItem value="M">M</MenuItem>
                                <MenuItem value="L">L</MenuItem>
                                <MenuItem value="XL">XL</MenuItem>
                            </Select>
                        </FormControl> : <></>}
                        </Box>
                        <Box style={{maxWidth: 150}} mb={3}><FormControl fullWidth>
                            <InputLabel>Quanity</InputLabel>
                            <Select label="Quanity" value={quantity} onChange={e => setQuantity(e.target.value)} >
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                            </Select>
                        </FormControl></Box>
                        <Button type="submit" variant='outlined' size="large" fullWidth>Add To Cart</Button>
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
}
export default Product;