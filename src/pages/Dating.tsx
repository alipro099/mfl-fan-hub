import { useState } from "react";
import { Newspaper, MessageCircle, ThumbsUp, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface NewsItem {
  id: number;
  type: "game" | "debate" | "opinion";
  title: string;
  content: string;
  author: string;
  team?: string;
  time: string;
  likes: number;
  comments: number;
  emoji: string;
}

const Dating = () => {
  const [news] = useState<NewsItem[]>([
    {
      id: 1,
      type: "game",
      title: "Амкал разгромил Легион 5:2!",
      content: "Невероятный матч в третьем туре. Хет-трик от капитана команды!",
      author: "МФЛ Новости",
      time: "2 часа назад",
      likes: 234,
      comments: 45,
      emoji: "⚽",
    },
    {
      id: 2,
      type: "debate",
      title: "Кто лучший нападающий сезона?",
      content: "Спор между фанатами Амкала и Смешариков разгорелся после последних матчей. Статистика говорит одно, но эмоции — другое!",
      author: "Алексей",
      team: "Амкал",
      time: "5 часов назад",
      likes: 156,
      comments: 89,
      emoji: "🔥",
    },
    {
      id: 3,
      type: "opinion",
      title: "МФЛ меняет формат плей-офф?",
      content: "Инсайдерская информация о возможных изменениях в турнирной таблице следующего сезона.",
      author: "Спортивный обозреватель",
      time: "8 часов назад",
      likes: 412,
      comments: 127,
      emoji: "💭",
    },
    {
      id: 4,
      type: "game",
      title: "Рекорд посещаемости побит!",
      content: "На матч Легион vs Смешарики пришло более 5000 зрителей. Новый рекорд МФЛ!",
      author: "МФЛ Новости",
      time: "1 день назад",
      likes: 567,
      comments: 203,
      emoji: "🏆",
    },
  ]);

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "game": return "Матч";
      case "debate": return "Спор";
      case "opinion": return "Мнение";
      default: return type;
    }
  };

  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case "game": return "bg-primary text-primary-foreground";
      case "debate": return "bg-destructive text-destructive-foreground";
      case "opinion": return "bg-secondary text-secondary-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const filterNews = (type?: string) => {
    if (!type) return news;
    return news.filter(item => item.type === type);
  };

  const NewsCard = ({ item }: { item: NewsItem }) => (
    <Card className="overflow-hidden border-border bg-card hover:border-primary/50 transition-all">
      <div className="p-4 space-y-3">
        <div className="flex items-start gap-3">
          <div className="text-4xl">{item.emoji}</div>
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <Badge className={getTypeBadgeColor(item.type)}>
                {getTypeLabel(item.type)}
              </Badge>
              {item.team && (
                <Badge variant="outline" className="border-primary/50">
                  {item.team}
                </Badge>
              )}
            </div>
            <h3 className="text-lg font-bold">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.content}</p>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="space-y-1">
            <div className="font-medium text-foreground">{item.author}</div>
            <div>{item.time}</div>
          </div>
        </div>

        <div className="flex gap-2 pt-2 border-t border-border">
          <Button variant="ghost" size="sm" className="flex-1 gap-2">
            <ThumbsUp className="w-4 h-4" />
            {item.likes}
          </Button>
          <Button variant="ghost" size="sm" className="flex-1 gap-2">
            <MessageCircle className="w-4 h-4" />
            {item.comments}
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <Share2 className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="p-4 space-y-6 animate-slide-up">
      {/* Header */}
      <div className="text-center space-y-2 pt-4">
        <Newspaper className="w-12 h-12 text-primary mx-auto animate-glow-pulse" />
        <h1 className="text-3xl font-bold">Что происходит?</h1>
        <p className="text-muted-foreground">Новости, споры и мнения МФЛ</p>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="w-full grid grid-cols-4">
          <TabsTrigger value="all">Все</TabsTrigger>
          <TabsTrigger value="game">Матчи</TabsTrigger>
          <TabsTrigger value="debate">Споры</TabsTrigger>
          <TabsTrigger value="opinion">Мнения</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4 mt-6">
          {news.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </TabsContent>

        <TabsContent value="game" className="space-y-4 mt-6">
          {filterNews("game").map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </TabsContent>

        <TabsContent value="debate" className="space-y-4 mt-6">
          {filterNews("debate").map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </TabsContent>

        <TabsContent value="opinion" className="space-y-4 mt-6">
          {filterNews("opinion").map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dating;
