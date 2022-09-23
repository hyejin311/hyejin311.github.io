import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from "../Component/App";
import Main from "./Main";
import Navmenu01 from "./Navmenu01";
import Navmenu02 from "./Navmenu02";
import Navmenu03 from "./Navmenu03";
import Navmenu04 from "./Navmenu04";

function Home(){
    return(
        <BrowserRouter>
        <App>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/nav01" element={<Navmenu01 />} />
                <Route path="/nav02" element={<Navmenu02 />} />
                <Route path="/nav03" element={<Navmenu03 />} />
                <Route path="/nav04" element={<Navmenu04 />} />
            </Routes>
        </App>
        </BrowserRouter>
    )
}

export default Home