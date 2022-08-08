import { createTheme } from "@mui/material";
import { blue, yellow, grey } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: blue[900],
        },
        secondary: {
            main: '#111',
        },
    },
    typography: {
        fontFamily: 'Open Sans, sans-serif',
        
        h4: {
            fontWeight: 'bold',
            letterSpacing: '.1rem',
        },
        h6: {
            fontWeight: 'bold',
            letterSpacing: '.1rem',
        },
        subtitle1: {
            fontWeight: '600',
        },
        button: {
            fontWeight: '600',
            letterSpacing: '.1rem',
        },
        overline: {
            fontWeight: '600',
            fontSize: '.9rem',
            lineHeight: '2rem'
        }
    }
});

export default theme;