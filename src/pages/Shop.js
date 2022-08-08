import { Container, Grid, Typography } from "@mui/material";
import { styled, } from "@mui/system";
import { Link } from "react-router-dom";

import products from '../data/products.json';

const ItemLink = styled(Link)({
    display: 'block',
    textAlign: 'center',
    color: 'black',
    textDecoration: 'none',
    '&:hover h6':{
        textDecoration: 'underline',
    }
})
const ItemImg = styled('img')({
    width: '100%', 
    maxWidth: '300px',
    margin:'auto',
    transition: '.5s'
})

function Shop() {
    function changeImage(target, url) {
        target.src = require('../assets/'+url);
    }

    return (
        <Container>
            <Grid container rowSpacing={5} columnSpacing={1}>
                {products.map((item) => (
                    <Grid item xs={6} sm={6} md={4} key={item.id}>
                        <ItemLink to={{pathname: `/shop/products/${item.name.replaceAll(' ', '-')}`}} state={{product: item}}>
                            <ItemImg src={require('../assets/'+item.images[0][0])} alt="" onMouseOver={e => changeImage(e.target, item.images[0][1])} onMouseOut={e => changeImage(e.target, item.images[0][0])}/>
                            <Typography variant="subtitle1" sx={{maxWidth: '200px', margin:'auto'}}>{item.name}</Typography>
                            <Typography>${item.price}</Typography>
                            <Typography variant="subtitle2" sx={{color:'gray'}}>{item.colors.length} Colors</Typography>
                        </ItemLink>
                    </Grid>
                ))}
            </Grid>
            
        </Container>
    );
}
export default Shop;