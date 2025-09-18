import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Twitter, Linkedin } from "lucide-react";

interface SocialLink {
  platform: "github" | "twitter" | "linkedin";
  url: string;
}

interface ProfileCardProps {
  name: string;
  bio: string;
  avatarUrl: string;
  socialLinks?: SocialLink[];
}

const iconMap = {
  github: Github,
  twitter: Twitter,
  linkedin: Linkedin,
};

export function ProfileCard({
  name,
  bio,
  avatarUrl,
  socialLinks,
}: ProfileCardProps) {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="flex flex-col items-center p-6">
        <Avatar className="w-24 h-24 mb-4">
          <AvatarImage src={avatarUrl} alt={`@${name}`} />
          <AvatarFallback>{name.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-muted-foreground text-center mt-2">{bio}</p>
        {socialLinks && socialLinks.length > 0 && (
          <div className="flex gap-4 mt-4">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.platform];
              return (
                <a
                  key={link.platform}
                  href={link.url}
                  className="text-muted-foreground hover:text-foreground"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
