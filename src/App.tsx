import { useCoffees } from './hooks/useCoffees'
import '../src/App.css'

import Introduction from './components/Introduction'

import CoffeeCard from './components/CoffeeCard'

const App = () => {
  const { data: coffees } = useCoffees()

  return (
    <div className='main'>
      <Introduction />
      <div className='coffee-list'>
        {coffees?.map((coffe) => (
          <CoffeeCard key={coffe.id} {...coffe} />
        ))}
      </div>
    </div>
  )
}

export default App
