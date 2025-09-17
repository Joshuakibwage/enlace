import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container px-4 py-8">{children}</main>
      <Footer />
    </div>
  );
}
