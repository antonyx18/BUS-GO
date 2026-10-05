import { Bus as BusIcon, Ticket, Home, Search } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => onNavigate('home')} className="flex items-center gap-2 group">
            <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-700 transition-colors">
              <BusIcon className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-800 hidden sm:block">
              Bus<span className="text-blue-600">Go</span>
            </span>
          </button>

          <nav className="flex items-center gap-1 sm:gap-2">
            <NavButton icon={<Home className="w-4 h-4" />} label="Home" active={currentPage === 'home'} onClick={() => onNavigate('home')} />
            <NavButton icon={<Search className="w-4 h-4" />} label="Search" active={currentPage === 'results'} onClick={() => onNavigate('results')} />
            <NavButton icon={<Ticket className="w-4 h-4" />} label="My Bookings" active={currentPage === 'bookings'} onClick={() => onNavigate('bookings')} />
          </nav>
        </div>
      </div>
    </header>
  );
}

function NavButton({ icon, label, active, onClick }: { icon: React.ReactNode; label: string; active: boolean; onClick: () => void; }) {
  return (
    <button onClick={onClick}
      className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-all ${
        active ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
      }`}>
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}
