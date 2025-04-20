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
import { UrlState } from '@/context'
import useFetch from '@/hooks/useFetch'
import { logout } from '@/db/apiAuth'
import { BarLoader } from 'react-spinners'

  

const Header = () => {
    const navigate= useNavigate();
    const {user, fetchUser}=UrlState();

    const {loading,fn:fnLogout}=useFetch(logout);

  return (
    <>
    <nav className='py-4 px-10 flex justify-between items-center'>
        <Link>
          <img src="/logo.png" alt="Trimmr logo" className='h-16' />
        </Link>

        <div>
            {!user ? <Button onClick={() => navigate("/auth")}>Login</Button>
            : <DropdownMenu>
            <DropdownMenuTrigger>
            <Avatar>
                <AvatarImage src={user?.user_metadata?.profile_pic} className={"rounded-full overflow-hidden w-10"} />
                <AvatarFallback>AS</AvatarFallback>
            </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>{user?.user_metadata?.name}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem><LinkIcon className='size-4'/>My Links</DropdownMenuItem>
              <DropdownMenuItem className="text-red-400">
                <LogOut className="size-4"/>
                <span onClick={() => {
                  fnLogout().then(() => {
                    fetchUser();
                    navigate("/");
                  })
                }}>
                  Logout
                </span>
                </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
           } 
            
        </div>
    </nav>
    {loading && <BarLoader width={"100%"} color="#36d7b7" className='mb-4' />}
    </>
  )
}

export default Header
