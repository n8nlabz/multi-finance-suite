import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { DashboardSidebar } from "@/components/layout/DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, Download, Filter } from "lucide-react";

const transactions = [
  {
    id: 1,
    date: "15/01/2025",
    description: "Supermercado Extra",
    category: "Alimentação",
    account: "Conta Corrente",
    amount: -345.80,
    status: "Pago",
  },
  {
    id: 2,
    date: "15/01/2025",
    description: "Salário",
    category: "Receita",
    account: "Conta Corrente",
    amount: 8500.00,
    status: "Confirmado",
  },
  {
    id: 3,
    date: "14/01/2025",
    description: "Conta de Luz",
    category: "Utilidades",
    account: "Cartão Crédito",
    amount: -156.32,
    status: "Pago",
  },
  {
    id: 4,
    date: "14/01/2025",
    description: "Restaurante Outback",
    category: "Alimentação",
    account: "Cartão Crédito",
    amount: -189.90,
    status: "Pendente",
  },
  {
    id: 5,
    date: "13/01/2025",
    description: "Academia SmartFit",
    category: "Saúde",
    account: "Conta Corrente",
    amount: -79.90,
    status: "Pago",
  },
];

const Lancamentos = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <DashboardSidebar />
      
      <main className="ml-64 pt-16">
        <div className="p-6 space-y-6 animate-fade-in">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Lançamentos</h1>
              <p className="text-muted-foreground">
                Histórico completo de transações
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                Filtrar
              </Button>
              <Button variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                Exportar
              </Button>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Novo Lançamento
              </Button>
            </div>
          </div>

          {/* Table */}
          <Card>
            <CardHeader>
              <CardTitle>Transações Recentes</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Data</TableHead>
                    <TableHead>Descrição</TableHead>
                    <TableHead>Categoria</TableHead>
                    <TableHead>Conta</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Valor</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((transaction) => (
                    <TableRow key={transaction.id} className="cursor-pointer hover:bg-muted/50">
                      <TableCell className="font-medium">
                        {transaction.date}
                      </TableCell>
                      <TableCell>{transaction.description}</TableCell>
                      <TableCell>{transaction.category}</TableCell>
                      <TableCell className="text-muted-foreground">
                        {transaction.account}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            transaction.status === "Confirmado" || transaction.status === "Pago"
                              ? "default"
                              : "secondary"
                          }
                        >
                          {transaction.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right font-semibold">
                        <span
                          className={
                            transaction.amount > 0
                              ? "text-success"
                              : "text-foreground"
                          }
                        >
                          {new Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          }).format(transaction.amount)}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Lancamentos;
