import { useCoffees } from './hooks/useCoffees'
import '../src/App.css'

const App = () => {
  const { data: coffees } = useCoffees()

  return <div>App</div>
}

export default App
