import { Container, Grid, Paper, Typography } from "@mui/material";
import { styled, Box, width } from "@mui/system";
import { Link } from "react-router-dom";

import products from '../data/products.json';

const ItemLink = styled(Link)({
    display: 'block',
    textAlign: 'center',
    color: 'black',
    textDecoration: 'none',
    '&:hover':{
        textDecoration: 'underline',
    }
})
const ItemImg = styled('img')({
    maxWidth: '250px',
    margin:'auto',
    transition: '.5s'
})

function Shop() {
    function changeImage(target, url) {
        target.src = require('../assets/'+url);
    }

    return (
        <Container>
            <Grid container spacing={3}>
                {products.map((item) => (
                    <Grid item xs={12} sm={6} md={4} key={item.id}>
                        <ItemLink to={{pathname: `/shop/products/${item.name.replaceAll(' ', '-')}`}} state={{product: item, image: item.images[0][0]}}>
                            <ItemImg src={require('../assets/'+item.images[0][0])} alt="" onMouseOver={e => changeImage(e.target, item.images[0][1])} onMouseOut={e => changeImage(e.target, item.images[0][0])}/>
                            <Typography>{item.name}</Typography>
                            <Typography>${item.price}</Typography>
                            <Typography>{item.colors.length} Colors</Typography>
                        </ItemLink>
                    </Grid>
                ))}
            </Grid>
            
        </Container>
    );
}
export default Shop;