
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './CoffeeCard/CoffeeCard'
import { useState } from 'react'

function App() {
  const loaderCoffees = useLoaderData()
  const [coffees, setCoffees] = useState(loaderCoffees)

  return (
    <div className='m-2'>

      <h1 className='text-4xl text-center text-purple-600 font-semibold'>Coffee Store: {coffees.length}</h1>

      <div className='grid md:grid-cols-2 gap-6 mt-10'>
        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
            > </CoffeeCard>)
        }

      </div>
    </div>
  )
}

export default App
