import { Trophy, Users, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Fantasy = () => {
  const myTeam = [
    { id: 1, name: "Кузьменко", position: "Нападающий", points: 45, team: "Амкал" },
    { id: 2, name: "Панченко", position: "Полузащитник", points: 38, team: "Легион" },
    { id: 3, name: "Дзюба", position: "Нападающий", points: 52, team: "Смешарики" },
    { id: 4, name: "Акинфеев", position: "Вратарь", points: 41, team: "Зеленый мыс" },
  ];

  const topPlayers = [
    { id: 1, name: "Дзюба", points: 52, trend: "+5" },
    { id: 2, name: "Кузьменко", points: 45, trend: "+3" },
    { id: 3, name: "Акинфеев", points: 41, trend: "+2" },
  ];

  const totalPoints = myTeam.reduce((sum, player) => sum + player.points, 0);

  return (
    <div className="p-4 space-y-6 animate-slide-up">
      {/* Header */}
      <div className="text-center space-y-2 pt-4">
        <Trophy className="w-12 h-12 text-primary mx-auto animate-glow-pulse" />
        <h1 className="text-3xl font-bold">Фэнтези МФЛ</h1>
        <p className="text-muted-foreground">Собери команду мечты</p>
      </div>

      {/* Total Points */}
      <Card className="p-6 bg-gradient-to-br from-primary/20 to-primary/5 border-primary">
        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground">Всего очков</p>
          <p className="text-5xl font-bold text-primary">{totalPoints}</p>
        </div>
      </Card>

      {/* My Team */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            Моя команда
          </h2>
          <Button size="sm" variant="outline" className="border-primary text-primary">
            Изменить
          </Button>
        </div>
        <div className="space-y-2">
          {myTeam.map((player) => (
            <Card key={player.id} className="p-4 bg-card border-border hover:border-primary transition-colors">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-semibold">{player.name}</p>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {player.position}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{player.team}</span>
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
                  <p className="text-sm text-muted-foreground">{player.points} очков</p>
                </div>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                  {player.trend}
                </Badge>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <Button className="w-full bg-primary hover:bg-primary/90 h-12">
        <Trophy className="w-5 h-5 mr-2" />
        Общий рейтинг
      </Button>
    </div>
  );
};

export default Fantasy;
