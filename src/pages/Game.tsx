import { useState } from "react";
import { Coins, Gift, ArrowLeft, Circle } from "lucide-react";
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
    
    // Animate ball
    const ball = document.getElementById("ball");
    if (ball) {
      let transform = "";
      if (direction === "left") {
        transform = "translate(-150%, -200%)";
      } else if (direction === "right") {
        transform = "translate(150%, -200%)";
      } else {
        transform = "translate(0, -200%)";
      }
      
      ball.style.transform = transform;
      ball.style.opacity = "0.3";
      
      setTimeout(() => {
        ball.style.transform = "translate(0, 0)";
        ball.style.opacity = "1";
      }, 600);
    }
    
    setTimeout(() => {
      if (isGoal) {
        const reward = Math.floor(Math.random() * 50) + 30;
        setCoins(prev => prev + reward);
        toast.success(`⚽ ГОЛ! +${reward} коинов`);
      } else {
        toast.error("🧤 Вратарь отбил!");
      }
    }, 400);

    const newShots = shots + 1;
    setShots(newShots);

    if (newShots % 5 === 0) {
      setTimeout(() => setShowReward(true), 700);
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
    <div className="fixed inset-0 bg-background flex flex-col overflow-hidden">
      {/* Coins Display */}
      <div className="px-4 pt-4 pb-2 flex-shrink-0">
        <Card className="p-2 bg-gradient-to-br from-primary/20 to-primary/5 border-primary">
          <div className="flex items-center justify-center gap-2">
            <Coins className="w-4 h-4 text-primary" />
            <span className="text-xl font-bold text-primary">{coins}</span>
            <span className="text-xs text-muted-foreground">коинов</span>
          </div>
        </Card>
      </div>

      {/* Reward Chest */}
      {showReward && (
        <div className="px-4 pb-2 flex-shrink-0">
          <Card className="p-3 bg-gradient-to-br from-primary/30 to-primary/10 border-primary animate-slide-up">
            <div className="text-center space-y-2">
              <Gift className="w-10 h-10 text-primary mx-auto animate-glow-pulse" />
              <p className="text-base font-bold">Сундук доступен!</p>
              <Button 
                onClick={openChest}
                className="w-full bg-primary hover:bg-primary/90 h-9"
              >
                Открыть сундук
              </Button>
            </div>
          </Card>
        </div>
      )}

      {/* Game Field - Full Screen */}
      <div className="flex-1 flex flex-col px-4 pb-4 min-h-0">
        <div className="flex-1 flex flex-col bg-gradient-to-b from-background to-background/95 rounded-lg min-h-0 p-3">
          {/* Goal Visualization with Goalkeeper */}
          <div className="flex-1 bg-gradient-to-b from-green-800/30 to-green-950/50 rounded-lg flex flex-col items-center justify-between py-4 relative overflow-hidden min-h-0">
            {/* Goal */}
            <div className="relative flex-shrink-0">
              <div className="w-32 h-24 border-4 border-foreground/30 rounded-t-lg relative bg-foreground/5">
                <div className="absolute inset-0 grid grid-cols-3 gap-1 p-1.5">
                  <div className="bg-foreground/10 rounded" />
                  <div className="bg-foreground/10 rounded" />
                  <div className="bg-foreground/10 rounded" />
                </div>
                {/* Goalkeeper */}
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2">
                  <div className="text-3xl">🧤</div>
                </div>
              </div>
            </div>

            {/* Ball */}
            <div className="flex-1 flex items-center justify-center">
              <div id="ball" className="text-5xl transition-all duration-500">⚽</div>
            </div>

            {/* Shot Counter */}
            <div className="text-center bg-background/50 backdrop-blur-sm rounded-full px-3 py-1.5 flex-shrink-0">
              <p className="text-xs text-muted-foreground">
                До сундука: <span className="text-primary font-bold">{5 - (shots % 5)}</span>
              </p>
            </div>
          </div>

          {/* Direction Buttons */}
          <div className="grid grid-cols-3 gap-2 mt-3 flex-shrink-0">
            {directions.map((dir) => {
              const Icon = dir.icon;
              return (
                <Button
                  key={dir.id}
                  onClick={() => handleShot(dir.id)}
                  variant="outline"
                  className="h-14 flex-col gap-1 border-primary hover:bg-primary/10 text-xs"
                >
                  <Icon className={`w-4 h-4 ${dir.rotate ? "rotate-180" : ""}`} />
                  <span>{dir.label}</span>
                </Button>
              );
            })}
          </div>

          {/* Stats */}
          <div className="flex justify-around text-center mt-3 pt-3 border-t border-border flex-shrink-0">
            <div>
              <p className="text-lg font-bold text-primary">{shots}</p>
              <p className="text-[10px] text-muted-foreground">Ударов</p>
            </div>
            <div className="w-px bg-border" />
            <div>
              <p className="text-lg font-bold text-primary">{Math.floor(shots / 5)}</p>
              <p className="text-[10px] text-muted-foreground">Сундуков</p>
            </div>
            <div className="w-px bg-border" />
            <div>
              <p className="text-lg font-bold text-primary">{coins}</p>
              <p className="text-[10px] text-muted-foreground">Коинов</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
