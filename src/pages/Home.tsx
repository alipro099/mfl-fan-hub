import { Calendar, MapPin, Play, ShoppingBag, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Home = () => {
  const matches = [
    {
      id: 1,
      date: "25 ноября 2025",
      time: "19:00",
      team1: "Амкал",
      team2: "Легион",
      location: "Арена МФЛ",
      isLive: true,
      streamUrl: "https://mfl.life",
    },
    {
      id: 2,
      date: "27 ноября 2025",
      time: "20:00",
      team1: "Смешарики",
      team2: "Зеленый мыс",
      location: "Арена МФЛ",
      isLive: false,
    },
  ];

  const videos = [
    {
      id: 1,
      title: "Лучшие моменты матча",
      thumbnail: "🎬",
      duration: "5:32",
    },
    {
      id: 2,
      title: "Интервью с капитаном",
      thumbnail: "🎤",
      duration: "3:15",
    },
  ];

  return (
    <div className="p-4 space-y-6 animate-slide-up">
      {/* Header */}
      <div className="text-center space-y-2 pt-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent">
          MFL
        </h1>
        <p className="text-muted-foreground">Winline Media League</p>
      </div>

      {/* Matches */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Calendar className="w-5 h-5 text-primary" />
          Расписание матчей
        </h2>
        <div className="space-y-3">
          {matches.map((match) => (
            <Card key={match.id} className="p-4 bg-card border-border hover:border-primary transition-colors">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {match.date} • {match.time}
                  </div>
                  {match.isLive && (
                    <Badge className="bg-primary text-primary-foreground animate-glow-pulse">
                      LIVE
                    </Badge>
                  )}
                </div>
                
                <div className="flex items-center justify-between text-lg font-semibold">
                  <span>{match.team1}</span>
                  <span className="text-primary">VS</span>
                  <span>{match.team2}</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  {match.location}
                </div>

                {match.isLive && match.streamUrl && (
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Play className="w-4 h-4 mr-2" />
                    Смотреть трансляцию
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Videos */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Play className="w-5 h-5 text-primary" />
          Видео и хайлайты
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {videos.map((video) => (
            <Card key={video.id} className="p-3 bg-card border-border hover:border-primary transition-colors cursor-pointer">
              <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center text-4xl mb-2">
                {video.thumbnail}
              </div>
              <p className="text-sm font-medium line-clamp-2">{video.title}</p>
              <p className="text-xs text-muted-foreground mt-1">{video.duration}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Shop */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <ShoppingBag className="w-5 h-5 text-primary" />
          Магазин
        </h2>
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="h-auto py-6 flex-col gap-2 border-primary hover:bg-primary/10">
            <Ticket className="w-8 h-8 text-primary" />
            <span>Купить билет</span>
          </Button>
          <Button variant="outline" className="h-auto py-6 flex-col gap-2 border-primary hover:bg-primary/10">
            <ShoppingBag className="w-8 h-8 text-primary" />
            <span>Купить мерч</span>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
