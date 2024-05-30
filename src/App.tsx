
import Header from '../components/header'
import './App.css'
import FlightDetails from './components/FlightDetails'

function App() {

  return (
    <>
    <div className="bg-gray-100 min-h-screen">
     
     <main className="container mx-auto py-6">
       <div className='flex gap-5 '>
         <aside className='bg-white rounded-lg  w-2/5'/>

         <div className='space-y-5'>
         <Header/>
         <FlightDetails />
         </div>

       </div>
     </main>
   </div>
    </>
  )
}

export default App
