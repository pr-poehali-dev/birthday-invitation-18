
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, PartyPopper, Music, Utensils, Waves } from "lucide-react";

interface DetailSectionProps {
  onBack: () => void;
}

const DetailSection = ({ onBack }: DetailSectionProps) => {
  return (
    <div className="space-y-6 w-full max-w-3xl mx-auto">
      <Button 
        variant="outline" 
        onClick={onBack} 
        className="mb-4 bg-white/80"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Назад
      </Button>
      
      <h2 className="text-3xl font-bold text-primary text-center">
        Готовьтесь к незабываемому празднику!
      </h2>
      
      <p className="text-lg text-center">
        Жду именно тебя на моё 18-летие! Готовьтесь к крутому отдыху в шикарном коттедже 
        с баней, бассейном и кучей веселья! Будет музыка, танцы, вкусная еда и море позитива)
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4 bg-white/80 backdrop-blur-sm border-primary/20">
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
              <Waves className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg">Бассейн и баня</h3>
            <p className="text-sm">
              Расслабься в прекрасной бане и освежись в бассейне в любое время вечеринки
            </p>
          </div>
        </Card>
        
        <Card className="p-4 bg-white/80 backdrop-blur-sm border-primary/20">
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
              <Music className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg">Музыка и танцы</h3>
            <p className="text-sm">
              Отрывайся под зажигательные треки и проведи ночь в танцах
            </p>
          </div>
        </Card>
        
        <Card className="p-4 bg-white/80 backdrop-blur-sm border-primary/20">
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
              <Utensils className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg">Вкусная еда</h3>
            <p className="text-sm">
              Широкий выбор вкусных закусок и напитков для всех гостей
            </p>
          </div>
        </Card>
      </div>
      
      <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-primary/20 mt-6">
        <h3 className="text-xl font-semibold mb-4">Важная информация:</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <PartyPopper className="h-5 w-5 text-primary shrink-0 mt-1" />
            <span>Праздник начнется <strong>16 мая в 19:00</strong> и закончится <strong>17 мая в 13:00</strong></span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-lg">🚗</span>
            <span>Адрес: 31, Южный мкр, пос. Солонцы, Емельяновский район, Красноярский край</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-lg">👩</span>
            <span>По всем вопросам обращайтесь к Иришке: <strong>+7 950 975 82 00</strong></span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-lg">🎁</span>
            <span>Самый лучший подарок - твое присутствие и хорошее настроение!</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DetailSection;
