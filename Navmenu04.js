import React from "react";
import '../index.css'

function Navmenu04(){
    return(
<section id="nav04">
    <h3>Contact Us</h3>

<form action="#" method="post">
    <fieldset>
        <legend></legend>
    <ul>
        <li>
            <label for="userName">Name</label>
            <input type="text" id="userName" placeholder="강해린" /></li>

        <li>
            <label for="userEmail">Email</label>
            <input type="text" id="userEmail" placeholder="abc@naver.com" /></li>

        <li>
            <label for="userTel">Phone</label>
            <input type="text" id="userTel" placeholder="000-1234-5678" /></li>

        <li>
            <label for="userMessage">Message</label>
            <textarea name="userMessage" id="userMessage" cols="30" rows="10" placeholder="Hear You" /></li>
    </ul>
    <p className="submit_btn">
        <input type="submit" value="submit" />
    </p>
    </fieldset>
</form>
</section>
    );
}

export default Navmenu04