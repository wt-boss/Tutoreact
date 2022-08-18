import React, { Component } from 'react'
import Product from './Product'
import ProductsCathegories from './ProductsCathegories'

export default function ProductsTable({products}) {

        let productsList =products
        let cathegories =[];

        products.forEach(product => {
            [...cathegories,product.cathegory]
        });

    return (
      <div className='row'>
          <div className='col-md-8'>
          <table className='table table-bordered'>

                <thead>
                    <tr>
                        <th scope="col" >products</th>
                        <th scope="col" >prix</th>
                    </tr>
                </thead>

                <tbody>
                <ProductsCathegories/>
                <Product/>
                </tbody>

            </table>              
              
          </div>
 
      </div>
    )

}
