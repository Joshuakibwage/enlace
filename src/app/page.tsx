import { Layout } from "@/components/layout";
import { ProfileCard } from "@/components/profile-card";
import { LinkCard } from "@/components/link-card";

export default function Home() {
  const user = {
    name: "shadcn",
    bio: "I'm a full-stack developer building beautiful and functional web applications.",
    avatarUrl: "https://github.com/shadcn.png",
    socialLinks: [
      {
        platform: "github" as const,
        url: "https://github.com/shadcn",
      },
      {
        platform: "twitter" as const,
        url: "https://twitter.com/shadcn",
      },
      {
        platform: "linkedin" as const,
        url: "https://www.linkedin.com/in/shadcn/",
      },
    ],
  };

  return (
    <Layout>
      <div className="space-y-8">
        <ProfileCard
          name={user.name}
          bio={user.bio}
          avatarUrl={user.avatarUrl}
          socialLinks={user.socialLinks}
        />
        <div className="space-y-4">
          <LinkCard />
          <LinkCard />
        </div>
      </div>
    </Layout>
  );
}
