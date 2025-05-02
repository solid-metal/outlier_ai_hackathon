// appRouting.jsx
import navlinks from "../utils/navlinks.json"

import { Route,Routes } from "react-router-dom"

// ==========



// ==========

function AppRouting(){
    return <Routes>
        {/* home */}
        <Route path={navlinks.home} element={<h1>Home</h1>}/>
        {/* product */}
        <Route path={navlinks.product} element={<h1>Product Page</h1>}/>
        {/* general page */}
        <Route path={navlinks.general} element={<h1>Blank Page</h1>}/>
        {/* not found */}
        <Route path={navlinks.notFound} element={<h1>Not Found</h1>}/>
    </Routes>
}

export default AppRouting