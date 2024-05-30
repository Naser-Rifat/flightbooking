
import Breadcrumb from '../components/breadCrumb'
import './App.css'
import FlightDetails from './pages/home'

function App() {

  return (
    <>
    <div className="bg-gray-100 min-h-screen">
     <header className='h-16 bg-white'/>
     <main className="container mx-auto py-6">
       <div className='flex gap-5 '>
         <aside className='bg-white rounded-lg hidden md:block w-3/12'/>
         <div className='space-y-5'>
         <Breadcrumb/>
         <FlightDetails />
         </div>

       </div>
     </main>
   </div>
    </>
  )
}

export default App
