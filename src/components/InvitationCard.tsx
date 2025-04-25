
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, PartyPopper, Gift } from "lucide-react";

interface InvitationCardProps {
  onDetails: () => void;
  onWishlist: () => void;
}

const InvitationCard = ({ onDetails, onWishlist }: InvitationCardProps) => {
  return (
    <Card className="w-full max-w-2xl mx-auto overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
          alt="Праздничное оформление"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
        <div className="absolute bottom-0 left-0 p-6">
          <h2 className="text-3xl font-bold text-white">Приглашение</h2>
          <p className="text-white/80">на моё 18-летие</p>
        </div>
      </div>

      <div className="p-6 bg-white">
        <div className="space-y-6">
          <p className="text-lg font-medium">
            Жду именно тебя на моё 18-летие! Готовьтесь к крутому отдыху в шикарном коттедже 
            с баней, бассейном и кучей веселья! Будет музыка, танцы, вкусная еда и море позитива)
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-start space-x-3">
              <Calendar className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium">Дата</p>
                <p className="text-sm">16-17 мая</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Clock className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium">Время</p>
                <p className="text-sm">Начало: 16 мая 19:00</p>
                <p className="text-sm">Окончание: 17 мая 13:00</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 md:col-span-2">
              <MapPin className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium">Адрес</p>
                <p className="text-sm">31, Южный мкр, пос. Солонцы, Емельяновский район, Красноярский край</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 md:col-span-2">
              <PartyPopper className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium">Организатор</p>
                <p className="text-sm">Иришка</p>
                <p className="text-sm">+7 950 975 82 00</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-3 pt-4">
            <Button onClick={onDetails} className="bg-primary hover:bg-primary/90 text-white">
              Подробнее о мероприятии
            </Button>
            <Button 
              onClick={onWishlist} 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10"
            >
              <Gift className="mr-2 h-4 w-4" /> Посмотреть вишлист
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default InvitationCard;
