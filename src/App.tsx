import { useCoffees } from './hooks/useCoffees'
import { useState } from 'react'
import '../src/App.css'

import Button from './components/Button'
import Introduction from './components/Introduction'
import CoffeeCard from './components/CoffeeCard'

const App = () => {
  const { data: coffees, isError, error, isLoading } = useCoffees()
  const [activeButton, setActiveButton] = useState<string>('allProducts')
  const [filtered, setFiltered] = useState(false)

  const filteredData = coffees?.filter((coffee) => coffee.available)

  return (
    <div className='main'>
      <Introduction />
      <div className='btn-container'>
        <Button
          onClick={() => {
            setActiveButton('allProducts')
            setFiltered(false)
          }}
          isActive={activeButton === 'allProducts'}
          disabled={!coffees}
        >
          All Products
        </Button>
        <Button
          onClick={() => {
            setActiveButton('availableNow')
            setFiltered(true)
          }}
          isActive={activeButton === 'availableNow'}
          disabled={!coffees}
        >
          Available Now
        </Button>
      </div>
      {isLoading && <p className='loading'>Loading...</p>}
      {isError && <p className='error'>{error.message}</p>}
      <div className='coffee-list'>
        {filtered
          ? filteredData?.map((coffee) => (
              <CoffeeCard key={coffee.id} {...coffee} />
            ))
          : coffees?.map((coffee) => (
              <CoffeeCard key={coffee.id} {...coffee} />
            ))}
      </div>
    </div>
  )
}

export default App
