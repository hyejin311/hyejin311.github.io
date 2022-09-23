import React from "react";
import '../index.css'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

import Box11 from '../images/box01_01.png';
import Box14 from '../images/box01-04.png';
import Box23 from '../images/box02-03.png';
import Set01 from '../images/set01.png';

function Maincontent(){
    return(
      <>
 <article id="box01">
    <div id="mainheader">
      <h3>The world of beauty</h3>
      <p>Tiffany is the most original in the world for about 200 years <br />
        We designed rare and fascinating jewelery</p></div>
        
    <div id="showbox">
        <div id="ul_containbox">
    <ul>
      <li className="#mainimg1">
        <img src={Box11} />
        <span>가장 인기있는 티파니 주얼리</span>
        <span>가장 인기있는 티파니 주얼리를 만나보세요.</span>
      </li>
      <li className="#mainimg2">
      <img src={Box23} />
        <span>한여름의 열기</span>
        <span>지금까지 만나본 적 없던 스털링 실버</span>
      </li>
      <li className="#mainimg3">
      <img src={Set01} />
        <span>나만의 뉴욕</span>
        <span>뉴욕의 거리에서 촬영한 티파니 노트 캠페인의 비하인드 씬을 만나보세요.</span>
      </li>
      <li className="#mainimg4">
      <img src={Box14} />
        <span>독보적인 디자인</span>
        <span>Tiffany HardWear와 함께라면 불가능은 없습니다.</span>
      </li>
    </ul>
    <p id="prev"><AiOutlineArrowLeft /></p>
    <p id="next"><AiOutlineArrowRight /></p>

    <p class="no">
      <a href=".mainimg1"></a>
      <a href=".mainimg2"></a>
      <a href=".mainimg3"></a>
      <a href=".mainimg4"></a></p>
      </div>
      </div>
</article>
</>
    );
}

export default Maincontent