import { useState } from "react";
import { CheckCircle2, Coins, Gift, Instagram, Youtube, Users as TelegramIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

interface Task {
  id: number;
  title: string;
  description: string;
  reward: number;
  icon: any;
  completed: boolean;
  type: "social" | "partner" | "action";
}

const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Подписаться на Telegram",
      description: "Подпишись на канал МФЛ",
      reward: 100,
      icon: TelegramIcon,
      completed: false,
      type: "social",
    },
    {
      id: 2,
      title: "Подписаться на Instagram",
      description: "Следи за новостями в Instagram",
      reward: 100,
      icon: Instagram,
      completed: false,
      type: "social",
    },
    {
      id: 3,
      title: "Подписаться на YouTube",
      description: "Смотри матчи на YouTube",
      reward: 100,
      icon: Youtube,
      completed: false,
      type: "social",
    },
    {
      id: 4,
      title: "Регистрация Winline",
      description: "Зарегистрируйся у партнёра",
      reward: 500,
      icon: Gift,
      completed: false,
      type: "partner",
    },
    {
      id: 5,
      title: "Сделать ставку",
      description: "Сделай первую ставку",
      reward: 300,
      icon: Coins,
      completed: false,
      type: "action",
    },
  ]);

  const totalCoins = tasks.reduce((sum, task) => sum + (task.completed ? task.reward : 0), 0);
  const completedCount = tasks.filter(t => t.completed).length;

  const handleComplete = (taskId: number) => {
    setTasks(prev => prev.map(task => 
      task.id === taskId ? { ...task, completed: true } : task
    ));
    
    const task = tasks.find(t => t.id === taskId);
    if (task) {
      toast.success(`✅ Задание выполнено! +${task.reward} коинов`, {
        duration: 3000,
      });
    }
  };

  const getCategoryColor = (type: string) => {
    switch (type) {
      case "social":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "partner":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      case "action":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      default:
        return "";
    }
  };

  const getCategoryName = (type: string) => {
    switch (type) {
      case "social":
        return "Соцсети";
      case "partner":
        return "Партнёр";
      case "action":
        return "Действие";
      default:
        return "";
    }
  };

  return (
    <div className="p-4 space-y-6 animate-slide-up">
      {/* Header */}
      <div className="text-center space-y-2 pt-4">
        <Gift className="w-12 h-12 text-primary mx-auto animate-glow-pulse" />
        <h1 className="text-3xl font-bold">Задания</h1>
        <p className="text-muted-foreground">Выполняй и получай награды</p>
      </div>

      {/* Progress */}
      <Card className="p-6 bg-gradient-to-br from-primary/20 to-primary/5 border-primary">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Заработано коинов</p>
              <p className="text-3xl font-bold text-primary">{totalCoins}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Выполнено</p>
              <p className="text-3xl font-bold">{completedCount}/{tasks.length}</p>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-secondary rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-500"
              style={{ width: `${(completedCount / tasks.length) * 100}%` }}
            />
          </div>
        </div>
      </Card>

      {/* Tasks List */}
      <div className="space-y-3">
        {tasks.map((task) => {
          const Icon = task.icon;
          return (
            <Card 
              key={task.id} 
              className={`p-4 bg-card border-border transition-all ${
                task.completed ? "opacity-60" : "hover:border-primary"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                
                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold">{task.title}</h3>
                      <p className="text-sm text-muted-foreground">{task.description}</p>
                    </div>
                    {task.completed && (
                      <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Badge className={getCategoryColor(task.type)}>
                      {getCategoryName(task.type)}
                    </Badge>
                    
                    {!task.completed ? (
                      <Button 
                        onClick={() => handleComplete(task.id)}
                        size="sm"
                        className="bg-primary hover:bg-primary/90"
                      >
                        <Coins className="w-4 h-4 mr-1" />
                        +{task.reward}
                      </Button>
                    ) : (
                      <span className="text-sm text-green-500 font-semibold flex items-center gap-1">
                        <Coins className="w-4 h-4" />
                        +{task.reward}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Tasks;
