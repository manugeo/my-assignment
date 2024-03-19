import { cn } from "@/lib/utils"
import Link from "next/link"

const MainNav = ({ className, ...props }) => {
  return (
    <nav className={cn("flex items-center", className)} {...props}>
      <Link href='/about' className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">About</Link>

      <Link href='/careers' className="ml-4 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">Careers</Link>

      <Link href='/history' className="ml-4 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">History</Link>

      <Link href='/services' className="ml-4 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">Services</Link>

      <Link href='/project' className="ml-4 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">Projects</Link>

      <Link href='/blog' className="ml-4 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">Blog</Link>
    </nav>
  )
}

export default MainNav