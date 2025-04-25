
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Calendar, Clock, Music, Utensils, Swimming, PartyPopper } from "lucide-react";

interface InvitationCardProps {
  onClick: () => void;
}

const InvitationCard = ({ onClick }: InvitationCardProps) => {
  return (
    <Card className="w-full max-w-md bg-white/80 backdrop-blur-sm shadow-lg border-primary/20 overflow-hidden">
      <CardHeader className="bg-primary/20 pb-2">
        <CardTitle className="text-2xl text-center text-primary font-bold">
          Приглашение на день рождения!
        </CardTitle>
        <CardDescription className="text-center text-lg font-medium">
          🎉 18 лет 🎉
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6 space-y-4">
        <div className="text-xl font-semibold text-center mb-4">
          Жду именно тебя на моё 18-летие!
        </div>
        
        <div className="flex items-start gap-3">
          <Calendar className="h-5 w-5 text-primary shrink-0 mt-1" />
          <div>
            <div className="font-semibold">Дата:</div>
            <div>16 мая - 17 мая</div>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <Clock className="h-5 w-5 text-primary shrink-0 mt-1" />
          <div>
            <div className="font-semibold">Время:</div>
            <div>Начало в 19:00 (16 мая)</div>
            <div>Окончание в 13:00 (17 мая)</div>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />
          <div>
            <div className="font-semibold">Место:</div>
            <div>Коттедж по адресу: 31, Южный мкр, пос. Солонцы, Емельяновский район, Красноярский край</div>
          </div>
        </div>

        <div className="pt-2 space-y-2">
          <div className="font-semibold text-center">Вас ждет:</div>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center gap-2">
              <Swimming className="h-4 w-4 text-primary" />
              <span>Бассейн</span>
            </div>
            <div className="flex items-center gap-2">
              <span role="img" aria-label="sauna" className="text-lg">🧖‍♀️</span>
              <span>Баня</span>
            </div>
            <div className="flex items-center gap-2">
              <Music className="h-4 w-4 text-primary" />
              <span>Музыка и танцы</span>
            </div>
            <div className="flex items-center gap-2">
              <Utensils className="h-4 w-4 text-primary" />
              <span>Вкусная еда</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-4 pt-2">
        <div className="text-center w-full">
          <div className="font-semibold">Организатор:</div>
          <div>Иришка</div>
          <div className="text-primary">+7 950 975 82 00</div>
        </div>
        <Button onClick={onClick} className="w-full group">
          <PartyPopper className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
          Подробнее
        </Button>
      </CardFooter>
    </Card>
  );
};

export default InvitationCard;
