import { Card } from "@/components/ui/card";
import { Github } from "lucide-react";

export function LinkCard() {
  return (
    <a href="#" className="block w-full max-w-md mx-auto">
      <Card className="hover:bg-muted transition-colors">
        <div className="flex items-center p-4">
          <Github className="w-6 h-6 mr-4" />
          <span className="font-semibold">GitHub</span>
        </div>
      </Card>
    </a>
  );
}
