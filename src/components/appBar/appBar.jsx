// appBar.jsx

import { useMediaQuery, useTheme } from "@mui/material";
import DesktopBar from "./desktopBar";
import MobileBar from "./mobileBar";
import HamburgerMenu from "../menu/hamburgerMenu";
import { useState } from "react";


function AppBar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down(1010))
    return <>
     <HamburgerMenu openMenu={(open=true)=>{setMenuOpen(open)}} open={menuOpen} />
        {isMobile ? <MobileBar
            openMenu={(open = true) => { setMenuOpen(open) }} /> :
            <DesktopBar openMenu={(open = true) => { setMenuOpen(open) }} />}
       
    </>
}

export default AppBar