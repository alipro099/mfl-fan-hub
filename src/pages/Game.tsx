import { useState } from "react";
import { Gamepad2, Coins, Gift, ArrowLeft, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

const Game = () => {
  const [coins, setCoins] = useState(1250);
  const [shots, setShots] = useState(0);
  const [showReward, setShowReward] = useState(false);

  const directions = [
    { id: "left", label: "Влево", icon: ArrowLeft },
    { id: "center", label: "Центр", icon: Circle },
    { id: "right", label: "Вправо", icon: ArrowLeft, rotate: true },
  ];

  const handleShot = (direction: string) => {
    const goalKeeperChoice = ["left", "center", "right"][Math.floor(Math.random() * 3)];
    const isGoal = direction !== goalKeeperChoice;
    
    if (isGoal) {
      const reward = Math.floor(Math.random() * 50) + 30;
      setCoins(prev => prev + reward);
      toast.success(`⚽ ГОЛ! +${reward} коинов`);
    } else {
      toast.error("🧤 Вратарь отбил!");
    }

    const newShots = shots + 1;
    setShots(newShots);

    if (newShots % 5 === 0) {
      setTimeout(() => setShowReward(true), 500);
    }
  };

  const openChest = () => {
    const rewards = [
      { type: "coins", amount: 500 },
      { type: "ticket", amount: 1 },
      { type: "merch", name: "Футболка МФЛ" },
    ];
    const reward = rewards[Math.floor(Math.random() * rewards.length)];
    
    if (reward.type === "coins") {
      setCoins(prev => prev + reward.amount);
      toast.success(`🎁 Сундук открыт! +${reward.amount} коинов`);
    } else if (reward.type === "ticket") {
      toast.success("🎁 Сундук открыт! Билет на матч!");
    } else {
      toast.success(`🎁 Сундук открыт! ${reward.name}`);
    }
    
    setShowReward(false);
    setShots(0);
  };

  return (
    <div className="p-4 space-y-6 animate-slide-up">
      {/* Header */}
      <div className="text-center space-y-2 pt-4">
        <Gamepad2 className="w-12 h-12 text-primary mx-auto animate-glow-pulse" />
        <h1 className="text-3xl font-bold">Пенальти</h1>
        <p className="text-muted-foreground">Забивай и получай награды</p>
      </div>

      {/* Coins Display */}
      <Card className="p-4 bg-gradient-to-br from-primary/20 to-primary/5 border-primary">
        <div className="flex items-center justify-center gap-3">
          <Coins className="w-6 h-6 text-primary" />
          <span className="text-3xl font-bold text-primary">{coins}</span>
          <span className="text-sm text-muted-foreground">коинов</span>
        </div>
      </Card>

      {/* Reward Chest */}
      {showReward && (
        <Card className="p-6 bg-gradient-to-br from-primary/30 to-primary/10 border-primary animate-slide-up">
          <div className="text-center space-y-4">
            <Gift className="w-16 h-16 text-primary mx-auto animate-glow-pulse" />
            <p className="text-xl font-bold">Сундук доступен!</p>
            <Button 
              onClick={openChest}
              className="w-full bg-primary hover:bg-primary/90 h-12"
            >
              Открыть сундук
            </Button>
          </div>
        </Card>
      )}

      {/* Game Field */}
      <Card className="p-6 bg-card border-border">
        <div className="space-y-6">
          {/* Goal Visualization */}
          <div className="aspect-[16/9] bg-secondary rounded-lg flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 to-green-950/40" />
            <div className="relative text-center">
              <div className="w-32 h-24 border-4 border-foreground/20 rounded-t-lg relative">
                <div className="absolute inset-0 grid grid-cols-3 gap-1 p-2">
                  <div className="bg-foreground/10 rounded" />
                  <div className="bg-foreground/10 rounded" />
                  <div className="bg-foreground/10 rounded" />
                </div>
              </div>
              <p className="text-6xl mt-4">⚽</p>
            </div>
          </div>

          {/* Shot Counter */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Ударов до сундука: <span className="text-primary font-bold">{5 - (shots % 5)}</span>
            </p>
          </div>

          {/* Direction Buttons */}
          <div className="grid grid-cols-3 gap-3">
            {directions.map((dir) => {
              const Icon = dir.icon;
              return (
                <Button
                  key={dir.id}
                  onClick={() => handleShot(dir.id)}
                  variant="outline"
                  className="h-20 flex-col gap-2 border-primary hover:bg-primary/10"
                >
                  <Icon className={`w-6 h-6 ${dir.rotate ? "rotate-180" : ""}`} />
                  <span className="text-sm">{dir.label}</span>
                </Button>
              );
            })}
          </div>
        </div>
      </Card>

      {/* Stats */}
      <Card className="p-4 bg-card border-border">
        <div className="flex justify-around text-center">
          <div>
            <p className="text-2xl font-bold text-primary">{shots}</p>
            <p className="text-xs text-muted-foreground">Всего ударов</p>
          </div>
          <div className="w-px bg-border" />
          <div>
            <p className="text-2xl font-bold text-primary">{Math.floor(shots / 5)}</p>
            <p className="text-xs text-muted-foreground">Сундуков открыто</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Game;
