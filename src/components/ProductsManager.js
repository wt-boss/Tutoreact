import React, {useState , Component } from 'react'
import ProductsTable from './ProductsTable'
import SearchBar from './SearchBar'

export default function ProductsManager ({products}) {

  const [hideStoked , setHideStoked]=useState(false)

  const handlecheck = (e)=>{
         
    setHideStoked(e.target.checked)
  }
   
    return (
       
      <div className='col-sm-10 col-md-9 p-5'>

        <SearchBar handlecheck={handlecheck} hideStoked={hideStoked} ></SearchBar>
        <ProductsTable products={products} hideStoked={hideStoked}></ProductsTable>
      </div>
    )

}
