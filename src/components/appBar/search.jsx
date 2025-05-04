// search.jsx
import { styled } from "@mui/material"
import { useNavigate } from "react-router-dom";
import navLinks from "../../utils/navlinks.json"

const SearchDiv = styled("div")(({ theme }) => ({
    cursor:"pointer",
    width:45,
    height:"100%",
        background:"rgb(252,184,99)",
        ":hover":{
            background:"var(--theme-primary-dark)"
        },
        "span":{
            backgroundImage:"url(/nav_sprite_amazon.png)",
            height:"40px",
            width:"45px",
            backgroundPosition:"2px -280px",
            display:"inline-block",
        }
}));
function Search(){
    const navigate=useNavigate()
    return <SearchDiv onClick={()=>{navigate(navLinks.general)}}>
        <span></span>
    </SearchDiv>
}

export default Search