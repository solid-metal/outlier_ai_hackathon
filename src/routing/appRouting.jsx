// appRouting.jsx

import navlinks from "../utils/navlinks.json"
import AppBar from "../components/appBar/appBar"
import Menu from "../components/menu/menu"
import { Route, Routes } from "react-router-dom"

// ==========

import HomePage from "../page/home/home"

// ==========

function AppRouting() {
    return <>
        <AppBar />
        <Routes>
            {/* home */}
            <Route path={navlinks.home} element={<HomePage/>} />
            {/* product */}
            <Route path={navlinks.product} element={<h1>Product Page</h1>} />
            {/* general page */}
            <Route path={navlinks.general} element={<h1>Blank Page</h1>} />
            {/* not found */}
            <Route path={navlinks.notFound} element={<h1>Not Found</h1>} />
        </Routes>
    </>
}

export default AppRouting