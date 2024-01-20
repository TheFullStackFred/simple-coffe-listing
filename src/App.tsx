import { useCoffees } from './hooks/useCoffees'

const App = () => {
  const { data: coffees } = useCoffees()

  return <div>App</div>
}

export default App
