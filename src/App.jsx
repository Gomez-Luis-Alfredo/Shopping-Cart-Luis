import {useState } from "react"
import { Products } from "./components/Products.jsx"
import { products as intialProducts} from "./mocks/products.json"
import {Header} from './components/Header.jsx'
import {Footer} from './components/Footer.jsx'
import { useFilters } from "./hoocks/usefilters.js"
import {Cart} from './components/Cart.jsx'
import {CartProvider} from './context/cart.jsx'



function App() {
  const [products] = useState(intialProducts)
  const {filterProducts} = useFilters()
  const filteredProducts = filterProducts(products)
   
  return (
    <CartProvider>
      <Header />
      <Cart/>
      <Products products={filteredProducts}/>
      <Footer />
    </CartProvider>
  )
}

export default App
