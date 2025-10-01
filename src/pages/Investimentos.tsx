import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { DashboardSidebar } from "@/components/layout/DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, TrendingUp, TrendingDown } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const portfolioData = [
  { month: "Jul", value: 38000 },
  { month: "Ago", value: 40000 },
  { month: "Set", value: 42000 },
  { month: "Out", value: 43500 },
  { month: "Nov", value: 44000 },
  { month: "Dez", value: 45230 },
];

const investments = [
  {
    id: 1,
    name: "Tesouro Selic 2027",
    type: "Renda Fixa",
    amount: 15000,
    return: "+0.8%",
    returnValue: 120,
    risk: "Baixo",
  },
  {
    id: 2,
    name: "CDB Banco Inter",
    type: "Renda Fixa",
    amount: 10000,
    return: "+1.2%",
    returnValue: 120,
    risk: "Baixo",
  },
  {
    id: 3,
    name: "PETR4",
    type: "Ações",
    amount: 8500,
    return: "+5.3%",
    returnValue: 427.5,
    risk: "Alto",
  },
  {
    id: 4,
    name: "VALE3",
    type: "Ações",
    amount: 6230,
    return: "-2.1%",
    returnValue: -130.8,
    risk: "Alto",
  },
  {
    id: 5,
    name: "IVVB11",
    type: "ETF",
    amount: 5500,
    return: "+3.7%",
    returnValue: 198,
    risk: "Médio",
  },
];

const Investimentos = () => {
  const totalInvestido = investments.reduce((acc, inv) => acc + inv.amount, 0);
  const totalRetorno = investments.reduce((acc, inv) => acc + inv.returnValue, 0);

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <DashboardSidebar />
      
      <main className="ml-64 pt-16">
        <div className="p-6 space-y-6 animate-fade-in">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Investimentos</h1>
              <p className="text-muted-foreground">
                Acompanhe sua carteira de investimentos
              </p>
            </div>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Novo Investimento
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Investido
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(totalInvestido)}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Retorno Total
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-success">
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(totalRetorno)}
                </p>
                <p className="text-sm text-success mt-1">+8.2% no período</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Valor Atual
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(totalInvestido + totalRetorno)}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Evolução da Carteira</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={portfolioData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis
                    dataKey="month"
                    className="text-xs"
                    stroke="hsl(var(--muted-foreground))"
                  />
                  <YAxis
                    className="text-xs"
                    stroke="hsl(var(--muted-foreground))"
                    tickFormatter={(value) =>
                      new Intl.NumberFormat("pt-BR", {
                        notation: "compact",
                        compactDisplay: "short",
                      }).format(value)
                    }
                  />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="rounded-lg border bg-card p-3 shadow-lg">
                            <p className="text-sm font-medium">
                              {new Intl.NumberFormat("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                              }).format(payload[0].value as number)}
                            </p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar
                    dataKey="value"
                    fill="hsl(var(--primary))"
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Investments Table */}
          <Card>
            <CardHeader>
              <CardTitle>Seus Investimentos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {investments.map((investment) => (
                  <div
                    key={investment.id}
                    className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-smooth cursor-pointer"
                  >
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-medium">{investment.name}</p>
                        <Badge variant="outline" className="text-xs">
                          {investment.type}
                        </Badge>
                        <Badge
                          variant={
                            investment.risk === "Baixo"
                              ? "default"
                              : investment.risk === "Médio"
                              ? "secondary"
                              : "destructive"
                          }
                          className="text-xs"
                        >
                          {investment.risk}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Valor aplicado:{" "}
                        {new Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(investment.amount)}
                      </p>
                    </div>
                    <div className="text-right">
                      <p
                        className={`font-semibold flex items-center gap-1 justify-end ${
                          investment.returnValue >= 0
                            ? "text-success"
                            : "text-destructive"
                        }`}
                      >
                        {investment.returnValue >= 0 ? (
                          <TrendingUp className="h-4 w-4" />
                        ) : (
                          <TrendingDown className="h-4 w-4" />
                        )}
                        {investment.return}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {new Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(Math.abs(investment.returnValue))}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Investimentos;
