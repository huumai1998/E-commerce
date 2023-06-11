// import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { sampleProducts } from './data'
import { Footer, Navigation } from './components';


function App() {

  return (
    <>
    <Router>
      < body>
      <Navigation />
        <div className='d-flex flex-column vh-100'>
          <ul>
          { sampleProducts.map(product => 
            <li key={product.slug}>
              <img src={product.image} width={50} height={50}/>
              <h2>{product.name}</h2>
              <p>${product.price}</p>
            </li>)
          }
          </ul>
        </div>
        <Footer/>
      </body>
    </Router>
    </>
  )
}

export default App
