import { Container, Grid, Typography, FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material";
import { useLocation, Link } from "react-router-dom";
import { useState } from "react";
import { styled } from "@mui/system";
import { getSpaceUntilMaxLength } from "@testing-library/user-event/dist/utils";

const MainImg = styled('img')({
    width: '100%',
})

const Img = styled('img')({
    width: '100%',
    cursor: 'pointer',
    '&:hover':{
        filter: 'opacity(70%)',
        //outline: '1px solid grey',
    }
})

function Product() {
    const {product, image} = useLocation().state;
    const [img, setImg] = useState(product.images[0][0]);
    const [color, setColor] = useState(product.colors[0]);
    const [size, setSize] = useState('M');
    const [quantity, setQuantity] = useState(1);

    function handleColor(e) {
        setColor(e.target.value);
        const colorIndex = product.colors.findIndex(c => c == e.target.value);
        setImg(product.images[colorIndex][0]);
    }

    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <MainImg src={require(`../assets/${img}`)} alt="" />
                    <Grid container rowSpacing={3} columnSpacing={1} style={{marginTop: '25px'}}>
                        {product.images.map((array, i) => array.map((url, j) => <Grid item sm={3}>
                            <Img src={require(`../assets/${url}`)} alt="" onClick={() => setImg(url)} key={i+''+j}/>
                        </Grid>))}
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Link to='/shop'>Back</Link>
                    <Typography>{product.name}</Typography>
                    <Typography>${product.price}</Typography>
                    <form action="">
                        {(product.colors.length > 1) ? <FormControl>
                            <InputLabel>Color</InputLabel>
                            <Select label="Color" value={color} onChange={handleColor}>
                                {product.colors.map(c => <MenuItem key={c} value={c}>{c}</MenuItem>)}
                            </Select>
                        </FormControl> : <></>}
                        {(product.hasSizes) ? <FormControl>
                            <InputLabel>Size</InputLabel>
                            <Select label="Size" value={size} onChange={e => setSize(e.target.value)}>
                                <MenuItem value="XS">XS</MenuItem>
                                <MenuItem value="S">S</MenuItem>
                                <MenuItem value="M">M</MenuItem>
                                <MenuItem value="L">L</MenuItem>
                                <MenuItem value="XL">XL</MenuItem>
                            </Select>
                        </FormControl> : <></>}
                        <FormControl>
                            <InputLabel>Quanity</InputLabel>
                            <Select label="Quanity" value={quantity} onChange={e => setQuantity(e.target.value)}>
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                            </Select>
                        </FormControl>
                        <Button type="submit" variant='outlined' fullWidth>Add To Cart</Button>
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
}
export default Product;