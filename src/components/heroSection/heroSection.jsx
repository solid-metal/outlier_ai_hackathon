// heroSection.jsx
import { styled } from "@mui/material"
import { useTheme, useMediaQuery } from "@mui/material";
import mobileHeroImg from "../../assets/hero/mobile_hero_image.jpg"
import desktopHeroImg from "../../assets/hero/desktop_hero_image.jpg"
// mobile hero  images
import mobileH1 from "../../assets/hero/mobile/mobileHero1.jpg"
import mobileH2 from "../../assets/hero/mobile/mobileHero2.jpg"
import mobileH3 from "../../assets/hero/mobile/mobileHero3.jpeg"
import mobileH4 from "../../assets/hero/mobile/mobileHero4.jpg"
import mobileH5 from "../../assets/hero/mobile/mobileHero5.jpg"
import mobileH6 from "../../assets/hero/mobile/mobileHero6.jpg"
import mobileH7 from "../../assets/hero/mobile/mobileHero7.jpg"
import mobileH8 from "../../assets/hero/mobile/mobileHero8.jpg"
import mobileH9 from "../../assets/hero/mobile/mobileHero9.jpeg"
import mobileH10 from "../../assets/hero/mobile/mobileHero10.jpg"
import mobileBottom from "../../assets/hero/mobile/mobileHeroBottom.jpg"
// desktop hero images
import desktopH1 from "../../assets/hero/desktop/hero_desktop1.jpg"
import desktopH2 from "../../assets/hero/desktop/hero_desktop2.png"
import desktopH3 from "../../assets/hero/desktop/hero_desktop3.png"

const HeroDiv = styled("div")(({ theme }) => ({
    // background:"red",
    margin: 0,
    "h1": {
        margin: 0
    }
}));
function HeroSection() {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down(1010))
    return <HeroDiv>
        {/* hero Image */}
        {
            isMobile ? <MobileHero /> : <DesktopHero />
        }
        {/* hero menu */}
    </HeroDiv>
}
function MobileHero() {
    return <div style={{
        width: "100%",
        position: "relative"
    }}>
        <div style={{
            position: "relative"
        }}>
            <img width="100%" src={mobileHeroImg} />
            {/* content */}
            <div style={{
                position: "absolute",
                height: "auto",
                width: "100%",
                maxWidth: "calc(100% - 5px)",
                top: "60vw",
                backgroundImage: "linear-gradient(transparent 0 30px ,var(--theme-background) 50px 100%)",
                padding: "0 2px",
                // background:"lime"
            }}>
                <div style={{
                    // background:"red",
                    display: "flex",
                    gap: "10px",
                    overflow: "auto",
                    maxWidth: "calc(100%)",
                }}>
                    {[
                        mobileH1,
                        mobileH2,
                        mobileH3,
                        mobileH4,
                        mobileH5,
                        mobileH6,
                        mobileH7,
                        mobileH8,
                        mobileH9,
                        mobileH10,
                    ].map(elem => (
                        <MobileElem image={elem} />
                    ))}
                </div>
                {/* bottom content */}
                <div style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <img style={{
                        maxWidth: "100%"
                    }} src={mobileBottom} />
                </div>
            </div>
        </div>
    </div>
}
function MobileElem({ image }) {
    return <div style={{
        // height:"180px",
        // height:"200px",
        // width:"300px",
        // width:"235px",
        background: "yellow",
        position: 'relative'
    }}>
        <img style={{
            // maxWidth:"100%"
            width: "135px"
        }} src={image} />
    </div>
}

function DesktopHero() {
    const theme = useTheme()
    const isSmall = useMediaQuery(theme.breakpoints.down(1485))
    return <div style={{
        width: "100%",
        display: "flex",
        justifyContent: 'center',
        position: "relative"
    }}>
        <div style={{
            background: "red",
            position: "relative"
        }}>
            <img width="1510px" style={{
                maxWidth: "100%",
            }} src={desktopHeroImg} />
            {/* content */}
            <div style={{
                padding: "0 20px",
                position: "absolute",
                // height: "auto",
                width: "calc(100% - 40px)",
                top: "clamp(250px,13vw,300px)",
                backgroundImage: "linear-gradient(transparent 0 100px ,var(--theme-background) 250px 100%)",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(350px,1fr))",
                gridTemplateRows: "repeat(2,380px)",
                gap: 15
            }}>
                <DesktopElem
                    title="Starting ₹349 | Bestselling headphones"
                    image={desktopH1}
                />
                <DesktopElem
                    title="Minimum 50% off | Home, kitchen & more"
                    image={desktopH2}
                />
                <DesktopElem
                    title="Deals on accessories from your top smartphone brands"
                    image={desktopH3}
                />
                <DesktopElem
                    title="Starting ₹349 | Bestselling headphones"
                    image={desktopH1}
                />
                <DesktopElem
                    title="Minimum 50% off | Home, kitchen & more"
                    image={desktopH2}
                />
                <DesktopElem
                    title="Deals on accessories from your top smartphone brands"
                    image={desktopH3}
                />
                {isSmall ? <></> : <>
                    <DesktopElem
                        title="Minimum 50% off | Home, kitchen & more"
                        image={desktopH2}
                    />
                    <DesktopElem
                        title="Deals on accessories from your top smartphone brands"
                        image={desktopH3}
                    />
                </>}
            </div></div>
    </div>
}
function DesktopElem({title,image}) {
    return <div style={{
        height: "385px",
        // width:"clamp(300px,350px,450px)",
        background: "lime",
        position:"relative",
        background:"#fff",
        padding:"0 20px"
    }}>
        
        <h2 style={{fontSize:18}}>{title}</h2>
        <img width="98%" src={image}/>
        <p>see all offers</p>
    </div>
}
export default HeroSection