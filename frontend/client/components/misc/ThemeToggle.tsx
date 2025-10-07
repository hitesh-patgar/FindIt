import { Sun, Moon, Laptop } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const Icon = theme === "dark" ? Moon : theme === "light" ? Sun : Laptop;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" aria-label="Toggle theme">
          <Icon className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-36">
        <DropdownMenuItem onClick={() => setTheme("light")}> <Sun className="mr-2 h-4 w-4" /> Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}> <Moon className="mr-2 h-4 w-4" /> Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}> <Laptop className="mr-2 h-4 w-4" /> System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
