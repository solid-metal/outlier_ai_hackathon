// menu.jsx
import HamburgerMenu from "./hamburgerMenu"
import hamburgerVector from "../../assets/hamburger_vector.svg"

import { MenuItem, styled } from "@mui/material"
import menuItems from "../../utils/menu.json"

const MenuDiv = styled("div")(({ theme }) => ({
    padding:"0 20px",
    height:"40px",
    position:"relative",
    background:"var(--theme-secondary-main)",
    display:"flex",
    fontSize:14
}));

function Menu({openMenu}){
    return <MenuDiv>
        {/* hambur Menu */}
        <MenuElem onClick={()=>{openMenu(true)}}>
            <div style={{display:"flex",alignItems:'center',justifyContent:"center"}}>
            <img height="15px" src={hamburgerVector} alt=""/>
            <p style={{marginLeft:8,fontWeight:700}}>All</p>
            </div>
        </MenuElem>
        {/* new feature */}
        <div style={{
            position:"relative",
            color:"#fff",
            display:"flex",
            alignItems:'center',
            fontWeight:"600",
            padding:"0 10px"}}>
                <span style={{
                    position:'absolute',
                    fontSize:"10px",
                    backgroundImage:"linear-gradient(to right,magenta,orange)",
                    backgroundClip:"text",
                    color:"transparent",
                    fontWeight:"bolder",
                    top:"0px"}}>NEW FEATURE</span>
            <p>Price History</p>
        </div>
        {menuItems.map((elem,ind)=>(
            <MenuElem>
                <p>{elem}</p>
            </MenuElem>
        ))}
    </MenuDiv>
}


function MenuElem({children,onClick=()=>{}}){
    return <div onClick={onClick} style={{
        color:"#fff",
        cursor:"pointer",
        display:"flex",
        alignItems:"center",
        fontWeight:600,
        margin:"0 12px",
        }}>
        {children}
    </div>
}

export default Menu