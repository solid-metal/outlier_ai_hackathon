// search.jsx
import { styled } from "@mui/material"

const SearchDiv = styled("div")(({ theme }) => ({
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
    return <SearchDiv>
        <span></span>
    </SearchDiv>
}

export default Search