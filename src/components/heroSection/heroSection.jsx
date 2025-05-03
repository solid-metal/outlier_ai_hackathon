// heroSection.jsx
import { styled } from "@mui/material"

const HeroDiv = styled("div")(({ theme }) => ({
    background:"red",
    margin:0,
    "h1":{
        margin:0
    }
}));
function HeroSection(){
    return <HeroDiv>
        {/*  */}
    </HeroDiv>
}

export default HeroSection