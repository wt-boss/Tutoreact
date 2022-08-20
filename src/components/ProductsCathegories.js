

import React from 'react'
import Product from './Product'

export default function ProductsCathegories({name ,produits}) {

  return (
    <>
    <tr>
    <th colSpan="2" className='text-start'>
       {name}
    </th>
  </tr>
  <Product produits={produits} name={name}/>
  </>
  )
}

