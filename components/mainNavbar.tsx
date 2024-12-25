import Link from "next/link"
import Image from "next/image"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Input } from "./ui/input"

export default function MainNavbar() {
    return (
        <>
        <div className="h-[60px] bg-red-800 flex items-center justify-center ">
            <div className="flex w-[1280px] justify-between items-center">
            <div className=" w-[50px]">
            <NavigationMenu>
                <NavigationMenuList>
                        <NavigationMenuItem>
                            <Image 
                                src='https://sasaka.or.id/web/wp-content/uploads/2022/08/Logo-SASAKA_-SF-500px.png'
                                width={50}
                                height={50}
                                alt="" />
                        </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            </div>
            <div className=" w-[400px] ">
            <NavigationMenu>
                <NavigationMenuList>
                        <NavigationMenuItem>
                            <Input placeholder="cari titik lokasi" type="text" className="w-[400px]"/>
                        </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            </div>

            <div className="">

            <NavigationMenu>
                <NavigationMenuList>

            <NavigationMenuItem>
                            <Link href="/docs" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Masuk
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                </NavigationMenuList>
                
            </NavigationMenu>
            </div>
            </div>
        </div>
        </>
    )
}