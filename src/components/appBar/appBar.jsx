// appBar.jsx

import { useMediaQuery,useTheme } from "@mui/material";
import DesktopBar from "./desktopBar";
import MobileBar from "./mobileBar";


function AppBar() {
    const theme=useTheme()
    const isMobile=useMediaQuery(theme.breakpoints.down(900))
    if(isMobile){
        return <MobileBar/>
    }
    return <DesktopBar/>
}

export default AppBar