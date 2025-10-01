import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { DashboardSidebar } from "@/components/layout/DashboardSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Plus, Target, Car, Home, Plane, GraduationCap } from "lucide-react";

const goals = [
  {
    id: 1,
    name: "Comprar Casa Própria",
    target: 500000,
    current: 180000,
    deadline: "Dez 2026",
    icon: Home,
    color: "text-primary",
  },
  {
    id: 2,
    name: "Trocar de Carro",
    target: 80000,
    current: 45000,
    deadline: "Jun 2025",
    icon: Car,
    color: "text-accent",
  },
  {
    id: 3,
    name: "Viagem Europa",
    target: 25000,
    current: 18500,
    deadline: "Mar 2025",
    icon: Plane,
    color: "text-secondary",
  },
  {
    id: 4,
    name: "Fundo Emergencial",
    target: 30000,
    current: 22500,
    deadline: "Ago 2025",
    icon: Target,
    color: "text-warning",
  },
  {
    id: 5,
    name: "Curso MBA",
    target: 15000,
    current: 8500,
    deadline: "Set 2025",
    icon: GraduationCap,
    color: "text-success",
  },
];

const Objetivos = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <DashboardSidebar />
      
      <main className="ml-64 pt-16">
        <div className="p-6 space-y-6 animate-fade-in">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Objetivos Financeiros</h1>
              <p className="text-muted-foreground">
                Defina e acompanhe suas metas
              </p>
            </div>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Novo Objetivo
            </Button>
          </div>

          {/* Goals Grid */}
          <div className="grid gap-4 md:grid-cols-2">
            {goals.map((goal) => {
              const progress = (goal.current / goal.target) * 100;
              const remaining = goal.target - goal.current;

              return (
                <Card key={goal.id} className="hover:shadow-lg transition-smooth">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-muted ${goal.color}`}>
                          <goal.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{goal.name}</CardTitle>
                          <p className="text-sm text-muted-foreground mt-1">
                            Prazo: {goal.deadline}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl font-bold">
                          {new Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          }).format(goal.current)}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          de{" "}
                          {new Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          }).format(goal.target)}
                        </span>
                      </div>
                      <Progress value={progress} className="h-2" />
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-sm font-medium text-primary">
                          {progress.toFixed(1)}% concluído
                        </span>
                        <span className="text-sm text-muted-foreground">
                          Faltam{" "}
                          {new Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          }).format(remaining)}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2 pt-2 border-t">
                      <Button variant="outline" size="sm" className="flex-1">
                        Adicionar valor
                      </Button>
                      <Button variant="ghost" size="sm" className="flex-1">
                        Editar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Objetivos;
