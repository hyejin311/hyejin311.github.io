import React from "react";
import '../index.css'

import Box11 from '../images/box01_01.png';
import Box12 from '../images/box01-02.png';
import Box13 from '../images/box01-03.png';
import Box14 from '../images/box01-04.png';

function Navmenu01(){
    return(
<section id="nav01">
    <h3>
        <span>Whatever Shining style</span> </h3>
<div>
    <figure>
        <img src={Box11} alt="상품11" />
        <figcaption className="find"></figcaption>
    </figure>
    
    <figure>
        <img src={Box12} alt="상품12" />
        <figcaption className="find">Tiffany True Ring</figcaption>
    </figure>
    
    <figure>
        <img src={Box13} alt="상품13" />
        <figcaption className="find">V Ring</figcaption>
    </figure>
    
    <figure>
        <img src={Box14} alt="상품14" />
        <figcaption className="find">Summer Heart</figcaption>
    </figure>
</div>
</section> 
    );
}

export default Navmenu01