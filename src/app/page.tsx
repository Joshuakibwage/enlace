import { Layout } from "@/components/layout";
import { ProfileCard } from "@/components/profile-card";
import { LinkCard } from "@/components/link-card";

export default function Home() {
  return (
    <Layout>
      <div className="space-y-8">
        <ProfileCard />
        <div className="space-y-4">
          <LinkCard />
          <LinkCard />
        </div>
      </div>
    </Layout>
  );
}
