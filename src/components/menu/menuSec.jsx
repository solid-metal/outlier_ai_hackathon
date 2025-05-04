// menuSec.jsx
import { Divider } from "@mui/material"

function MenuSection({title,children}){
    return <div>
        <Divider/>
        {/* title */}
        <span style={{
            fontSize:24,
            fontWeight:"bolder",
            padding:"20px",
            display:"inline-block",
            paddingLeft:30,
        }}>{title}</span>
        {children}
    </div>
}

export default MenuSection