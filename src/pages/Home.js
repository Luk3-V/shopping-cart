import { Container, Button, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';

import banner from "../assets/banner.webp"

function Home() {
    const navitgate = useNavigate();

    return (
        <Container sx={{textAlign:'center'}}>
            <Typography variant="h4" mt={5}>A BATHING APE® x MINIONS: THE RISE OF GRU</Typography>
            <img src={banner} alt="" style={{width: '100%', maxWidth: '500px'}} />
            <Typography variant="body1" mb={5}>
            A BATHING APE® (BAPE®︎) is thrilled to announce the release of a limited-edition collection in collaboration with Illumination’s Minions to celebrate the release of their latest film, "MINIONS: THE RISE OF GRU".
            <br /><br />
            Illumination’s "MINIONS: THE RISE OF GRU", the newest installment to the world’s most successful animated franchise, will be released on July 1st in US, and the Minions and BAPE®︎'s popular character "Baby MILO®︎" are now available in cute designs!
            <br /><br />
            This collaboration collection features Minions drawn with the BABY MILO®︎ and 3D graphics of BABY MILO®︎, a crossover of their mutual worldviews.
            <br /><br />
            The Graphic tees are filled with charming characters, BAPE®︎ original CAMO hoodies with a Minion touch, as well as cute and cool mesh caps, mugs, plates, and other lifestyle goods will also be available.
            <br /><br />
            The collection will be launching at BAPE®︎ US locations and US.BAPE.COM on July 1st (Fri), 2022, and globally on July 9th (Sat).
            <br /><br />
            Enjoy the countdown to the release of "MINIONS: THE RISE OF GRU" with the BAPE®︎ collaboration items.
            </Typography>
            <Button onClick={() => navitgate('/shop')} variant='outlined' size="large">View Collection</Button>
        </Container>
    );
}
export default Home;