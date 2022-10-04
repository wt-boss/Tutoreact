import React from 'react'
import './App.css';
import './components/Clock'
import Clock from './components/Clock';
import Increment from './components/Increment';
import Convertion from './components/Convertion';
import ProductsNAme from './components/ProductsNAme';

export const productsBd =[
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
  
]
export  const ProductsContext = React.createContext(productsBd)

export default function App({name , children}) {

  return (
    <ProductsContext.Provider value={productsBd} >
    <div className='row'>
     <h1 className='text-dark text-center pt-5 ' > Welcome  {name='Yvan'} !!</h1>
     <div className='container'>
        <div className='row d-flex justify-content-center '>
        <ProductsNAme></ProductsNAme>
        </div>
     </div>
     
    </div>
    </ProductsContext.Provider>

  )
}



