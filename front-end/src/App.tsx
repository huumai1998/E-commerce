// import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { sampleProducts } from './data'
import { Nav } from './components';


function App() {

  return (
    <>
    <Router>
      < body>
      <Nav />
        <div>
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
      </body>
    </Router>
    </>
  )
}

export default App
