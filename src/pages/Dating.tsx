import { useState } from "react";
import { Heart, X, MapPin, Users as UsersIcon, Coins, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

interface Profile {
  id: number;
  name: string;
  age: number;
  city: string;
  team: string;
  bio: string;
  emoji: string;
}

const Dating = () => {
  const [profiles] = useState<Profile[]>([
    {
      id: 1,
      name: "Алексей",
      age: 28,
      city: "Москва",
      team: "Амкал",
      bio: "Болею за Амкал с первого сезона! Люблю футбол и атмосферу МФЛ",
      emoji: "⚽",
    },
    {
      id: 2,
      name: "Мария",
      age: 25,
      city: "Санкт-Петербург",
      team: "Легион",
      bio: "Фанатка Легиона, хожу на каждый матч! Ищу единомышленников",
      emoji: "🎯",
    },
    {
      id: 3,
      name: "Дмитрий",
      age: 30,
      city: "Москва",
      team: "Смешарики",
      bio: "Играл в любительском футболе, теперь болею за МФЛ",
      emoji: "🏆",
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [matches, setMatches] = useState(0);

  const currentProfile = profiles[currentIndex];

  const handleSwipe = (liked: boolean) => {
    if (liked) {
      const isMatch = Math.random() > 0.5;
      if (isMatch) {
        setMatches(prev => prev + 1);
        toast.success("🎉 Мэтч! Начни общение", {
          duration: 3000,
        });
      } else {
        toast("💙 Лайк отправлен", {
          duration: 2000,
        });
      }
    }

    if (currentIndex < profiles.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      toast("😊 Больше нет профилей. Попробуй позже!", {
        duration: 3000,
      });
    }
  };

  if (!currentProfile) {
    return (
      <div className="p-4 flex items-center justify-center min-h-screen">
        <Card className="p-8 text-center space-y-4">
          <UsersIcon className="w-16 h-16 text-primary mx-auto" />
          <h2 className="text-2xl font-bold">Все профили просмотрены</h2>
          <p className="text-muted-foreground">Загляни позже, появятся новые фанаты!</p>
          <Button className="bg-primary hover:bg-primary/90">
            <Coins className="w-4 h-4 mr-2" />
            Получить больше свайпов
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-6 animate-slide-up">
      {/* Header */}
      <div className="text-center space-y-2 pt-4">
        <UsersIcon className="w-12 h-12 text-primary mx-auto animate-glow-pulse" />
        <h1 className="text-3xl font-bold">Знакомства</h1>
        <p className="text-muted-foreground">Найди единомышленников МФЛ</p>
      </div>

      {/* Matches Counter */}
      <Card className="p-4 bg-gradient-to-br from-primary/20 to-primary/5 border-primary">
        <div className="flex items-center justify-center gap-3">
          <Heart className="w-6 h-6 text-primary" />
          <span className="text-2xl font-bold text-primary">{matches}</span>
          <span className="text-sm text-muted-foreground">мэтчей</span>
        </div>
      </Card>

      {/* Profile Card */}
      <Card className="overflow-hidden border-border bg-card">
        {/* Profile Image */}
        <div className="aspect-[3/4] bg-gradient-to-br from-primary/30 to-secondary flex items-center justify-center relative">
          <span className="text-9xl">{currentProfile.emoji}</span>
          <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
            {currentProfile.team}
          </Badge>
        </div>

        {/* Profile Info */}
        <div className="p-6 space-y-4">
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2">
              {currentProfile.name}, {currentProfile.age}
            </h2>
            <div className="flex items-center gap-2 text-muted-foreground mt-1">
              <MapPin className="w-4 h-4" />
              <span>{currentProfile.city}</span>
            </div>
          </div>

          <p className="text-foreground">{currentProfile.bio}</p>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <Button
              onClick={() => handleSwipe(false)}
              variant="outline"
              size="lg"
              className="flex-1 h-14 border-destructive text-destructive hover:bg-destructive/10"
            >
              <X className="w-6 h-6" />
            </Button>
            <Button
              onClick={() => handleSwipe(true)}
              size="lg"
              className="flex-1 h-14 bg-primary hover:bg-primary/90"
            >
              <Heart className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </Card>

      {/* Messages Button */}
      {matches > 0 && (
        <Button 
          variant="outline" 
          className="w-full h-12 border-primary text-primary hover:bg-primary/10"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          Мои мэтчи ({matches})
        </Button>
      )}

      {/* Remaining Profiles */}
      <div className="text-center text-sm text-muted-foreground">
        Осталось профилей: {profiles.length - currentIndex - 1}
      </div>
    </div>
  );
};

export default Dating;
