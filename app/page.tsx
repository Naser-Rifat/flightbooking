import FlightDetails from './components/FlightDetails';
import Header from '@/components/header';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
     
      <main className="container mx-auto py-6">
        <div className='flex gap-5 '>
          <aside className='bg-white rounded-lg  w-2/5'/>

          <div className='space-y-2'>
          <Header/>

        <FlightDetails />
          </div>

        </div>
      </main>
    </div>
  );
}
