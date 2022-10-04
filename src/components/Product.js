
import React, { useContext } from 'react'
import ProducsItem from './ProducsItem';
import { ProductsContext } from '../App'


export default function product({ name}) {

  const produits  = useContext(ProductsContext); 

  
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
