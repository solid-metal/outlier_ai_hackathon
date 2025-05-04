import { MenuItem as MItem } from "@mui/material";

function MenuItem ({children}){
    return <MItem sx={{
        padding:"10px",
        paddingLeft:"30px"
    }}>
        {children}
    </MItem>
}

export default MenuItem