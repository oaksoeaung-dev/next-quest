"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { usePathname } from "next/navigation";
import {routes} from "@/lib/route";
import Link from "next/link";
import {ChevronDown} from "lucide-react";


export function AppSidebar() {
  const currentUrl: string = usePathname();

  return (
    <Sidebar>
      <SidebarHeader>
        <h1 className={"text-3xl"}>Next Quest</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            {
              routes.map(route => {
                if(route.childUrl != undefined) {
                  return(
                    <SidebarMenu key={route.title}>
                      <Collapsible>
                        <SidebarMenuItem>
                          <CollapsibleTrigger asChild>
                            <SidebarMenuButton asChild>
                              <Link href={route.url}>
                                <route.icon />
                                <span>{route.title}</span>
                                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                              </Link>
                            </SidebarMenuButton>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <SidebarMenuSub>
                              {route.childUrl.map((child) => (
                                <SidebarMenuSubItem key={child.title}>
                                  <SidebarMenuButton asChild isActive={currentUrl === child.url}>
                                    <Link href={child.url}>
                                      <child.icon />
                                      <span>{child.title}</span>
                                    </Link>
                                  </SidebarMenuButton>
                                </SidebarMenuSubItem>
                              ))}
                            </SidebarMenuSub>
                          </CollapsibleContent>
                        </SidebarMenuItem>
                      </Collapsible>
                    </SidebarMenu>
                  )
                }else{
                  return(
                    <SidebarMenu key={route.title}>
                      <SidebarMenuItem>
                        <SidebarMenuButton asChild isActive={currentUrl === route.url}>
                          <a href={route.url}>
                            <route.icon />
                            <span>{route.title}</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  )
                }
              })
            }
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
