import { Home, Trophy, Gamepad2, ListTodo, Users } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: Home, label: "Дом" },
    { path: "/fantasy", icon: Trophy, label: "Фэнтези" },
    { path: "/game", icon: Gamepad2, label: "Игра" },
    { path: "/tasks", icon: ListTodo, label: "Задания" },
    { path: "/dating", icon: Users, label: "Знакомства" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col pb-20">
      <main className="flex-1 overflow-auto">
        {children}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
        <div className="flex justify-around items-center h-20 px-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-lg transition-all ${
                  isActive 
                    ? "text-primary" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className={`w-6 h-6 ${isActive ? "animate-glow-pulse" : ""}`} />
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Layout;
