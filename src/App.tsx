import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/components/HomePage';
import ResultsPage from '@/components/ResultsPage';
import SeatSelectionPage from '@/components/SeatSelectionPage';
import PaymentPage from '@/components/PaymentPage';
import ConfirmationPage from '@/components/ConfirmationPage';
import MyBookingsPage from '@/components/MyBookingsPage';
import type { Bus } from '@/lib/supabase';

type Page = 'home' | 'results' | 'seats' | 'payment' | 'confirmation' | 'bookings';

function App() {
  const [page, setPage] = useState<Page>('home');
  const [searchParams, setSearchParams] = useState({
    fromCity: '',
    toCity: '',
    travelDate: new Date().toISOString().split('T')[0],
  });
  const [selectedBus, setSelectedBus] = useState<Bus | null>(null);
  const [bookingId, setBookingId] = useState<string>('');
  const [paymentData, setPaymentData] = useState<{
    selectedSeats: number[];
    name: string;
    email: string;
    phone: string;
  } | null>(null);

  const handleSearch = (from: string, to: string, date: string) => {
    setSearchParams({ fromCity: from, toCity: to, travelDate: date });
    setPage('results');
  };

  const handleSelectBus = (bus: Bus) => {
    setSelectedBus(bus);
    setPage('seats');
  };

  const handleProceedToPayment = (data: {
    selectedSeats: number[];
    name: string;
    email: string;
    phone: string;
  }) => {
    setPaymentData(data);
    setPage('payment');
  };

  const handlePaymentComplete = (id: string) => {
    setBookingId(id);
    setPage('confirmation');
  };

  const handleNavigate = (target: string) => {
    if (target === 'home') setPage('home');
    else if (target === 'results') {
      if (searchParams.fromCity && searchParams.toCity) {
        setPage('results');
      } else {
        setPage('home');
      }
    } else if (target === 'bookings') setPage('bookings');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header currentPage={page} onNavigate={handleNavigate} />

      <main className="flex-1">
        {page === 'home' && <HomePage onSearch={handleSearch} />}

        {page === 'results' && (
          <ResultsPage
            fromCity={searchParams.fromCity}
            toCity={searchParams.toCity}
            travelDate={searchParams.travelDate}
            onSelectBus={handleSelectBus}
            onSearch={handleSearch}
          />
        )}

        {page === 'seats' && selectedBus && (
          <SeatSelectionPage
            bus={selectedBus}
            onBack={() => setPage('results')}
            onProceedToPayment={handleProceedToPayment}
          />
        )}

        {page === 'payment' && selectedBus && paymentData && (
          <PaymentPage
            bus={selectedBus}
            selectedSeats={paymentData.selectedSeats}
            passengerName={paymentData.name}
            passengerEmail={paymentData.email}
            passengerPhone={paymentData.phone}
            onBack={() => setPage('seats')}
            onPaymentComplete={handlePaymentComplete}
          />
        )}

        {page === 'confirmation' && bookingId && (
          <ConfirmationPage
            bookingId={bookingId}
            onGoHome={() => setPage('home')}
            onGoToBookings={() => setPage('bookings')}
          />
        )}

        {page === 'bookings' && <MyBookingsPage onGoHome={() => setPage('home')} />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
