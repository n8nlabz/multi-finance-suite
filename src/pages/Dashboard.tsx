import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { DashboardSidebar } from "@/components/layout/DashboardSidebar";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { WealthChart } from "@/components/dashboard/WealthChart";
import { RecentTransactions } from "@/components/dashboard/RecentTransactions";
import { Wallet, TrendingUp, PiggyBank, CreditCard } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <DashboardSidebar />
      
      <main className="ml-64 pt-16">
        <div className="p-6 space-y-6 animate-fade-in">
          {/* Welcome Section */}
          <div>
            <h1 className="text-3xl font-bold mb-2">
              Olá, João! 👋
            </h1>
            <p className="text-muted-foreground">
              Aqui está um resumo das suas finanças hoje
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StatsCard
              title="Saldo Total"
              value="R$ 78.450,00"
              change="+12,5% este mês"
              changeType="positive"
              icon={Wallet}
              gradient
            />
            <StatsCard
              title="Investimentos"
              value="R$ 45.230,00"
              change="+8,2% este mês"
              changeType="positive"
              icon={TrendingUp}
              gradient
            />
            <StatsCard
              title="Despesas do Mês"
              value="R$ 3.890,00"
              change="-5,4% vs mês anterior"
              changeType="positive"
              icon={CreditCard}
            />
            <StatsCard
              title="Economia"
              value="R$ 4.560,00"
              change="67% da meta"
              changeType="neutral"
              icon={PiggyBank}
            />
          </div>

          {/* Charts and Transactions */}
          <div className="grid gap-4 lg:grid-cols-3">
            <WealthChart />
            <RecentTransactions />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
