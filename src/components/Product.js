
import React from 'react'
import ProducsItem from './ProducsItem';

export default function product({produits , name , hideStoked}) {

  const belongTo =(cathegoryName)=>{
      if(cathegoryName==name){
        return true
      }
      else {
        return false
      }
  }

  const isStoked = ()=>{
    if(hideStoked){

    }
  }
  const productList =(produits).map((produit , index)=> 
   (belongTo(produit.category)&& ((!hideStoked)||(hideStoked&&produit.stocked))) ? <ProducsItem  produit ={produit}/> :null 
   

  )

 


  return (
    <>

  
      {productList}

    </>  
    )
}
