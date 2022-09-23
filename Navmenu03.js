import React from "react";
import '../index.css'

import Set01 from '../images/set01.png';
import Set02 from '../images/set02.png';
import Set03 from '../images/set03.png';
import Set04 from '../images/set04.png';

function Navmenu03(){
    return(
<section id="nav03">
<h3>
    <span>Speciality in the Summer</span> </h3>
<div>
    <figure>
        <img src={Set01} alt="세트1" />
        <figcaption className="find">White Dial</figcaption>
    </figure>
    
    <figure>
        <img src={Set02} alt="세트2" />
        <figcaption className="find">Blue Square</figcaption>
    </figure>
    
    <figure>
        <img src={Set03} alt="세트3" />
        <figcaption className="find">Eternity</figcaption>
    </figure>
    
    <figure>
        <img src={Set04} alt="세트4" />
        <figcaption className="find">Hand Pave</figcaption>
    </figure>
    </div>
</section>
);}

export default Navmenu03