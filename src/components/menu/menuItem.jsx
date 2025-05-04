import { MenuItem as MItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import navlinks from "../../utils/navlinks.json"

function MenuItem ({children,path=navlinks.general,closeMenu}){
    const navigate=useNavigate()
    return <MItem onClick={()=>{navigate(path);closeMenu()}} sx={{
        padding:"10px",
        paddingLeft:"30px"
    }}>
        {children}
    </MItem>
}

export default MenuItem