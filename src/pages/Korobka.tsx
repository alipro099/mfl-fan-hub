import { useState } from "react";
import { MapPin, Users, Plus, Calendar, Clock, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface District {
  id: string;
  name: string;
  gamesCount: number;
}

interface Game {
  id: number;
  district: string;
  title: string;
  location: string;
  date: string;
  time: string;
  type: "коробка" | "зал" | "ангар";
  players: number;
  maxPlayers: number;
  author: string;
}

const Korobka = () => {
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [games] = useState<Game[]>([
    {
      id: 1,
      district: "СЗАО",
      title: "Собираем игру на Ломоносовском",
      location: "Зал на Ломоносовском просп., 25",
      date: "2025-11-26",
      time: "19:00",
      type: "зал",
      players: 8,
      maxPlayers: 12,
      author: "Алексей",
    },
    {
      id: 2,
      district: "САО",
      title: "Ищу вратаря на завтра",
      location: "Коробка в Тушино",
      date: "2025-11-27",
      time: "18:30",
      type: "коробка",
      players: 10,
      maxPlayers: 10,
      author: "Дмитрий",
    },
  ]);

  const districts: District[] = [
    { id: "szao", name: "СЗАО", gamesCount: 3 },
    { id: "sao", name: "САО", gamesCount: 5 },
    { id: "cao", name: "ЦАО", gamesCount: 2 },
    { id: "uao", name: "ЮАО", gamesCount: 4 },
    { id: "uzao", name: "ЮЗАО", gamesCount: 6 },
    { id: "uvao", name: "ЮВАО", gamesCount: 3 },
    { id: "svao", name: "СВАО", gamesCount: 7 },
    { id: "vao", name: "ВАО", gamesCount: 4 },
    { id: "zao", name: "ЗАО", gamesCount: 5 },
    { id: "new", name: "НОВАЯ МОСКВА", gamesCount: 2 },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "коробка": return "bg-primary text-primary-foreground";
      case "зал": return "bg-secondary text-secondary-foreground";
      case "ангар": return "bg-accent text-accent-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const filteredGames = selectedDistrict
    ? games.filter(game => game.district === selectedDistrict)
    : [];

  return (
    <div className="min-h-screen p-4 space-y-6 animate-slide-up">
      {/* Header */}
      <div className="text-center space-y-2 pt-4">
        <MapPin className="w-12 h-12 text-primary mx-auto animate-glow-pulse" />
        <h1 className="text-3xl font-bold">Коробка</h1>
        <p className="text-muted-foreground">Сборы на футбол в Москве</p>
      </div>

      {!selectedDistrict ? (
        /* Districts Grid */
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Выберите район</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {districts.map((district) => (
              <Card
                key={district.id}
                className="p-4 cursor-pointer hover:border-primary/50 transition-all"
                onClick={() => setSelectedDistrict(district.name)}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg">{district.name}</h3>
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{district.gamesCount} сборов</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      ) : (
        /* District Games */
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => setSelectedDistrict(null)}
            >
              ← Назад к районам
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="gap-2">
                  <Plus className="w-4 h-4" />
                  Создать сбор
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Создать новый сбор</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="title">Название</Label>
                    <Input id="title" placeholder="Например: Ищу вратаря на завтра" />
                  </div>
                  <div>
                    <Label htmlFor="location">Место</Label>
                    <Input id="location" placeholder="Адрес площадки" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="date">Дата</Label>
                      <Input id="date" type="date" />
                    </div>
                    <div>
                      <Label htmlFor="time">Время</Label>
                      <Input id="time" type="time" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="type">Тип площадки</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите тип" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="korobka">Коробка</SelectItem>
                        <SelectItem value="zal">Зал</SelectItem>
                        <SelectItem value="angar">Ангар</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="players">Максимум игроков</Label>
                    <Input id="players" type="number" placeholder="12" />
                  </div>
                  <div>
                    <Label htmlFor="description">Описание</Label>
                    <Textarea id="description" placeholder="Дополнительная информация..." />
                  </div>
                  <Button className="w-full">Создать сбор</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <h2 className="text-2xl font-bold">{selectedDistrict}</h2>

          {filteredGames.length === 0 ? (
            <Card className="p-8 text-center">
              <p className="text-muted-foreground">Пока нет активных сборов в этом районе</p>
              <p className="text-sm text-muted-foreground mt-2">Будьте первым, кто создаст сбор!</p>
            </Card>
          ) : (
            <div className="space-y-3">
              {filteredGames.map((game) => (
                <Card key={game.id} className="p-4 space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-bold text-lg">{game.title}</h3>
                      <Badge className={getTypeColor(game.type)}>
                        {game.type}
                      </Badge>
                    </div>
                    
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{game.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(game.date).toLocaleDateString('ru-RU')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{game.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{game.players} / {game.maxPlayers} игроков</span>
                      </div>
                    </div>

                    <div className="text-sm">
                      <span className="text-muted-foreground">Организатор: </span>
                      <span className="font-medium">{game.author}</span>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2 border-t border-border">
                    <Button 
                      variant="default" 
                      size="sm" 
                      className="flex-1"
                      disabled={game.players >= game.maxPlayers}
                    >
                      Присоединиться
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Bell className="w-4 h-4" />
                      Напомнить
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Korobka;
