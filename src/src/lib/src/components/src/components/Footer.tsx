import { Bus as BusIcon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <BusIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">Bus<span className="text-blue-400">Go</span></span>
            </div>
            <p className="text-sm text-slate-400">
              Your one-stop platform for booking bus tickets across India. Compare prices, choose seats, and travel with confidence.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm">Popular Routes</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white transition-colors cursor-pointer">Bangalore → Chennai</li>
              <li className="hover:text-white transition-colors cursor-pointer">Mumbai → Pune</li>
              <li className="hover:text-white transition-colors cursor-pointer">Bangalore → Hyderabad</li>
              <li className="hover:text-white transition-colors cursor-pointer">Chennai → Madurai</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm">Support</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white transition-colors cursor-pointer">Help Center</li>
              <li className="hover:text-white transition-colors cursor-pointer">Cancellation Policy</li>
              <li className="hover:text-white transition-colors cursor-pointer">Terms of Service</li>
              <li className="hover:text-white transition-colors cursor-pointer">Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-8 pt-6 text-center text-sm text-slate-400">
          <p>BusGo — A Web Technology Mini Project. Built with React, TypeScript &amp; Bolt Database.</p>
        </div>
      </div>
    </footer>
  );
}
