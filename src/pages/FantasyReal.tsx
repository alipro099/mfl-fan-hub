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

      {/* Rules Section */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Info className="w-5 h-5 text-primary" />
          Правила
        </h2>
        <Card className="p-4 bg-card border-border">
          <div className="space-y-4 text-sm">
            <div>
              <h3 className="font-bold mb-2">ФЭНТЕЗИ-ФУТБОЛ</h3>
              <p className="text-muted-foreground">Игра, в которой участники формируют виртуальную команду футболистов, чьи прототипы принимают участие в реальных турнирах и набирают очки в пользу своих виртуальных профилей. В игре нет денежных вложений или ставок.</p>
            </div>
            
            <div>
              <h3 className="font-bold mb-2">COINS</h3>
              <p className="text-muted-foreground">Внутриигровая валюта, по которой оцениваются игроки и осуществляется набор состава.</p>
            </div>
            
            <div>
              <h3 className="font-bold mb-2">ТРАНСФЕРЫ</h3>
              <p className="text-muted-foreground">Общая сумма Coins (100), которая доступна каждому участнику для формирования состава. Трансферный бюджет является одинаковым для всех участников.</p>
            </div>
            
            <div>
              <h3 className="font-bold mb-2">КАПИТАН</h3>
              <p className="text-muted-foreground">Фэнтези-футболист в составе команды. Очки капитана за каждый тур удваиваются. На каждый тур выбирается только один капитан.</p>
            </div>
            
            <div>
              <h3 className="font-bold mb-2">ЗАМЕНЫ</h3>
              <p className="text-muted-foreground">Замены футболистов в составе команды между турами. Количество замен не ограничено.</p>
            </div>
            
            <div>
              <h3 className="font-bold mb-2">БОНУСНЫЕ ОЧКИ</h3>
              <p className="text-muted-foreground">Каждый тур к очкам добавляются бонусные очки, которые равны количеству не потраченных coins. Пример: если у вас 100 coin в банке, а стоимость состава 87 coin, то 13 coin будут конвертированы в 13 очков.</p>
            </div>
            
            <div>
              <h3 className="font-bold mb-2">СКАМЕЙКА ЗАПАСНЫХ</h3>
              <p className="text-muted-foreground">В состав команды каждый тур можно включить 4 футболиста, по одному на каждую позицию. Если игрок основного состава не выйдет на поле, система автоматически учтёт очки игрока на замене.</p>
            </div>
          </div>
        </Card>
      </section>

      {/* Scoring Table */}
      <section className="space-y-3 mb-6">
        <h2 className="text-xl font-bold">Турнирная таблица</h2>
        <Card className="p-4 bg-card border-border overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-primary">
                <th className="text-left py-2 pr-2 font-bold text-primary">ЗА ЧТО ИГРОКИ ПОЛУЧАЮТ ОЧКИ?</th>
                <th className="text-center py-2 px-1 font-bold text-primary">ВР</th>
                <th className="text-center py-2 px-1 font-bold text-primary">ЗЩ</th>
                <th className="text-center py-2 px-1 font-bold text-primary">ПЗ</th>
                <th className="text-center py-2 px-1 font-bold text-primary">НП</th>
              </tr>
            </thead>
            <tbody className="text-xs">
              <tr className="border-b border-border/50">
                <td className="py-2 pr-2">Стартовый состав</td>
                <td className="text-center py-2 px-1">2</td>
                <td className="text-center py-2 px-1">2</td>
                <td className="text-center py-2 px-1">2</td>
                <td className="text-center py-2 px-1">2</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-2">Победа в матче</td>
                <td className="text-center py-2 px-1">3</td>
                <td className="text-center py-2 px-1">3</td>
                <td className="text-center py-2 px-1">3</td>
                <td className="text-center py-2 px-1">3</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-2">Ничья</td>
                <td className="text-center py-2 px-1">2</td>
                <td className="text-center py-2 px-1">2</td>
                <td className="text-center py-2 px-1">2</td>
                <td className="text-center py-2 px-1">2</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-2">Поражение</td>
                <td className="text-center py-2 px-1">1</td>
                <td className="text-center py-2 px-1">1</td>
                <td className="text-center py-2 px-1">1</td>
                <td className="text-center py-2 px-1">1</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-2">Забитый гол</td>
                <td className="text-center py-2 px-1">10</td>
                <td className="text-center py-2 px-1">6</td>
                <td className="text-center py-2 px-1">5</td>
                <td className="text-center py-2 px-1">5</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-2">Голевой пас</td>
                <td className="text-center py-2 px-1">3</td>
                <td className="text-center py-2 px-1">3</td>
                <td className="text-center py-2 px-1">3</td>
                <td className="text-center py-2 px-1">3</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-2">Сухой матч</td>
                <td className="text-center py-2 px-1">4</td>
                <td className="text-center py-2 px-1">4</td>
                <td className="text-center py-2 px-1">1</td>
                <td className="text-center py-2 px-1">0</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-2">Каждые 2 пропущенных гола</td>
                <td className="text-center py-2 px-1">-1</td>
                <td className="text-center py-2 px-1">-1</td>
                <td className="text-center py-2 px-1">0</td>
                <td className="text-center py-2 px-1">0</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-2">Отбитый пенальти</td>
                <td className="text-center py-2 px-1">5</td>
                <td className="text-center py-2 px-1">0</td>
                <td className="text-center py-2 px-1">0</td>
                <td className="text-center py-2 px-1">0</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-2">Жёлтая карточка</td>
                <td className="text-center py-2 px-1">-1</td>
                <td className="text-center py-2 px-1">-1</td>
                <td className="text-center py-2 px-1">-1</td>
                <td className="text-center py-2 px-1">-1</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-2">Вторая жёлтая карточка</td>
                <td className="text-center py-2 px-1">-2</td>
                <td className="text-center py-2 px-1">-2</td>
                <td className="text-center py-2 px-1">-2</td>
                <td className="text-center py-2 px-1">-2</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-2">Красная карточка</td>
                <td className="text-center py-2 px-1">-3</td>
                <td className="text-center py-2 px-1">-3</td>
                <td className="text-center py-2 px-1">-3</td>
                <td className="text-center py-2 px-1">-3</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-2">Автогол</td>
                <td className="text-center py-2 px-1">-2</td>
                <td className="text-center py-2 px-1">-2</td>
                <td className="text-center py-2 px-1">-2</td>
                <td className="text-center py-2 px-1">-2</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-2">Заработанный пенальти</td>
                <td className="text-center py-2 px-1">3</td>
                <td className="text-center py-2 px-1">3</td>
                <td className="text-center py-2 px-1">3</td>
                <td className="text-center py-2 px-1">3</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-2">Фол, за который назначен пенальти</td>
                <td className="text-center py-2 px-1">-1</td>
                <td className="text-center py-2 px-1">-1</td>
                <td className="text-center py-2 px-1">-1</td>
                <td className="text-center py-2 px-1">-1</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-2">Незабитый пенальти</td>
                <td className="text-center py-2 px-1">-2</td>
                <td className="text-center py-2 px-1">-2</td>
                <td className="text-center py-2 px-1">-2</td>
                <td className="text-center py-2 px-1">-2</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-2">Сыгранных минут (40+)</td>
                <td className="text-center py-2 px-1">1</td>
                <td className="text-center py-2 px-1">1</td>
                <td className="text-center py-2 px-1">1</td>
                <td className="text-center py-2 px-1">1</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-2">Сыгранных минут (80+)</td>
                <td className="text-center py-2 px-1">2</td>
                <td className="text-center py-2 px-1">2</td>
                <td className="text-center py-2 px-1">2</td>
                <td className="text-center py-2 px-1">2</td>
              </tr>
              <tr>
                <td className="py-2 pr-2">Общекомандные удары по воротам (каждые 10)</td>
                <td className="text-center py-2 px-1">1</td>
                <td className="text-center py-2 px-1">1</td>
                <td className="text-center py-2 px-1">1</td>
                <td className="text-center py-2 px-1">1</td>
              </tr>
            </tbody>
          </table>
        </Card>
      </section>
    </div>
  );
};

export default FantasyReal;
