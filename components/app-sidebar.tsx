"use client"
import {Calendar, ChevronDown, HandHelping, Milestone, Search, SearchIcon, Settings, Webhook} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem, SidebarMenuSub, SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/components/ui/collapsible";
import {usePathname} from "next/navigation";

// Menu items.
const hooks = [
  {
    title: "useState",
    url: "/hooks/use-state-hook",
    icon: Milestone,
  },
  {
    title: "useEffect",
    url: "/hooks/use-effect-hook",
    icon: Milestone,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

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
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={currentUrl === "/firstcomponent"}>
                  <a href={"/firstcomponent"}>
                    <HandHelping/>
                    <span>First Component</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
            <SidebarMenu>
              <Collapsible className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton asChild>
                      <a href="#">
                        <Webhook/>
                        <span>Hooks</span>
                        <ChevronDown
                          className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180"/>
                      </a>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {hooks.map((hook) => (
                        <SidebarMenuSubItem key={hook.title}>
                          <SidebarMenuButton asChild>
                            <a href={hook.url}>
                              <hook.icon/>
                              <span>{hook.title}</span>
                            </a>
                          </SidebarMenuButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href={"/search"}>
                    <SearchIcon/>
                    <span>Search</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
