import { Trophy, Users, TrendingUp, Info } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const FantasyReal = () => {
  // Real players from MFL Fantasy
  const myTeam = [
    { 
      id: 1, 
      name: "Клён", 
      position: "Нападающий",
      points: 15,
      team: "КОМАНДА 1",
      form: 7,
      price: 11
    },
    { 
      id: 2, 
      name: "Коняев", 
      position: "Полузащитник",
      points: 13,
      team: "КОМАНДА 2",
      form: 7,
      price: 10
    },
    { 
      id: 3, 
      name: "Дорджи", 
      position: "Защитник",
      points: 10,
      team: "КОМАНДА 1",
      form: 5,
      price: 7
    },
    { 
      id: 4, 
      name: "Гарипов", 
      position: "Вратарь",
      points: 8,
      team: "КОМАНДА 3",
      form: 4,
      price: 5
    },
  ];

  const topPlayers = [
    { id: 1, name: "Клён", points: 15, team: "КОМАНДА 1", trend: "+7" },
    { id: 2, name: "Коняев", points: 13, team: "КОМАНДА 2", trend: "+5" },
    { id: 3, name: "Дорджи", points: 10, team: "КОМАНДА 1", trend: "+3" },
  ];

  const totalPoints = myTeam.reduce((sum, player) => sum + player.points, 0);
  const teamValue = myTeam.reduce((sum, player) => sum + player.price, 0);

  return (
    <div className="p-4 space-y-6 animate-slide-up">
      {/* Header */}
      <div className="text-center space-y-2 pt-4">
        <Trophy className="w-12 h-12 text-primary mx-auto animate-glow-pulse" />
        <h1 className="text-3xl font-bold">Фэнтези МФЛ</h1>
        <p className="text-muted-foreground">Собери команду мечты</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 gap-3">
        <Card className="p-4 bg-gradient-to-br from-primary/20 to-primary/5 border-primary">
          <div className="text-center space-y-1">
            <p className="text-xs text-muted-foreground">Всего очков</p>
            <p className="text-3xl font-bold text-primary">{totalPoints}</p>
          </div>
        </Card>
        <Card className="p-4 bg-card border-border">
          <div className="text-center space-y-1">
            <p className="text-xs text-muted-foreground">Стоимость</p>
            <p className="text-3xl font-bold">{teamValue}</p>
          </div>
        </Card>
      </div>

      {/* Balance & Place */}
      <div className="grid grid-cols-2 gap-3">
        <Card className="p-3 bg-card border-border">
          <div className="text-center">
            <p className="text-xs text-muted-foreground mb-1">Баланс</p>
            <p className="text-2xl font-bold text-primary">100</p>
          </div>
        </Card>
        <Card className="p-3 bg-card border-border">
          <div className="text-center">
            <p className="text-xs text-muted-foreground mb-1">Место</p>
            <p className="text-2xl font-bold">—</p>
          </div>
        </Card>
      </div>

      {/* Info Card */}
      <Card className="p-4 bg-primary/10 border-primary">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-semibold mb-1">10 тур</p>
            <p className="text-muted-foreground">с 27.10.2025</p>
            <p className="text-xs text-muted-foreground mt-2">
              Для полного управления командой перейдите на сайт MFL
            </p>
          </div>
        </div>
      </Card>

      {/* My Team */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            Моя команда
          </h2>
          <Button 
            size="sm" 
            variant="outline" 
            className="border-primary text-primary"
            onClick={() => window.open('https://mfl.life/game/fantasy/7/my-team/stages/35/', '_blank')}
          >
            Изменить
          </Button>
        </div>
        <div className="space-y-2">
          {myTeam.map((player) => (
            <Card key={player.id} className="p-4 bg-card border-border hover:border-primary transition-colors">
              <div className="flex items-center justify-between">
                <div className="space-y-1 flex-1">
                  <p className="font-semibold">{player.name}</p>
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant="secondary" className="text-xs">
                      {player.position}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{player.team}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>Форма: <span className="text-primary font-semibold">{player.form}</span></span>
                    <span>Цена: <span className="text-foreground font-semibold">{player.price}</span></span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-primary">{player.points}</p>
                  <p className="text-xs text-muted-foreground">очков</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Top Players */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          Топ игроки
        </h2>
        <div className="space-y-2">
          {topPlayers.map((player, index) => (
            <Card key={player.id} className="p-4 bg-card border-border">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <p className="font-semibold">{player.name}</p>
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-muted-foreground">{player.points} очков</p>
                    <span className="text-xs text-muted-foreground">• {player.team}</span>
                  </div>
                </div>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                  {player.trend}
                </Badge>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <Button 
        className="w-full bg-primary hover:bg-primary/90 h-12"
        onClick={() => window.open('https://mfl.life/game/fantasy/rating/', '_blank')}
      >
        <Trophy className="w-5 h-5 mr-2" />
        Общий рейтинг
      </Button>

      <Button 
        variant="outline"
        className="w-full border-primary text-primary hover:bg-primary/10 h-12"
        onClick={() => window.open('https://mfl.life/game/fantasy/7/my-team/stages/35/', '_blank')}
      >
        Открыть полную версию на MFL.life
      </Button>
    </div>
  );
};

export default FantasyReal;
