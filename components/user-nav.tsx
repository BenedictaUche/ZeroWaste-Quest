"use client"
import { useState } from 'react'
import { useUser } from './UserContext'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  import { Button } from "@/components/ui/button"
  import { toast } from "./ui/use-toast"
  import Link from 'next/link'
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"




  export function UserNav() {

    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const [showEditprofile, setShowEditProfile] = useState(false)
    const user = useUser()

    const SHEET_SIDES = ["top", "right", "bottom", "left"] as const

    type SheetSide = (typeof SHEET_SIDES)[number]

    const handleLogin = () => {
        setIsLoggedIn(true)
        // toast.success("Logged in")
    }

    const handleShowEditProfile = () => {
        setShowEditProfile(true)
    }




    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8 bg-gray-200">
              <AvatarImage src="/avatars/01.png" alt={user?.username} />
              <AvatarFallback>{user?.username.charAt(0).toUpperCase()}{user?.username.charAt(1).toUpperCase()}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        {isLoggedIn ? (
            <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">{user?.username}</p>
                <p className="text-xs leading-none text-muted-foreground">
                  {user?.email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                Profile
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                  <Link href='/dashboard'>Dashboard</Link>
                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Edit profile
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
            <Link href='/'>Log out</Link>
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        ): (
            <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">shadcn</p>
                </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup></DropdownMenuGroup>
                <DropdownMenuItem>
                <Link href='/'>Log in</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                <Link href='/'>Sign up</Link>
                </DropdownMenuItem>
            </DropdownMenuContent>

        )}

      </DropdownMenu>
    )
  }
