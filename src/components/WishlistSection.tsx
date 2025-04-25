
import { Card } from "@/components/ui/card";
import { Gift, ShoppingBag, Gem, Book, Gamepad } from "lucide-react";

const WishlistSection = () => {
  return (
    <div className="space-y-6 w-full max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-primary text-center">
        Мой вишлист
      </h2>
      
      <p className="text-lg text-center mb-6">
        Если вы хотите подарить что-то особенное, вот несколько идей, которые мне понравятся!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-5 bg-white/80 backdrop-blur-sm border-primary/20 transition-all hover:shadow-md hover:scale-[1.02]">
          <div className="flex items-start space-x-3">
            <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Gift className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Подарочные карты</h3>
              <p className="text-sm text-gray-600">
                Подарочная карта в OZON, Wildberries или Steam
              </p>
            </div>
          </div>
        </Card>
        
        <Card className="p-5 bg-white/80 backdrop-blur-sm border-primary/20 transition-all hover:shadow-md hover:scale-[1.02]">
          <div className="flex items-start space-x-3">
            <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
              <ShoppingBag className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Стильная одежда</h3>
              <p className="text-sm text-gray-600">
                Стильные худи или кроссовки (размер M, 42)
              </p>
            </div>
          </div>
        </Card>
        
        <Card className="p-5 bg-white/80 backdrop-blur-sm border-primary/20 transition-all hover:shadow-md hover:scale-[1.02]">
          <div className="flex items-start space-x-3">
            <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Gem className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Аксессуары</h3>
              <p className="text-sm text-gray-600">
                Стильные часы или беспроводные наушники
              </p>
            </div>
          </div>
        </Card>
        
        <Card className="p-5 bg-white/80 backdrop-blur-sm border-primary/20 transition-all hover:shadow-md hover:scale-[1.02]">
          <div className="flex items-start space-x-3">
            <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Gamepad className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Игровые принадлежности</h3>
              <p className="text-sm text-gray-600">
                Игровая мышь или коврик для мыши
              </p>
            </div>
          </div>
        </Card>
      </div>
      
      <div className="text-center mt-6 p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-primary/20">
        <p className="text-sm text-gray-600 italic">
          Но самый лучший подарок - это твоё присутствие и хорошее настроение! 🎉
        </p>
      </div>
    </div>
  );
};

export default WishlistSection;
