import {Filters} from './Filters'

export const Header = () => {
  return (
    <header>
        <h1>React Shopping Cart<i className="fa-solid fa-cart-shopping"></i></h1>
        <Filters />
    </header>
  )
}
