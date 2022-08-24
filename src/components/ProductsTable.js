import React, { Component, useState } from 'react'
import Product from './Product'
import ProductsCathegories from './ProductsCathegories'

export default function ProductsTable({products , hideStoked}) {

    const produits = [...products]

     const allCathegories =(produits).map((produit)=>produit.category)
     const cathegories=[...new Set(allCathegories)]
    
    
   
    
    console.log(cathegories)

    const cathegoriesProduits = (cathegories).map((cathegorie)=>
    <ProductsCathegories hideStoked={hideStoked} produits={produits} name ={cathegorie}/>
    
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
