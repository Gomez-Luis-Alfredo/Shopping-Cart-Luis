import { useFilters } from '../hoocks/usefilters'
import './filter.css'
import { useId } from 'react'

export function Filters () {
  const {filters, setFilters} = useFilters()
  

  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const headleChangeMinPrice= (event) => {
    
    setFilters(prevState => ({
      ...prevState ,
      minPrice: event.target.value
    }))
  }

  const headleChangeCategory = (event) => {
    setFilters (prevState => ({
      ... prevState,
      category: event.target.value
    }))
  }
  return (
    <section className="filters">
        <div>
            <label htmlFor={minPriceFilterId}>Price</label>
            <input type="range"
            id={minPriceFilterId}
            min='0'
            max='1000'
            onChange={headleChangeMinPrice}
            value={filters.minPrice}/>
            <span>{filters.minPrice}</span>
        </div>
        <div>
          <label htmlFor={categoryFilterId}>Category</label>
          <select name="" id={categoryFilterId} onChange={headleChangeCategory}>
          <option value="all">All</option>
            <option value="home-decoration">Home-decoration</option>
            <option value="laptops">Laptops</option>
            <option value="smartphones">Smartphones</option>
            <option value="fragrances">Fragrances</option>
            <option value="skincare">Skincare</option>
            <option value="groceries">Groceries</option>
            
          </select>
        </div>
    </section>
  )
}
