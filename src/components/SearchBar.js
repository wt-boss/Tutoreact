import React, { useState ,Component } from 'react'

export default function SearchBar({handlecheck , hideStoked}) {


    return (
        <>
        <form className='row'>
            <div className="form-group col-sm-8 col-md-6 col-lg-4">
               
                <input type="text" class="form-control" id="searchInput"  placeholder="search"></input>
            </div>

            <div className="form-group">
                <label htmlFor="checkInput">Only produck in stock</label>
                <input type="checkbox" class="form-form-check-input" id="checkInput" checked={hideStoked} onChange={handlecheck} ></input>
            </div>
        </form>
            
        </>

       
    )
 
}
