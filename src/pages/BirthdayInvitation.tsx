
import { useState } from "react";
import InvitationCard from "@/components/InvitationCard";
import DetailSection from "@/components/DetailSection";

const BirthdayInvitation = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div 
      className="min-h-screen py-10 px-4 bg-gradient-to-br from-purple-100 to-pink-100 flex flex-col items-center justify-center"
      style={{
        backgroundImage: `
          radial-gradient(circle at 20% 20%, rgba(155, 135, 245, 0.1) 0%, transparent 30%),
          radial-gradient(circle at 80% 50%, rgba(214, 188, 250, 0.1) 0%, transparent 30%),
          radial-gradient(circle at 40% 70%, rgba(214, 188, 250, 0.1) 0%, transparent 20%)
        `
      }}
    >
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[10%] right-[10%] text-5xl float-animation opacity-70 delay-200">🎈</div>
        <div className="absolute top-[15%] left-[15%] text-4xl float-animation opacity-60 delay-700">🎉</div>
        <div className="absolute bottom-[20%] right-[20%] text-5xl float-animation opacity-70 delay-500">🎁</div>
        <div className="absolute bottom-[15%] left-[10%] text-4xl float-animation opacity-60 delay-300">🎊</div>
        <div className="absolute top-[30%] left-[50%] text-5xl float-animation opacity-70 delay-600">✨</div>
        <div className="absolute top-[70%] left-[20%] text-4xl float-animation opacity-60 delay-100">🎂</div>
      </div>
      
      <div className="container max-w-5xl mx-auto z-10">
        {!showDetails ? (
          <div className="flex flex-col items-center justify-center">
            <div className="text-4xl md:text-6xl font-bold text-center mb-8 text-primary pulse-light">
              <span className="inline-block">18</span>
              <span className="inline-block mx-2">лет</span>
              <span className="inline-block">🎉</span>
            </div>
            <InvitationCard onClick={() => setShowDetails(true)} />
          </div>
        ) : (
          <DetailSection onBack={() => setShowDetails(false)} />
        )}
      </div>
      
      <div className="mt-8 text-center text-sm text-gray-500">
        © 2024 | Приглашение на День Рождения
      </div>
    </div>
  );
};

export default BirthdayInvitation;
