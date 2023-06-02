import { useState } from 'react'
import { sampleProducts } from './data'

function App() {

  return (
    <>
    <header>Hallo</header>
    <div>
      
      <ul>
      { sampleProducts.map(product => 
        <li>
          <img src={product.image} width={50} height={50}/>
          <h2>{product.name}</h2>
        </li>)
      }
      </ul>
    </div>
    </>
  )
}

export default App
