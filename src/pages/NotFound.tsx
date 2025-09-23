import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Phone } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="h-24 w-24 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl font-bold text-destructive">404</span>
        </div>
        
        <h1 className="font-heading text-3xl font-bold text-foreground mb-4">
          Página não encontrada
        </h1>
        
        <p className="text-muted-foreground mb-8 leading-relaxed">
          A página que você está procurando não existe ou foi removida.
          Retorne à página inicial ou entre em contato conosco.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild
            className="min-h-[48px]"
          >
            <a href="/">
              <Home className="h-4 w-4 mr-2" />
              Voltar ao Início
            </a>
          </Button>
          
          <Button 
            variant="outline"
            className="min-h-[48px]"
            onClick={() => window.open('tel:199', '_self')}
          >
            <Phone className="h-4 w-4 mr-2" />
            Emergência 199
          </Button>
        </div>
        
        <p className="text-sm text-muted-foreground mt-8">
          <strong>Defesa Civil São Carlos</strong><br />
          Prevenção e Cuidado ao seu lado
        </p>
      </div>
    </div>
  );
};

export default NotFound;
