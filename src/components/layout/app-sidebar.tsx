import { LogOut } from "lucide-react"
import { LayoutGrid, Briefcase, Phone, CreditCard, MessageSquare } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Overview",
    url: "#",
    icon: LayoutGrid,
  },
  {
    title: "My Assistants",
    url: "#",
    icon: Briefcase,
  },
  {
    title: "Call Analytics",
    url: "#",
    icon: Phone,
  },
  {
    title: "Billing & Subscription",
    url: "#",
    icon: CreditCard,
  },
  {
    title: "Feedback",
    url: "#",
    icon: MessageSquare,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="bg-[#0c1126] text-white border-r-0">
      <SidebarHeader className="p-6 border-b-0">
        <div className="text-2xl font-bold">
          <span className="text-[#00e1ff]">Nova</span>
          <span className="text-white">AI</span>
        </div>
      </SidebarHeader>
      <SidebarContent className="px-4 py-6">
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title} className="mb-4">
              <SidebarMenuButton asChild className="hover:bg-[#1a2340] text-white hover:text-white">
                <a href={item.url} className="flex items-center gap-3">
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4 mt-auto">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="w-full border border-gray-700 rounded-md hover:bg-[#1a2340] text-white hover:text-white"
            >
              <a href="#" className="flex items-center justify-center gap-2">
                <LogOut className="h-5 w-5" />
                <span>Log Out</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

