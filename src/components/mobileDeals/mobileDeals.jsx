// mobileDeals.jsx
import deal1 from "../../assets/mobileDeals/mobileDeal1.jpeg"
import deal2 from "../../assets/mobileDeals/mobileDeal2.jpeg"
import deal3 from "../../assets/mobileDeals/mobileDeal3.jpeg"
import deal4 from "../../assets/mobileDeals/mobileDeal4.jpeg"
import deal5 from "../../assets/mobileDeals/mobileDeal5.jpeg"
import deal6 from "../../assets/mobileDeals/mobileDeal6.jpeg"
import deal7 from "../../assets/mobileDeals/mobileDeal7.jpeg"
import deal8 from "../../assets/mobileDeals/mobileDeal8.jpeg"
import deal9 from "../../assets/mobileDeals/mobileDeal9.jpeg"
import deal10 from "../../assets/mobileDeals/mobileDeal10.jpeg"

function MobileDeals(){
    return <div style={{
        background:"rgb(247,233,113)",
        padding:"10px",
        lineHeight:0,
        height:73,
        display:"flex",
        gap:"10px",
        // width:"100%",
        maxWidth:"calc(100% - 20px)",
        justifyContent:"left",
        alignItems:'center',
        overflow:"auto"
    }}>
        {
            [
                {
                    img:deal1,
                    title:"Deals"
                },
                {
                    img:deal2,
                    title:"Mobiles"
                },
                {
                    img:deal3,
                    title:"Mx Player"
                },
                {
                    img:deal4,
                    title:"Fresh"
                },
                {
                    img:deal5,
                    title:"Home"
                },
                {
                    img:deal6,
                    title:"Electronics"
                },
                {
                    img:deal7,
                    title:"Body"
                },
                {
                    img:deal8,
                    title:"Everyday"
                },
                {
                    img:deal9,
                    title:"Deals"
                },
                {
                    img:deal10,
                    title:"Deals"
                },
            ].map((elem,ind)=>(
                <Elem image={elem.img} title={elem.title}/>
            ))
        }
    </div>
}

function Elem({image,title}){
    return <div style={{
        margin:"0px",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:'center'
    }}>
        <img style={{height:50}} src={image}/>
        <p style={{fontSize:14}}>{title}</p>
    </div>
}

export default MobileDeals