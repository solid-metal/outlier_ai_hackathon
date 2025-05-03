// arrowDownBtn.jsx
import { styled } from "@mui/material"

const Button = styled("button")(({ theme }) => ({
    display:"inline-block",
    height:"0px",
    position:"relative",
    borderTop:"3px solid transparent",
    borderRight:"3px solid #a7acb2",
    borderBottom:"3px solid transparent",
    borderLeft:"4px solid transparent",
    background:"none",
    // transform:"rotateZ(-90deg) translateX(-7px)"
    transform:"rotateZ(-90deg)"
}));


function ArrowDownBtn({children,style}){
    return <Button style={style}>
        {children}
    </Button>
}

export default ArrowDownBtn