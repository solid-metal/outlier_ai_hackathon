// genera.jsx
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import navlinks from "../../utils/navlinks.json"

function GeneralPage(){
    const navigate=useNavigate()
    return <div style={{
        height:"400px",
        // background:"lime",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column"
    }}>
        <span style={{
            fontSize:"2rem",
            fontWeight:"bolder",
            backgroundImage:"linear-gradient(to right,magenta,orange)",
            color:"transparent",
            backgroundClip:"text",
            filter:"drop-shadow(0px 0px 6px #0003)"
        }}>Blank Page</span>
        <span style={{
            marginTop:"8px"
        }}>Page has not been build</span>
        <Button sx={{
            marginTop:"15px"
        }}
        onClick={()=>{navigate(navlinks.product)}}
        variant="outlined"
        >
            Feature Page
        </Button>
    </div>
}

export default GeneralPage