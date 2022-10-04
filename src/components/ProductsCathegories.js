
import React, { useContext } from 'react'
import { ProductsContext } from '../App'
import Product from './Product'


export default function ProductsCathegories({name }) {


  return (
    <>
    <tr>
    <th colSpan="2" className='text-start'>
       {name}
    </th>
  </tr>
  <Product  name={name}/>
  </>
  )
}

