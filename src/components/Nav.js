import { AppBar, Toolbar, Typography, Box, Button, IconButton, Badge } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Nav({cartCount}) {
    const navItems = ['Home', 'Shop', 'Cart'];
    const navitgate = useNavigate();

    return (
        <AppBar component="nav">
            <Toolbar>
                <Typography
                    variant="h6"
                    component="div"
                    onClick={() => navitgate('/')}
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, cursor: 'pointer' }}
                >
                    MINIONS X BAPE
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <Button onClick={() => navitgate('/')} sx={{ color: '#fff' }}>Home</Button>
                    <Button onClick={() => navitgate('/shop')} sx={{ color: '#fff' }}>Shop</Button>
                    <IconButton onClick={() => navitgate('/cart')} sx={{ color: '#fff' }}>
                        <Badge badgeContent={cartCount()} color="secondary" showZero>
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
export default Nav;