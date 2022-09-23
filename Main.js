import React from "react";
import '../index.css';
import '../reset.css';
import Navmenu01 from "./Navmenu01";
import Navmenu02 from "./Navmenu02";
import Navmenu03 from "./Navmenu03";
import Navmenu04 from "./Navmenu04";
import Maincontent from "./Maincontent";

function Main(){
    return(
      <>
      <Maincontent />
      <Navmenu01/>
      <Navmenu02/>
      <Navmenu03/>
      <Navmenu04/>
</>
    );
}

export default Main