import * as React from "react"

import { Menu, Code, CodeXml } from "lucide-react"

import { ModeToggle } from "@/components/ModeToggle.jsx"
import { LanguageSwitcher } from "@/components/LanguageSwitcher.jsx"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Navbar() {
  const [isHover, setIsHover] = React.useState(false);

  return (
    <nav className="pt-8 pl-4 pr-4 mb-8" aria-label="Main navigation">
      <div className="container mx-auto max-w-3xl">
        <div className="flex justify-between">
          <div className="flex flex-none group items-center" onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}>
            <a href="/" aria-label="Daniel Santiago MJ - Home">
              <span className="flex">
                <span className="transform group-hover:rotate-45 transition duration-300 ease-in-out ">
                  {isHover ? <CodeXml /> : <Code />}
                </span>
                <span className="ml-4 text-xl font-bold -mt-0.5 ">
                  Daniel Santiago MJ
                </span>
              </span>
            </a>
          </div>
          <div className="hidden lg:flex justify-around items-center gap-4">
            <ul className="flex justify-evenly w-52 min-w-52 items-center">
              <li>
                <a href="/about" className="inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium ring-offset-background transition-colors hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium ring-offset-background transition-colors hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                  Contact
                </a>
              </li>
            </ul>
            <LanguageSwitcher />
            <ModeToggle />
          </div>
          <div className="lg:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <ModeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Menu className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <a href="/about" className="text-center cursor-pointer">
                    About
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/contact" className="cursor-pointer">
                    Contact
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  )
}


