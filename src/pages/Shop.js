import { Container, Grid, Paper, Typography } from "@mui/material";
import { styled, Box, width } from "@mui/system";

const ItemLink = styled('a')({
    display: 'block',
    textAlign: 'center',
    color: 'black',
    textDecoration: 'none',
    '&:hover':{
        textDecoration: 'underline',
        filter: 'opacity(70%)'
    }
})
const ItemImg = styled('img')({
    maxWidth: '200px',
    margin:'auto'
})

function Shop() {
    return (
        <Container>
            <Grid container spacing={3}>
                {Array.from(Array(6)).map((_, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <ItemLink href="#">
                            <ItemImg src={require('../assets/shirt1_white.webp')} alt=""/>
                            <Typography>MINIONS TEE01 MENS</Typography>
                            <Typography>$59.99</Typography>
                        </ItemLink>
                    </Grid>
                ))}
            </Grid>
            
        </Container>
    );
}
export default Shop;