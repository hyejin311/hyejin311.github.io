import React from "react";
import { useState } from "react";
import '../index.css'

function Search(){

    let [filterSearch,setFilterSeach]= useState('');

    return(
        <div id="search_box">
            <input type="text" name="search"
            placeholder="Type what you want"
            onChange={(e)=>{
                setFilterSeach(e.target.val);
            }}
        
            />
        </div>
    )
}

export default Search