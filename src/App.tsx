import { useCoffees } from './hooks/useCoffees'
import { useState } from 'react'
import '../src/App.css'

import Button from './components/Button'
import Introduction from './components/Introduction'
import CoffeeCard from './components/CoffeeCard'

const App = () => {
  const { data: coffees } = useCoffees()
  const [activeButton, setActiveButton] = useState<string>('')

  return (
    <div className='main'>
      <Introduction />
      <div className='btn-container'>
        <Button
          onClick={() => setActiveButton('allProducts')}
          isActive={activeButton === 'allProducts'}
        >
          All Products
        </Button>
        <Button
          onClick={() => setActiveButton('availableNow')}
          isActive={activeButton === 'availableNow'}
        >
          Available Now
        </Button>
      </div>
      <div className='coffee-list'>
        {coffees?.map((coffee) => (
          <CoffeeCard key={coffee.id} {...coffee} />
        ))}
      </div>
    </div>
  )
}

export default App
