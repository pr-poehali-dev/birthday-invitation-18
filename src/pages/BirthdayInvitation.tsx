
import { useState } from "react";
import InvitationCard from "@/components/InvitationCard";
import DetailSection from "@/components/DetailSection";

const BirthdayInvitation = () => {
  const [showDetails, setShowDetails] = useState(false);

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
        
        {!showDetails ? (
          <InvitationCard onDetails={() => setShowDetails(true)} />
        ) : (
          <DetailSection onBack={() => setShowDetails(false)} />
        )}
      </div>
    </div>
  );
};

export default BirthdayInvitation;
