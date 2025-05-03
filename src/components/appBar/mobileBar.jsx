// mobileBar.jsx

import { useEffect } from "react"
import hamburgerVector from "../../assets/hamburger_vector.svg"
import userVector from "../../assets/userVector.svg"
import { NavSearch } from "./desktopBar"

function MobileBar({ openMenu = () => { } }) {
    return <div style={{
        zIndex: 1,
        background: "var(--theme-secondary-main)"
    }}>
        {/*  */}
        <div style={{
            height: "50px",
            display: "flex",
            color: "#fff",
            alignItems:"center"
        }}>
            {/* hamburger button */}
            <button onClick={openMenu} style={{
                border: "none",
                background: "none",
                padding: "0px 10px"
            }}>
                <img height="20px" src={hamburgerVector} />
            </button>
            {/* logo */}
            <span style={{
                backgroundImage: "url(/nav_sprite_amazon.png)",
                width: "80px",
                height: "35px",
                backgroundPosition: "-185px -222px",
                backgroundSize: "275px"
            }}></span>
            <div>
                <p style={{
                    // transform: "translateY(-10px)"
                }}>.in</p>
            </div>
            {/* flex grow */}
            <div style={{
                flexGrow: 1,
                // background: "lime"
            }}>
            </div>
            {/* sign in */}
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <span>Sign in</span>
                <img height="30px" style={{ margin: "0 5px" }} src={userVector} />
            </div>
            {/* cart */}
            <div style={{
                position: "relative",
                // background:"red",
                marginTop: 8,
                marginLeft: 8,
                marginRight: 8
            }}>
                <span style={{
                    position: "absolute",
                    color: "var(--theme-primary-dark)",
                    fontWeight: 900,
                    right: 11,
                    top: -5
                }}>0</span>
                <span style={{
                    backgroundImage: "url(/nav_sprite_amazon.png)",
                    backgroundPosition: "-10px -340px",
                    height: 26,
                    width: 38,
                    display: "inline-block"
                }}>

                </span>
            </div>
        </div>
        {/* search */}
        <div style={{ borderRadius: "20px", overflow: "hidden",marginTop:5 }}>
            <NavSearch />
        </div>
        {/* deals */}
        <div style={{
            display:"flex",color:"#fff",
            alignItems:"end",
            padding:"16px 10px"
        }}>
            <ShopByCategory/>
        </div>
        {/* address */}
        <div style={{
            background:"rgba(58,71,88,1)",
            // background:"red",
            display:'flex',
            alignItems:'center',
            color:"#fff",
            height:"35px",
            padding:"0 10px"
        }}>
            Delivering to Delhi 110001 - Update location
        </div>
    </div>
}

function ShopByCategory(){
    return <>
    <div style={{display:"flex",flexDirection:"column",justifyContent:"end"}}>
        <span style={{fontSize:"12px"}}>Shop By</span>
        <span style={{fontSize:16,fontWeight:700}}>Category</span>
    </div>
    <div style={{
        margin:"0 10px"
    }}>
        Deals
    </div>
    <div style={{
        margin:"0 10px"
    }}>
        Sell
    </div>
    <div style={{
        margin:"0 10px",
        position:"relative"
    }}>
        <span style={{
            position:"absolute",
            top:-12,
            fontSize:10,
            fontWeight:"bolder",
            backgroundClip:"text",
            color:"transparent",
            backgroundImage:"linear-gradient(to right,magenta,orange)"
        }}>New Feature</span>
        Price History
    </div>
    </>
}

export default MobileBar