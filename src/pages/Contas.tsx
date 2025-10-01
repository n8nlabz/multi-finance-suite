import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { DashboardSidebar } from "@/components/layout/DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Building2, CreditCard, Landmark } from "lucide-react";

const accounts = [
  {
    id: 1,
    name: "Conta Corrente Nubank",
    type: "Conta Corrente",
    balance: 5430.50,
    icon: Building2,
    color: "text-purple-600",
  },
  {
    id: 2,
    name: "Cartão Crédito Itaú",
    type: "Cartão de Crédito",
    balance: -1250.00,
    limit: 5000,
    icon: CreditCard,
    color: "text-orange-600",
  },
  {
    id: 3,
    name: "Poupança BB",
    type: "Poupança",
    balance: 12500.00,
    icon: Landmark,
    color: "text-blue-600",
  },
];

const Contas = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <DashboardSidebar />
      
      <main className="ml-64 pt-16">
        <div className="p-6 space-y-6 animate-fade-in">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Contas Bancárias</h1>
              <p className="text-muted-foreground">
                Gerencie suas contas e cartões
              </p>
            </div>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Nova Conta
            </Button>
          </div>

          {/* Accounts Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {accounts.map((account) => (
              <Card key={account.id} className="hover:shadow-lg transition-smooth">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className={`p-2 rounded-lg bg-muted ${account.color}`}>
                      <account.icon className="h-5 w-5" />
                    </div>
                    <Badge variant="outline">{account.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                      {account.name}
                    </p>
                    <p className="text-2xl font-bold">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(account.balance)}
                    </p>
                    {account.limit && (
                      <p className="text-xs text-muted-foreground mt-1">
                        Limite: {new Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(account.limit)}
                      </p>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      Ver detalhes
                    </Button>
                    <Button variant="ghost" size="sm" className="flex-1">
                      Editar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contas;
