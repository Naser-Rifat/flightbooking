import Head from 'next/head';
import FlightDetails from './components/FlightDetails';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Flight Booking</title>
        <meta name="description" content="Flight booking details" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="container mx-auto py-6">
        <FlightDetails />
      </main>
      <Footer />
    </div>
  );
}
