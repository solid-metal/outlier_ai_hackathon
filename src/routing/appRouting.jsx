// appRouting.jsx

import navlinks from "../utils/navlinks.json"
import AppBar from "../components/appBar/appBar"
import { Route, Routes } from "react-router-dom"

// ==========

import HomePage from "../page/home/home"
import GeneralPage from "../page/general/general"
import FeaturePage from "../page/featurePage/featurePage"

// ==========

function AppRouting() {
    return <>
        <AppBar />
        <Routes>
            {/* home */}
            <Route path={navlinks.home} element={<HomePage/>} />
            {/* product */}
            <Route path={navlinks.product} element={<FeaturePage/>} />
            {/* general page */}
            <Route path={navlinks.general} element={<GeneralPage/>} />
            {/* not found */}
            <Route path={navlinks.notFound} element={<h1>Not Found</h1>} />
        </Routes>
    </>
}

export default AppRouting