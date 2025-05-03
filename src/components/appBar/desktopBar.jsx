// desktopBar.jsx
import { styled } from "@mui/material"
import Menu from "../menu/menu";
import ArrowDownBtn from "./arrowDownBtn";
import Search from "./search";

const BarDiv = styled("div")(({ theme }) => ({
    zIndex:1,
    fontSize: 14,
    lineHeight: "14px",
    background: "var(--theme-secondary-dark)",
    display: "flex",
    ".navLogo": {
        marginTop: 11,
        backgroundImage: "url(/nav_sprite_amazon.png)",
        width: 98,
        height: 34,
        backgroundPosition: "-9px -125px",
        display: "inline-block"
    },
    ".navGeoLogo": {
        backgroundImage: "url(/nav_sprite_amazon.png)",
        height: 18,
        marginTop: "8px",
        width: 15,
        // lineHeight:39,
        backgroundPosition: "-71px -378px"
    },
    ".flag": {
        backgroundImage: "url(/flag_sprite.png)",
        marginRight: 2,
        height: "18px",
        width: "24px",
        backgroundPosition: "0px -166px",
        backgroundSize: "194px 295px",
        marginBottom: 1,
        display: "inline-block"
    }
}));

function DesktopBar({openMenu=()=>{}}) {
    return <>
    <BarDiv>
        {/* nav left */}
        <div style={{
            padding: "4px 0 0 0",
            display: "flex"
        }}>
            {/* nav logo */}
            <div style={{
                marginLeft: 15,
                padginTop: 4
            }}>
                <a  style={{
                    display: "flex",
                    margin: 1,
                    padding: "1px 8px 0 6px"
                }}>
                    <span style={{
                        marginTop: 11
                    }} className="navLogo" />
                    <span style={{
                        marginTop: 16.5,
                        height: 14,
                        lineHeight: "14px",
                        color: "#fff",
                        fontWeight: 600
                    }}>.in</span>
                </a>
            </div>
            {/* nav geo location */}
            <div style={{
                color: "#fff",
                marginLeft: "6px",
                marginTop: 8
            }}>
                <span>
                    <a  style={{
                        margin: "5px 2px 5px 0px",
                        padding: "0 9px",
                        display: "flex"
                    }}>
                        {/* nav logo */}
                        <div className="navGeoLogo" />
                        {/* nav content */}
                        <div style={{
                            marginLeft: 6,
                        }}>
                            <span
                                style={{
                                    display: "block",
                                    fontWeight: 400,
                                    fontSize: 12,
                                    color: "rgb(204, 204, 204)"
                                }}
                            >Delivering to Delhi 110001</span>
                            <span
                                style={{
                                    display: "block",
                                    fontWeight: 600
                                }}>Update location</span>
                        </div>
                    </a>
                </span>
            </div>
        </div>
        {/* nav center */}
        <div style={{
            flexGrow: 1
        }}>
            {/* search */}
            <div style={{
                padding: "10px 4px 10px 3px",
                height: "40px",
                flexGrow: 1,
                // background: "red"
            }}>
                <NavSearch/>
            </div>
        </div>
        {/* nav right */}
        <div>
            <div style={{
                display:"flex",
                // alignItems:"center",
                // background:"red",
                marginTop:8,
                color:"#fff"
            }}>
                {/* language */}
                <div style={{
                    margin: "0 1px",
                    padding: "0 6px 5px 7px"
                }}>
                    <a  style={{
                        margin: 1,
                        padding: "0 2px 5px 7px"
                    }}>
                        <span style={{
                            display: "flex",
                        }}>
                            <span style={{
                                padding: "0px 8px 2px 0px",
                                height: "12px"
                            }}></span>
                            {/* language sel */}
                            <span
                                style={{
                                    marginLeft: 1,
                                    display: "flex",
                                    color: "#fff",
                                    alignItems: "center"
                                }}
                            >
                                {/* flag */}
                                <span className="flag"></span>
                                <div style={{
                                    fontWeight: 700,
                                    lineHeight: "15px"
                                }}>
                                    EN
                                    <ArrowDownBtn style={{
                                        transform: "rotateZ(-90deg) translateX(-7px)"
                                    }} />
                                </div>

                            </span>
                        </span>
                    </a>
                </div>
                {/* account */}
                <div style={{
                    marginTop:4,
                    // background:"red",
                    padding: "0 9px",
                    color: "#fff",
                    fontSize: "12px",
                }}>
                    <a  style={{
                        // padding:"0 4px 8px 9px",
                        // height:"40px"
                    }}>
                        {/* hello signin */}
                        <div>
                            <span>Hello, sign in</span>
                        </div>
                        <span style={{
                            fontSize: "14px",
                            fontWeight: 700
                        }}>Account & Lists <ArrowDownBtn style={{
                            transform: "rotateZ(-90deg) translateX(-6px)"
                        }} /></span>
                    </a>
                </div>
                {/* order history */}
                <a style={{
                    marginTop:4,
                    color: "#fff",
                    // padding: "0 9px 10px 9px",
                    display: "flex",
                    flexDirection: "column"
                }}>
                    <span style={{ fontSize: 12 }}>Retuns</span>
                    <span style={{ fontSize: 14, fontWeight: 700 }}>& Orders</span>
                </a>
                {/* cart */}
                <a  style={{
                    marginRight:1,
                    padding:"0 9px 11px 9px",
                    display:"flex",
                    marginTop:4
                }}>
                    {/* cart and count */}
                    <div style={{
                        position:"relative",
                        // background:"red"
                        }}>
                        <span style={{
                            position:"absolute",
                            color:"var(--theme-primary-dark)",
                            fontWeight:900,
                            right:11,
                            top:-2
                        }}>0</span>
                        <span style={{
                            backgroundImage:"url(/nav_sprite_amazon.png)",
                            backgroundPosition:"-10px -340px",
                            height:26,
                            width:38,
                            display:"inline-block"
                        }}>

                        </span>
                    </div>
                    {/* cart text */}
                    <div style={{
                        position:"relative",
                        bottom:-15
                    }}>
                        <span style={{fontSize:14,fontWeight:700}}>Cart</span>
                    </div>
                </a>
            </div>
        </div>
    </BarDiv>
    <Menu openMenu={openMenu}/>
    </>
}

function NavSearch(){
    return <div style={{
        margin:"0 10px",
        marginTop:"0px",
        // padding:"10px 4px 10px 3px",
        background:"#fff",
        height:"40px",
        display:"flex",
        position:"relative",
        borderRadius:"2px",
        overflow:"hidden"
    }}>
        {/* select */}
        <div style={{
            width:"45px",
            height:"100%",
            background:"var(--theme-background)",
            display:"flex",
            justifyContent:"right",
            paddingRight:"2px",
            alignItems:"center",
            borderRight:"1px solid #888"
        }}>
            <span>All<ArrowDownBtn style={{
                borderRight:"3px solid #000",transform:"rotateZ(-90deg) translateX(-5px)"}}/></span>
        </div>
        {/* input */}
        <div style={{
            flexGrow:1,
            height:'100%',
            padding:"0 10px"
        }}>
            <input style={{
                border:0,
                margin:0,
                padding:0,
                width:"100%",
                color:"#000",
                outline:"none",
                height:"100%",
                fontSize:"14px"
            }} placeholder="Search Amazon.in"/>
        </div>
        {/* serch */}
        <Search/>
    </div>
}


export default DesktopBar
export { NavSearch }