
import React from 'react'
import ProducsItem from './ProducsItem';

export default function product({produits , name}) {

  const filterProduct = (nameCategory) => {
    produits.filter ((nameCategory) => !nameCategory);
    return true;
  }

  const belongTo =(cathegoryName)=>{
      if(cathegoryName==name){
        return true
      }
      else {
        return false
      }
  }
  const productList =(produits).map((produit , index)=> 
   belongTo(produit.category) ? <ProducsItem produit ={produit}/> :null

  )


  return (
    <>
      {productList}

    </>  
    )
}
