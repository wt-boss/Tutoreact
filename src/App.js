import React from 'react'
import './App.css';
import './components/Clock'
import Clock from './components/Clock';
import Increment from './components/Increment';
import Convertion from './components/Convertion';
import ProductsNAme from './components/ProductsNAme';


export default function App({name , children}) {
  return (
    <div className='row'>
     <h1 className='text-dark text-center pt-5 ' > Welcome  {name='Yvan'} !!</h1>
     <div className='container'>
        <div className='row d-flex justify-content-center '>
        <ProductsNAme></ProductsNAme>
        </div>
     </div>
     
    </div>
  )
}



