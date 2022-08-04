import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';

function Nav() {
    const navItems = ['Home', 'Shop', 'Cart'];
    const navitgate = useNavigate();

    return (
        <AppBar component="nav">
            <Toolbar>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    MINIONS X BAPE
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <Button onClick={() => navitgate('/')} sx={{ color: '#fff' }}>Home</Button>
                    <Button onClick={() => navitgate('/shop')} sx={{ color: '#fff' }}>Shop</Button>
                    <Button sx={{ color: '#fff' }}>Cart</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
export default Nav;