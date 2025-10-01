import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { DashboardSidebar } from "@/components/layout/DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import { TrendingUp, Plus } from "lucide-react";

const patrimonioData = [
  { name: "Investimentos", value: 45230, color: "hsl(var(--primary))" },
  { name: "Imóveis", value: 280000, color: "hsl(var(--secondary))" },
  { name: "Veículos", value: 65000, color: "hsl(var(--accent))" },
  { name: "Conta Corrente", value: 5430, color: "hsl(217 91% 70%)" },
  { name: "Poupança", value: 12500, color: "hsl(142 76% 46%)" },
];

const assets = [
  {
    id: 1,
    name: "Apartamento Centro",
    type: "Imóvel",
    value: 280000,
    change: "+3.2%",
  },
  {
    id: 2,
    name: "Carro Honda Civic",
    type: "Veículo",
    value: 65000,
    change: "-5.1%",
  },
  {
    id: 3,
    name: "Tesouro Direto",
    type: "Investimento",
    value: 25000,
    change: "+12.5%",
  },
  {
    id: 4,
    name: "Ações B3",
    type: "Investimento",
    value: 20230,
    change: "+8.3%",
  },
];

const Patrimonio = () => {
  const totalPatrimonio = patrimonioData.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <DashboardSidebar />
      
      <main className="ml-64 pt-16">
        <div className="p-6 space-y-6 animate-fade-in">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Patrimônio</h1>
              <p className="text-muted-foreground">
                Visão completa dos seus ativos
              </p>
            </div>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Adicionar Ativo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Distribuição do Patrimônio</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={patrimonioData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) =>
                        `${name}: ${(percent * 100).toFixed(0)}%`
                      }
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {patrimonioData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="rounded-lg border bg-card p-3 shadow-lg">
                              <p className="text-sm font-medium">
                                {payload[0].name}
                              </p>
                              <p className="text-lg font-bold text-primary">
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
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Patrimônio Total</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-4xl font-bold">
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(totalPatrimonio)}
                  </p>
                  <p className="text-sm text-success mt-2 flex items-center gap-1">
                    <TrendingUp className="h-4 w-4" />
                    +15.3% este ano
                  </p>
                </div>
                <div className="pt-4 border-t space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Ativos</span>
                    <span className="font-medium">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(totalPatrimonio)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Passivos</span>
                    <span className="font-medium">R$ 0,00</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold pt-2 border-t">
                    <span>Patrimônio Líquido</span>
                    <span className="text-primary">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(totalPatrimonio)}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Assets List */}
          <Card>
            <CardHeader>
              <CardTitle>Seus Ativos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {assets.map((asset) => (
                  <div
                    key={asset.id}
                    className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-smooth cursor-pointer"
                  >
                    <div>
                      <p className="font-medium">{asset.name}</p>
                      <p className="text-sm text-muted-foreground">{asset.type}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">
                        {new Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(asset.value)}
                      </p>
                      <p
                        className={`text-sm ${
                          asset.change.startsWith("+")
                            ? "text-success"
                            : "text-destructive"
                        }`}
                      >
                        {asset.change} este ano
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

export default Patrimonio;
