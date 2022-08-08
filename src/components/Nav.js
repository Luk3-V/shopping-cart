import { AppBar, Container, Toolbar, Typography, Box, Button, IconButton, Badge, Divider, List, ListItem, ListItemButton, ListItemText, Drawer } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from "@mui/system";
import { useState } from "react";

const NavButton = styled(Button)({
    color: '#fff',
    margin: '0 10px',
    fontSize: '1rem'
});
const NavIconButton = styled(IconButton)({
    color: '#fff',
    margin: '0 0 0 10px',
    fontSize: '1rem'
});

function Nav(props) {
    const navitgate = useNavigate();
    const { cartCount, window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <List>
            <ListItem disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }}  onClick={() => navitgate('/')}>
                <ListItemText><Typography variant='subtitle1'>HOME</Typography></ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }}  onClick={() => navitgate('/shop')}>
                <ListItemText><Typography variant='subtitle1'>SHOP</Typography></ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }}  onClick={() => navitgate('/cart')}>
                    <ListItemText><Typography variant='subtitle1'>CART</Typography></ListItemText>
                </ListItemButton>
            </ListItem>
        </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
        <AppBar component="nav" color="secondary">
            <Toolbar>
                <Box sx={{ display: { xs: 'flex', sm: 'none' }, justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="a"
                        onClick={() => navitgate('/')}
                        noWrap
                        sx={{ cursor: 'pointer'}}
                        >
                            BAPE X MINIONS
                    </Typography>
                    <NavIconButton onClick={() => navitgate('/cart')}>
                        <Badge badgeContent={cartCount()} color="secondary" showZero>
                            <ShoppingCartIcon />
                        </Badge>
                    </NavIconButton>
                </Box>
                
                <Container sx={{display:{ xs: 'none', sm: 'flex' }, justifyContent: 'space-between', alignItems: 'center'}}>
                    <Typography
                        variant="h6"
                        component="a"
                        onClick={() => navitgate('/')}
                        noWrap
                        sx={{ cursor: 'pointer' }}
                        >
                            BAPE X MINIONS
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <NavButton onClick={() => navitgate('/')}>Home</NavButton>
                        <NavButton onClick={() => navitgate('/shop')}>Shop</NavButton>
                        <NavIconButton onClick={() => navitgate('/cart')}>
                            <Badge badgeContent={cartCount()} color="secondary" showZero>
                                <ShoppingCartIcon />
                            </Badge>
                        </NavIconButton>
                    </Box>
                </Container>
            </Toolbar>
        </AppBar>
        <Box component="nav">
            <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
            }}
            >
            {drawer}
            </Drawer>
        </Box>
        </Box>
    );
}
export default Nav;