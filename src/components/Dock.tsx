import { useState } from "react"
import { House, PencilLine, Briefcase, FolderGit2, Award, Mail, Sun, Moon } from "lucide-react"
import { SiGithub } from "react-icons/si"
import { FaLinkedin } from "react-icons/fa"

export function Dock() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem("theme")
        if (stored === "dark") return "dark"
        if (stored === "light") return "light"
      } catch {}
    }
    return "light"
  })

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark"
    setTheme(next)
    localStorage.setItem("theme", next)
    if (next === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const navItems = [
    { id: "hero", icon: House, label: "Home", action: () => scrollTo("hero") },
    { id: "about", icon: PencilLine, label: "About", action: () => scrollTo("about") },
    { id: "journey", icon: Briefcase, label: "Journey", action: () => scrollTo("journey") },
    { id: "projects", icon: FolderGit2, label: "Projects", action: () => scrollTo("projects") },
    { id: "honors", icon: Award, label: "Honors", action: () => scrollTo("honors") },
  ]

  const socialItems = [
    { href: "https://github.com/jattu8602", icon: SiGithub, label: "GitHub" },
    { href: "https://www.linkedin.com/in/nitesh-chourasiya-a66715292/", icon: FaLinkedin, label: "LinkedIn" },
  ]

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1.5 rounded-full border border-zinc-200/80 dark:border-zinc-800/80 bg-background/80 backdrop-blur-md px-3 py-1.5 shadow-lg">
        {navItems.map((item) => (
          <div key={item.id} className="relative group/tooltip">
            <button
              onClick={item.action}
              className="flex items-center justify-center rounded-full p-2 text-muted-foreground hover:text-foreground hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
              aria-label={item.label}
            >
              <item.icon className="w-4 h-4" />
            </button>
            <span className="pointer-events-none absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 opacity-0 scale-95 group-hover/tooltip:opacity-100 group-hover/tooltip:scale-100 transition-all duration-200 bg-zinc-950 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-950 text-[10px] font-semibold px-2 py-1 rounded shadow-md whitespace-nowrap">
              {item.label}
            </span>
          </div>
        ))}

        <div className="relative group/tooltip">
          <button
            onClick={() => scrollTo("contact")}
            className="flex items-center justify-center rounded-full p-2 text-muted-foreground hover:text-foreground hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
            aria-label="Contact"
          >
            <Mail className="w-4 h-4" />
          </button>
          <span className="pointer-events-none absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 opacity-0 scale-95 group-hover/tooltip:opacity-100 group-hover/tooltip:scale-100 transition-all duration-200 bg-zinc-950 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-950 text-[10px] font-semibold px-2 py-1 rounded shadow-md whitespace-nowrap">
            Contact
          </span>
        </div>

        <span className="w-px h-5 bg-zinc-200 dark:bg-zinc-800 mx-1" />

        {socialItems.map((item) => (
          <div key={item.label} className="relative group/tooltip">
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-full p-2 text-muted-foreground hover:text-foreground hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label={item.label}
            >
              <item.icon className="w-4 h-4" />
            </a>
            <span className="pointer-events-none absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 opacity-0 scale-95 group-hover/tooltip:opacity-100 group-hover/tooltip:scale-100 transition-all duration-200 bg-zinc-950 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-950 text-[10px] font-semibold px-2 py-1 rounded shadow-md whitespace-nowrap">
              {item.label}
            </span>
          </div>
        ))}

        <span className="w-px h-5 bg-zinc-200 dark:bg-zinc-800 mx-1" />

        <div className="relative group/tooltip">
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center rounded-full p-2 text-muted-foreground hover:text-foreground hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <span className="pointer-events-none absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 opacity-0 scale-95 group-hover/tooltip:opacity-100 group-hover/tooltip:scale-100 transition-all duration-200 bg-zinc-950 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-950 text-[10px] font-semibold px-2 py-1 rounded shadow-md whitespace-nowrap">
            Theme
          </span>
        </div>
      </div>
    </div>
  )
}
