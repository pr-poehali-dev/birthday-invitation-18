
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PartyPopper, Music, Utensils, Waves } from "lucide-react";

interface InvitationCardProps {
  onDetails: () => void;
}

const InvitationCard = ({ onDetails }: InvitationCardProps) => {
  return (
    <Card className="w-full max-w-md mx-auto overflow-hidden shadow-xl border-purple-300 bg-white/90 backdrop-blur-sm animate-fade-in">
      <div className="relative h-48 bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-40"></div>
        <div className="relative z-10 text-white text-center px-4">
          <div className="animate-scale-in">
            <PartyPopper className="mx-auto h-12 w-12 mb-2" />
            <h1 className="text-3xl font-bold">Приглашение</h1>
            <p className="text-lg">на моё 18-летие!</p>
          </div>
        </div>
      </div>
      
      <div className="p-6 space-y-6">
        <div className="text-center">
          <p className="text-lg font-medium text-purple-700">
            Жду именно тебя на моё 18-летие!
          </p>
          <p className="mt-2 text-gray-600">
            Готовьтесь к крутому отдыху в шикарном коттедже 
            с баней, бассейном и кучей веселья! Будет музыка, танцы, 
            вкусная еда и море позитива)
          </p>
        </div>
        
        <div className="grid grid-cols-3 gap-3">
          <div className="flex flex-col items-center text-center">
            <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
              <Waves className="h-5 w-5 text-purple-600" />
            </div>
            <span className="mt-1 text-sm font-medium">Бассейн</span>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
              <Music className="h-5 w-5 text-purple-600" />
            </div>
            <span className="mt-1 text-sm font-medium">Музыка</span>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
              <Utensils className="h-5 w-5 text-purple-600" />
            </div>
            <span className="mt-1 text-sm font-medium">Еда</span>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">16 мая, 19:00</p>
              <p className="text-sm text-gray-500">ул. Южная 31, пос. Солонцы</p>
            </div>
            <Button 
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              onClick={onDetails}
            >
              Подробнее
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default InvitationCard;
