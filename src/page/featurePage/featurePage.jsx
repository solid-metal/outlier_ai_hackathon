// featurePage.jsx
import { Button, styled } from "@mui/material"
import productImg from "../../assets/product/product_image.png"
import PriceChart from "../../components/priceChart/priceChart";


const PageDiv = styled("div")(({ theme }) => ({
    background: "#fff",
    padding: "0 20px",
    paddingTop: 80,
    display: "flex",
    alignItems: "center",
    justifyContent: 'center',
    ".container": {
        display: "flex",
        gap: 20,
        // background:"rgba(0,0,0,.02)",
        // width: "clamp(200px,70vw,1300px)",
    },
    ".productDetails": {
        display: "flex",
        flexDirection: "column"
    },
    ".productImage": {
        // justifyContent: "center",
        // background:"red"
    },
    ".title": {
        fontSize: "24px",
        fontWeight: 500,
    },
    ".visit": {
        marginTop: 10,
        color: "#1783FF"
    },
    ".platform": {
        marginTop: 4
    },
    display: "flex",
    [theme.breakpoints.down(1010)]: {
        // mobile
        ".container": {
            flexDirection: "column",
            // background:"red",
            width: "100%"
        }
    },
    [theme.breakpoints.up(1010)]: {
        // desktop
    }

}));
function FeaturePage() {
    return <PageDiv>
        {/* <span>Feature Page</span> */}
        {/* <PriceChart/> */}
        {/* product image */}
        <div className="container">
            <div className="productImage">
                <img style={{ borderRadius: 10,maxWidth:"100%",height:"auto" }} src={productImg} />
            </div>
            {/* product details */}
            <div className="productDetails">
                <span className="title">Sony PlayStation5 Gaming Console Video Game</span>
                <span className="visit">Visit the Sony Store</span>
                <span className="platform">Platform <span style={{ color: "#989898" }}>: PlayStation 5</span></span>
                <span style={{fontSize:24,fontWeight:"bold",marginTop:20}}>₹49,990</span>
                <span style={{marginTop:20}}>
                    <Button variant="outlined">Add to Cart</Button>
                    <Button variant="contained" sx={{marginLeft:"20px"}}>Buy Now</Button>
                </span>
                <div style={{
                    border: "1px solid #ccc",
                    padding: "10px",
                    borderRadius: 8,
                    position:"relative",
                    marginTop:50,
                    marginBottom:580
                }}>
                    <span style={{
                        position:"absolute",
                        top:0,
                        fontSize: 12,
                        transform:"translateY(-60%)",
                        background:"#fff",
                        padding:"0 10px",
                        // border:"1px solid #ccc"
                    }}>Price History<span style={{
                        marginLeft:20,
                        fontWeight: 700,
                        color: "transparent",
                        backgroundImage: "linear-gradient(to right,magenta,orange)",
                        backgroundClip: 'text'
                    }}>NEW FEATURE</span></span>
                    <PriceChart />
                </div>
            </div></div>
    </PageDiv>
}

export default FeaturePage