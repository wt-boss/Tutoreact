

import React from 'react'
import Product from './Product'

export default function ProductsCathegories({name ,produits ,hideStoked}) {

  return (
    <>
    <tr>
    <th colSpan="2" className='text-start'>
       {name}
    </th>
  </tr>
  <Product hideStoked={hideStoked} produits={produits} name={name}/>
  </>
  )
}

