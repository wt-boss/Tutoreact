import React, { Component, useContext, useState } from 'react'
import Product from './Product'
import ProductsCathegories from './ProductsCathegories'
import {ProductsContext} from  '../App'

export default function ProductsTable() {

  const productsBd = useContext(ProductsContext) ;
            const  produits=[...productsBd] ;
            const allCathegories =(produits).map((produit)=>produit.category); 
            const cathegories=[...new Set(allCathegories)] ;
         
  const cathegoriesProduits = (cathegories).map((cathegorie)=>
    <ProductsCathegories  name ={cathegorie}/>
    
    )

      return (
        <div className='row'>

            <div className='col-md-8'>
            <table className='table table-bordered'>
                  <thead>
                      <tr>
                          <th scope="col" >Products</th>
                          <th scope="col" >Prix</th>
                      </tr>
                  </thead>
  
                  <tbody>

                    {cathegoriesProduits}
                  </tbody>
  
              </table>              
                
            </div>
            
        </div>

       
      )
 
            
    


}
