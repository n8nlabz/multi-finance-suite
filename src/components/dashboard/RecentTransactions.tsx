import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDownRight, ArrowUpRight, CreditCard, ShoppingBag, Utensils, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const transactions = [
  {
    id: 1,
    description: "Supermercado Extra",
    category: "Alimentação",
    amount: -345.80,
    date: "Hoje",
    icon: ShoppingBag,
  },
  {
    id: 2,
    description: "Salário",
    category: "Receita",
    amount: 8500.00,
    date: "Hoje",
    icon: ArrowDownRight,
  },
  {
    id: 3,
    description: "Conta de Luz",
    category: "Utilidades",
    amount: -156.32,
    date: "Ontem",
    icon: Zap,
  },
  {
    id: 4,
    description: "Restaurante",
    category: "Alimentação",
    amount: -89.90,
    date: "Ontem",
    icon: Utensils,
  },
  {
    id: 5,
    description: "Cartão de Crédito",
    category: "Pagamento",
    amount: -1250.00,
    date: "2 dias atrás",
    icon: CreditCard,
  },
];

export const RecentTransactions = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Transações Recentes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center gap-4 rounded-lg p-3 transition-smooth hover:bg-muted/50"
            >
              <div className={cn(
                "flex h-10 w-10 items-center justify-center rounded-lg",
                transaction.amount > 0 ? "bg-success/10 text-success" : "bg-muted"
              )}>
                <transaction.icon className="h-5 w-5" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  {transaction.description}
                </p>
                <p className="text-xs text-muted-foreground">
                  {transaction.date} • {transaction.category}
                </p>
              </div>
              <div className="text-right">
                <p className={cn(
                  "text-sm font-semibold",
                  transaction.amount > 0 ? "text-success" : "text-foreground"
                )}>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(Math.abs(transaction.amount))}
                </p>
                {transaction.amount > 0 ? (
                  <Badge variant="outline" className="mt-1 border-success text-success">
                    <ArrowDownRight className="mr-1 h-3 w-3" />
                    Entrada
                  </Badge>
                ) : (
                  <Badge variant="outline" className="mt-1">
                    <ArrowUpRight className="mr-1 h-3 w-3" />
                    Saída
                  </Badge>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
