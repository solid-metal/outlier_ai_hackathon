// home.jsx
import HeroSection from "../../components/heroSection/heroSection"
import MobileDeals from "../../components/mobileDeals/mobileDeals"
import { useMediaQuery, useTheme } from "@mui/material"

function HomePage() {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down(1010))
    return <>
        {/* mobile deals */}
        {
            isMobile ? <MobileDeals /> : <></>
        }
        {/* hero section */}
        <HeroSection />
        {/* product section 1 */}
    </>
}

export default HomePage