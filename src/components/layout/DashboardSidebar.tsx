import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Wallet,
  Upload,
  Receipt,
  TrendingUp,
  PiggyBank,
  Target,
  Settings,
  BarChart3,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Painel", href: "/", icon: LayoutDashboard },
  { name: "Contas", href: "/contas", icon: Wallet },
  { name: "Importar", href: "/importar", icon: Upload },
  { name: "Lançamentos", href: "/lancamentos", icon: Receipt },
  { name: "Patrimônio", href: "/patrimonio", icon: BarChart3 },
  { name: "Investimentos", href: "/investimentos", icon: TrendingUp },
  { name: "Objetivos", href: "/objetivos", icon: Target },
  { name: "Configurações", href: "/configuracoes", icon: Settings },
];

export const DashboardSidebar = () => {
  return (
    <aside className="fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-64 border-r bg-sidebar">
      <div className="flex h-full flex-col gap-2 p-4">
        {/* Logo */}
        <div className="mb-4 px-3 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <PiggyBank className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold text-sidebar-foreground">FinancePro</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              end={item.href === "/"}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-smooth",
                  isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-md"
                    : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                )
              }
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        <div className="border-t border-sidebar-border pt-4">
          <div className="rounded-lg bg-sidebar-accent/50 p-3">
            <p className="text-xs font-medium text-sidebar-foreground mb-1">
              Upgrade para Premium
            </p>
            <p className="text-xs text-sidebar-foreground/60 mb-2">
              Tenha acesso a recursos avançados
            </p>
            <button className="w-full rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground hover:bg-primary/90 transition-smooth">
              Saiba mais
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};
