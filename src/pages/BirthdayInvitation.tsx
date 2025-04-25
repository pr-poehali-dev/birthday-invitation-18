
import { useState } from "react";
import InvitationCard from "@/components/InvitationCard";
import DetailSection from "@/components/DetailSection";
import WishlistSection from "@/components/WishlistSection";

const BirthdayInvitation = () => {
  const [currentView, setCurrentView] = useState<'invitation' | 'details' | 'wishlist'>('invitation');

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-pink-50 p-4 sm:p-6 md:p-8">
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-fixed opacity-10 z-0"></div>
      
      <div className="absolute top-0 right-0 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 left-36 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-36 right-36 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto pt-8 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 inline-block">
            День Рождения!
          </h1>
        </div>
        
        {currentView === 'invitation' && (
          <InvitationCard 
            onDetails={() => setCurrentView('details')} 
            onWishlist={() => setCurrentView('wishlist')}
          />
        )}
        
        {currentView === 'details' && (
          <DetailSection 
            onBack={() => setCurrentView('invitation')} 
            onWishlist={() => setCurrentView('wishlist')}
          />
        )}
        
        {currentView === 'wishlist' && (
          <div className="space-y-6">
            <button 
              onClick={() => setCurrentView('invitation')}
              className="flex items-center justify-center space-x-2 text-primary hover:text-primary/80 transition-colors px-4 py-2 rounded-md bg-white/80 shadow-sm mx-auto mb-6"
            >
              <span>← Назад к приглашению</span>
            </button>
            <WishlistSection />
          </div>
        )}
      </div>
    </div>
  );
};

export default BirthdayInvitation;
