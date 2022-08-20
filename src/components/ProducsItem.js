import React from 'react'

export default function ProducsItem({produit}) {

  const productClass = (produit.stocked==true)?'text-danger':'' 
  console.log(productClass);

  return (
    <>
        <tr>
            <td  className={productClass}>{produit.name}</td>
            <td>{produit.price}</td>

        </tr>
    </>
  )
}
