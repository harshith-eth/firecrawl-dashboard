"use client"

import type * as React from "react"
import type { LucideIcon } from "lucide-react"
import Image from "next/image"

import { NavMain } from "@/components/nav-main"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar"
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar"

export type AppSidebarProps = React.ComponentProps<typeof Sidebar> & {
  navMain: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}

export function AppSidebar({ navMain, ...props }: AppSidebarProps) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" className="!h-auto py-4 group-data-[collapsible=icon]:!p-0">
              <div className="flex flex-col items-center w-full gap-3 group-data-[collapsible=icon]:gap-0">
                <div className="relative flex aspect-square size-40 items-center justify-center rounded-lg overflow-hidden transition-all duration-300 group-data-[collapsible=icon]:size-8">
                  <Image 
                    src="/images/me.jpg"
                    alt="Profile picture"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="grid text-center text-sm leading-tight group-data-[collapsible=icon]:hidden">
                  <span className="truncate font-semibold">Growth Engineer at Firecrawl</span>
                  <span className="truncate text-xs">Harshith Vaddiparthy</span>
                </div>
                <div className="flex items-center justify-center gap-3 group-data-[collapsible=icon]:hidden">
                  <a href="https://github.com/harshith-eth" target="_blank" rel="noopener noreferrer" className="text-[#000000] hover:text-[#F97316]">
                    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                  <a href="https://x.com/harshithio" target="_blank" rel="noopener noreferrer" className="text-[#000000] hover:text-[#F97316]">
                    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a href="https://linkedin.com/in/harshith-vaddiparthy" target="_blank" rel="noopener noreferrer" className="text-[#000000] hover:text-[#F97316]">
                    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="https://www.youtube.com/@harshithvaddiparthy" target="_blank" rel="noopener noreferrer" className="text-[#000000] hover:text-[#F97316]">
                    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                  <a href="mailto:vharshith.2810@gmail.com" className="text-[#000000] hover:text-[#F97316]">
                    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current">
                      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                    </svg>
                  </a>
                </div>
                <div className="w-full px-2 group-data-[collapsible=icon]:hidden">
                  <div className="h-[2px] bg-[#F97316] w-full" />
                </div>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}

