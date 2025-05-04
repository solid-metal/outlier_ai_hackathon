// hamburgerMenu.jsx
import { styled } from "@mui/material"
import MenuItem from "./menuItem";
import { motion } from "framer-motion";
import corssSvg from "../../assets/crossVector.svg"
import MenuSection from "./menuSec";

const HamburgerMenuDiv = styled(motion.div)(({ theme }) => ({
    position: "absolute",
    height: "100vh",
    zIndex: 100,
    width: "100vw",
    background: "#0008",
    display: "flex",
}));

const MenuDiv = styled(motion.div)(({ theme }) => ({
    height: "100vh",
    zIndex: 1000,
    width: "clamp(280px,70vw,350px)",
    background: "#fff"
}));

function HamburgerMenu({ open = false, openMenu = () => { } }) {
    return <HamburgerMenuDiv
        initial={{
            background: "#0000"
        }}
        animate={open ? {
            background: "#0009"
        } : {
            background: "#0000",
            pointerEvents: "none"
        }}>
        <MenuDiv
            initial={{
                x: "-100%"
            }}
            animate={open ? {
                x: "0%"
            } : {
                x: "-100%"
            }}
            transition={{
                ease: "easeInOut"
            }}
        >
            {/* title */}
            <div style={{
                paddingLeft: 30,
                display: "flex",
                justifyContent: "left",
                alignItems: "center",
                height: 50,
                background: "var(--theme-secondary-main)"
            }}>
                <span style={{
                    color: "#fff",
                    fontSize: "18px",
                    fontWeight: "bolder",

                }}>Hello, sign in</span>
            </div>
            {/* menu sections */}
            <MenuSection title="New Feature">
                <MenuItem><span style={{
                    backgroundImage:"linear-gradient(to right,magenta,orange)",
                    fontWeight:"bolder",
                    backgroundClip:"text",
                    color:"transparent",
                    
                    }}>Price History</span>
                    </MenuItem>
            </MenuSection>
            {/* menu sections */}
            <MenuSection title="Trending">
                <MenuItem>Bestsellers</MenuItem>
                <MenuItem>New Releases</MenuItem>
                <MenuItem>Movers and Shakers</MenuItem>
               
            </MenuSection>
            
            {/* help and settings */}
            <MenuSection title="Help and Settings">
                <MenuItem>Your Account</MenuItem>
                <MenuItem>Customer Service</MenuItem>
                <MenuItem>Settings</MenuItem>

            </MenuSection>
        </MenuDiv>
        <motion.div onClick={() => { openMenu(false) }} style={{
            background: "transparent",
            flexGrow: 1,
        }}
            initial={{
                x: "-100%",
                opacity: 0
            }}
            animate={open ? {
                x: 0,
                opacity: 1
            } : {
                x: "-100%",
                opacity: 0
            }}
            transition={{
                ease: "easeInOut"
            }}
        >
            <img height="40px" style={{ margin: "10px" }} src={corssSvg} />
        </motion.div>
    </HamburgerMenuDiv>
}
export default HamburgerMenu