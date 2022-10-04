import React, { Component } from 'react'
import ProductsTable from './ProductsTable'
import SearchBar from './SearchBar'

export default function() {
   
    return (
       
      <div className='col-sm-10 col-md-9 p-5'>

        <SearchBar></SearchBar>
        <ProductsTable ></ProductsTable>
      </div>
    )

}
