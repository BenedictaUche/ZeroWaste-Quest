"use client"
import { useState, useEffect } from 'react'
import { useUser } from '../context/UserContext'
import { useAuth } from '@/context/AuthContext'
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
  import { db } from '@/config/firebase'
  import { ref, uploadBytes, getStorage } from "firebase/storage";
import { doc, setDoc, getDoc } from "firebase/firestore";



  export function UserNav() {

    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const [showEditprofile, setShowEditProfile] = useState(false)
    const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
    const { user, } = useUser();
    const { auth } = useAuth();



    const handleLogin = () => {
        setIsLoggedIn(true)
    }

    const handleShowEditProfile = () => {
        setShowEditProfile(true)
    }

    useEffect(() => {
      // Fetch the avatar URL from Firestore
      if (user) {
        const userDocRef = doc(db, 'users', user.uid);
        getDoc(userDocRef)
          .then((docSnapshot) => {
            const userData = docSnapshot.data();
            const userAvatarUrl = userData?.avatar || null;
            setAvatarUrl(userAvatarUrl);
          })
          .catch((error) => {
            console.error('Error fetching user data:', error);
          });
      }
    }, [user]);

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8 bg-gray-200">
            {avatarUrl ? (
              <AvatarImage src={avatarUrl} alt={user?.username} />
            ) : (
              <>
                <AvatarFallback>
                  {user?.username.charAt(0).toUpperCase()}
                  {user?.username.charAt(1).toUpperCase()}
                </AvatarFallback>
              </>
            )}
          </Avatar>
          </Button>
        </DropdownMenuTrigger>
        {isLoggedIn ? (
            <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">{user?.username}</p>
                <p className="text-xs leading-none text-muted-foreground">
                  {user?.username}
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
