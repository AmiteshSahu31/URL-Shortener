import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from './ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LinkIcon, LogOut } from 'lucide-react'

  

const Header = () => {
    const navigate= useNavigate();
    const user=false;
  return (
    <nav className='py-4 px-10 flex justify-between items-center'>
        <Link>
          <img src="/logo.png" alt="Trimmr logo" className='h-16' />
        </Link>

        <div>
            {!user ? <Button onClick={() => navigate("/auth")}>Login</Button>
            : <DropdownMenu>
            <DropdownMenuTrigger>
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" className={"rounded-full overflow-hidden w-10"} />
                <AvatarFallback>AS</AvatarFallback>
            </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Amitesh Sahu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem><LinkIcon className='size-4'/>My Links</DropdownMenuItem>
              <DropdownMenuItem className="text-red-400">
                <LogOut className="size-4"/><span>Logout</span></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
           } 
            
        </div>

    </nav>
  )
}

export default Header
