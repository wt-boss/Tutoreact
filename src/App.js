import React, { /* useState */ } from 'react'
import './App.css';
import { BrowserRouter as Router ,Routes , Route } from 'react-router-dom';
/* import Clock from './components/Clock';
import Increment from './components/Increment';
import Convertion from './components/Convertion';
import ProductsManager from './components/ProductsManager';
*/
import Stundent from './pages/Stundent'; 
import AddStudents from './pages/AddStudents';


export default function App({name , children}) {
/* const products =[
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
] */




  return (
/*     <div className='row'>
     <h1 className='text-dark text-center pt-5 ' > Welcome  {name='Yvan'} !!</h1>
     <div className='container'>
        <div className='row d-flex justify-content-center '>
        <ProductsManager products={products}></ProductsManager>
        </div>
     </div>
     
    </div> */


    < div className='py-5'>

        <Router>
          <Routes>
                <Route  path='/' element={<Stundent/>}/>
                <Route  path='/add-student' element={<AddStudents/>}/>
          </Routes>

      
        </Router>

    </div>
  )
}



