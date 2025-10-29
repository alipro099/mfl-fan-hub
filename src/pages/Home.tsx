import { Calendar, MapPin, Play, ShoppingBag, Ticket, Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import mflLogo from "@/assets/mfl-logo.png";
import bestGoalsThumb from "@/assets/best-goals.png";
import matchReviewThumb from "@/assets/match-review.png";

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
      ticketUrl: "https://krd.kassir.ru/sport/final-winline-kubka-mediynoy-ligi",
    },
    {
      id: 2,
      date: "27 ноября 2025",
      time: "20:00",
      team1: "Смешарики",
      team2: "Зеленый мыс",
      location: "Арена МФЛ",
      isLive: false,
      ticketUrl: "https://krd.kassir.ru/sport/final-winline-kubka-mediynoy-ligi",
    },
  ];

  const videos = [
    {
      id: 1,
      title: "Лучшие голы сезона",
      thumbnail: bestGoalsThumb,
      duration: "13:13",
      url: "https://youtu.be/PU6t9KSDoGk?si=pML0lI_mQHvkYmMG",
    },
    {
      id: 2,
      title: "Обзор матча",
      thumbnail: matchReviewThumb,
      duration: "8:54",
      url: "https://youtu.be/dXHxT74tkgs?si=FCI1CxfLXy-Lu6fL",
    },
  ];

  const socialLinks = [
    {
      id: 1,
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/winline.media.league",
      color: "from-pink-500 to-purple-500",
    },
    {
      id: 2,
      name: "Telegram",
      icon: Send,
      url: "https://t.me/WinlineML",
      color: "from-blue-400 to-blue-600",
    },
    {
      id: 3,
      name: "YouTube",
      icon: Play,
      url: "https://youtube.com/@winline.media.league",
      color: "from-red-500 to-red-700",
    },
  ];

  return (
    <div className="p-4 space-y-6 animate-slide-up">
      {/* Header */}
      <div className="text-center space-y-2 pt-4">
        <img src={mflLogo} alt="MFL Logo" className="w-32 h-32 mx-auto" />
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

                <div className="flex gap-2">
                  {match.isLive && match.streamUrl && (
                    <Button 
                      className="flex-1 bg-primary hover:bg-primary/90"
                      onClick={() => window.open(match.streamUrl, '_blank')}
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Смотреть трансляцию
                    </Button>
                  )}
                  <Button 
                    variant="outline"
                    className="flex-1 border-primary text-primary hover:bg-primary/10"
                    onClick={() => window.open(match.ticketUrl, '_blank')}
                  >
                    <Ticket className="w-4 h-4 mr-2" />
                    Купить билет
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Media Section */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Play className="w-5 h-5 text-primary" />
          Медиа
        </h2>
        <div className="grid grid-cols-3 gap-3">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <Card 
                key={social.id} 
                className="p-4 bg-card border-border hover:border-primary transition-colors cursor-pointer"
                onClick={() => window.open(social.url, '_blank')}
              >
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${social.color} flex items-center justify-center mx-auto mb-2`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-xs font-medium text-center">{social.name}</p>
              </Card>
            );
          })}
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
            <Card 
              key={video.id} 
              className="p-3 bg-card border-border hover:border-primary transition-colors cursor-pointer"
              onClick={() => window.open(video.url, '_blank')}
            >
              <div className="aspect-video bg-secondary rounded-lg overflow-hidden mb-2 relative">
                <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <p className="text-sm font-medium line-clamp-2">{video.title}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Shop */}
      <section className="space-y-3 pb-6">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <ShoppingBag className="w-5 h-5 text-primary" />
          Магазин
        </h2>
        <div className="grid grid-cols-2 gap-3">
          <Button 
            variant="outline" 
            className="h-auto py-6 flex-col gap-2 border-primary hover:bg-primary/10"
            onClick={() => window.open('https://krd.kassir.ru/sport/final-winline-kubka-mediynoy-ligi', '_blank')}
          >
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
