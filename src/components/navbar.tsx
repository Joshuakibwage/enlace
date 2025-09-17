import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4">
      <div>
        <h1 className="text-2xl font-bold">Enlace</h1>
      </div>
      <div>
        <ThemeToggle />
      </div>
    </nav>
  );
}
