import React from "react";
import '../index.css'

import Box21 from '../images/box02_01.png';
import Box22 from '../images/box02-02.png';
import Box23 from '../images/box02-03.png';
import Box24 from '../images/box02-04.png';

function Navmenu02(){
    return(
<section id="nav02">
    <h3><span>Capture her world</span></h3>
<div>
<figure>
    <img src={Box21} alt="상품21" />
<figcaption className="find">T Victoria Necklace</figcaption>
</figure>

<figure>
    <img src={Box22} alt="상품22" />
    <figcaption className="find">Diamond Branch Necklace</figcaption>
</figure>

<figure>
    <img src={Box23} alt="상품23" />
    <figcaption className="find">Single Gold Necklace</figcaption>
</figure>

<figure>
    <img src={Box24} alt="상품24" />
    <figcaption className="find">Key Crown Necklace</figcaption>
</figure>
</div>
</section>
    );
}

export default Navmenu02