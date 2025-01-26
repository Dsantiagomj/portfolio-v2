import * as React from "react"

import { Menu, Code, CodeXml } from "lucide-react"

import { ModeToggle } from "@/components/ModeToggle.jsx"

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
    <nav className="pt-8 pl-4 pr-4 mb-8">
      <div className="container mx-auto max-w-3xl">
        <div className="flex justify-between">
          <div className="flex flex-none group items-center" onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}>
            <a href="/">
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
          <div className="hidden lg:flex justify-around ">
            <ul className="flex justify-evenly w-52 min-w-52 items-center">
              <li>
                <a href="/about" >
                  <Button variant="link">
                    About
                  </Button>
                </a>
              </li>
              <li>
                <a href="/contact">
                  <Button variant="link">
                    Contact
                  </Button>
                </a>
              </li>
            </ul>
            <ModeToggle />
          </div>
          <div className="lg:hidden flex">
            <div className="mr-2">
              <ModeToggle />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Menu className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <a href="/about" className="text-center">
                  <DropdownMenuItem>
                    About
                  </DropdownMenuItem>
                </a>
                <a href="/contact">
                  <DropdownMenuItem href="/contact">
                    Contact
                  </DropdownMenuItem>
                </a>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  )
}


