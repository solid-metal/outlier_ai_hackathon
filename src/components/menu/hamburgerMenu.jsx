// hamburgerMenu.jsx
import { styled } from "@mui/material"
import { motion } from "framer-motion";
import corssSvg from "../../assets/crossVector.svg"

const HamburgerMenuDiv = styled(motion.div)(({ theme }) => ({
    position:"absolute",
    height:"100vh",
    zIndex:100,
    width:"100vw",
    background:"#0008",
    display:"flex"
}));

const MenuDiv = styled(motion.div)(({ theme }) => ({
    height:"100vh",
    zIndex:1000,
    width:"clamp(250px,70vw,350px)",
    background:"#fff"
}));

function HamburgerMenu({open=false,openMenu=()=>{}}){
    return <HamburgerMenuDiv animate={open?{
        background:"#0009"
    }:{
        background:"#0000",
        pointerEvents:"none"
    }}>
        <MenuDiv animate={open?{
            x:"0%"
        }:{
            x:"-100%"
        }}
        transition={{
            ease:"easeInOut"
        }}
        >
            <h1>Menu</h1>
        </MenuDiv>
        <motion.div onClick={()=>{openMenu(false)}} style={{
            background:"transparent",
            flexGrow:1,
        }}
        animate={open?{
            x:0,
            opacity:1
        }:{
            x:"-100%",
            opacity:0
        }}
        transition={{
            ease:"easeInOut"
        }}
        >
            <img height="40px" style={{margin:"10px"}} src={corssSvg}/>
        </motion.div>
    </HamburgerMenuDiv>
}
export default HamburgerMenu