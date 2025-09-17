import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export function ProfileCard() {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="flex flex-col items-center p-6">
        <Avatar className="w-24 h-24 mb-4">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h2 className="text-2xl font-bold">shadcn</h2>
        <p className="text-muted-foreground text-center mt-2">
          I'm a full-stack developer building beautiful and functional web
          applications.
        </p>
      </CardContent>
    </Card>
  );
}
