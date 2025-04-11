"use client"

import { AppSidebar } from "../../components/app-sidebar"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { SquareTerminal, LayoutDashboard, Newspaper, MessageSquare, Globe, BellRing, BookOpen, FolderTree } from "lucide-react"

export default function BuildingDashboard() {
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar 
        navMain={[
          {
            title: "Introduction",
            url: "/",
            icon: SquareTerminal
          },
          {
            title: "Building Dashboard",
            url: "/building-dashboard",
            icon: LayoutDashboard,
            isActive: true
          },
          {
            title: "Techcrunch to Newsletter",
            url: "/techcrunch-to-newsletter",
            icon: Newspaper
          },
          {
            title: "Remote Job Alert",
            url: "/remote-jobs",
            icon: BellRing
          },
          {
            title: "Chat with Website",
            url: "/chat-with-website",
            icon: Globe
          },
          {
            title: "Paul Graham AI",
            url: "/paul-graham-ai",
            icon: BookOpen
          },
          {
            title: "Firecrawl App Directory",
            url: "/app-directory",
            icon: FolderTree
          }
        ]}
      />
      <SidebarInset className="relative overflow-x-hidden bg-[#FFF7ED]">
        {/* Background gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#FFF7ED] opacity-95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_85%,#F97316_0%,transparent_90%),radial-gradient(circle_at_65%_80%,#EA580C_0%,transparent_85%)] opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,#FB923C_0%,transparent_70%),radial-gradient(circle_at_85%_15%,#FDBA74_0%,transparent_65%)] opacity-15" />
        
        <main className="relative flex flex-1 flex-col min-h-screen">
          <div className="flex h-16 shrink-0 items-center px-4">
            <SidebarTrigger className="-ml-1" />
          </div>

          <div className="flex flex-1 flex-col gap-6 p-6 pt-0">
            {/* Main heading and GitHub button */}
            <div className="flex justify-between items-center flex-col sm:flex-row gap-4 sm:gap-0">
              <h1 className="text-3xl font-bold tracking-tight">
                Building the Dashboard
              </h1>
              <div className="flex items-center gap-2 flex-col sm:flex-row w-full sm:w-auto">
                <a 
                  href="https://github.com/harshith-eth/firecrawl-dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-3 py-1.5 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm w-full sm:w-auto"
                >
                  <svg height="24" width="24" viewBox="0 0 16 16" className="w-4 h-4">
                    <path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                  <span className="hidden sm:inline">View on GitHub</span>
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  100% Open Source
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Built with Firecrawl
                </span>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl">
                A deep dive into how this interactive dashboard was built using Next.js, Tailwind, and AI-powered development.
              </p>
            </div>
            
            {/* Two column layout */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col-reverse md:flex-row gap-6 items-start">
                {/* Left column - Features section */}
                <div className="w-full md:w-[280px] lg:w-[320px] h-full">
                  {/* Features Card */}
                  <div className="rounded-xl bg-white/30 backdrop-blur p-3 border border-white/20 shadow-[0_2px_8px_-1px_rgba(249,115,22,0.05)] hover:shadow-[0_4px_12px_-1px_rgba(249,115,22,0.1)] transition-shadow h-full flex flex-col">
                    <div>
                      <h2 className="text-lg font-semibold mb-1.5">Development Approach</h2>
                      <p className="text-sm text-muted-foreground mb-3">
                        Building with modern tools and AI-powered development.
                      </p>
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="flex items-start gap-2.5 group cursor-pointer hover:bg-orange-50/50 rounded-lg p-2 transition-colors">
                          <div className="h-6 w-6 rounded-full bg-orange-500 flex items-center justify-center text-white font-medium shrink-0 group-hover:scale-105 transition-transform">1</div>
                          <div>
                            <h3 className="font-medium text-sm flex items-center gap-1.5">
                              Vibe Coding
                              <span className="text-[10px] bg-orange-100 text-orange-700 px-1.5 rounded">Voice-to-Code</span>
                            </h3>
                            <p className="text-xs text-muted-foreground mt-0.5">Rapid development using AI assistance and voice commands for faster iteration</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-2.5 group cursor-pointer hover:bg-orange-50/50 rounded-lg p-2 transition-colors">
                          <div className="h-6 w-6 rounded-full bg-orange-500 flex items-center justify-center text-white font-medium shrink-0 group-hover:scale-105 transition-transform">2</div>
                          <div>
                            <h3 className="font-medium text-sm flex items-center gap-1.5">
                              Modern Stack
                              <span className="text-[10px] bg-orange-100 text-orange-700 px-1.5 rounded">Next.js + shadcn/ui</span>
                            </h3>
                            <p className="text-xs text-muted-foreground mt-0.5">Clean UI with Tailwind CSS, responsive layouts, and subtle gradients</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-2.5 group cursor-pointer hover:bg-orange-50/50 rounded-lg p-2 transition-colors">
                          <div className="h-6 w-6 rounded-full bg-orange-500 flex items-center justify-center text-white font-medium shrink-0 group-hover:scale-105 transition-transform">3</div>
                          <div>
                            <h3 className="font-medium text-sm flex items-center gap-1.5">
                              AI-Powered Dev
                              <span className="text-[10px] bg-orange-100 text-orange-700 px-1.5 rounded">Cursor IDE</span>
                            </h3>
                            <p className="text-xs text-muted-foreground mt-0.5">Leveraging AI for rapid prototyping and efficient development workflow</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-2.5 group cursor-pointer hover:bg-orange-50/50 rounded-lg p-2 transition-colors">
                          <div className="h-6 w-6 rounded-full bg-orange-500 flex items-center justify-center text-white font-medium shrink-0 group-hover:scale-105 transition-transform">4</div>
                          <div>
                            <h3 className="font-medium text-sm flex items-center gap-1.5">
                              Iterative Design
                              <span className="text-[10px] bg-orange-100 text-orange-700 px-1.5 rounded">Trial & Error</span>
                            </h3>
                            <p className="text-xs text-muted-foreground mt-0.5">Rapid experimentation with different UI approaches for optimal results</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right column - Demo video */}
                <div className="w-full md:flex-1 h-full">
                  <div className="rounded-xl bg-white/30 backdrop-blur p-3 border border-white/20 shadow-[0_2px_8px_-1px_rgba(249,115,22,0.05)] hover:shadow-[0_4px_12px_-1px_rgba(249,115,22,0.1)] transition-shadow h-full">
                    <div className="aspect-video flex items-center justify-center rounded-lg overflow-hidden">
                      <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/l-skX8z18Mk"
                        title="Building Dashboard Demo"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Details section - Below the video */}
              <div className="flex-1">
                <div className="rounded-xl bg-white/30 backdrop-blur p-3.5 border border-white/20 space-y-3 shadow-[0_2px_8px_-1px_rgba(249,115,22,0.05)] hover:shadow-[0_4px_12px_-1px_rgba(249,115,22,0.1)] transition-shadow">
                  <h2 className="text-lg font-semibold">Development Process</h2>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>Built this interactive dashboard to showcase my development approach and capabilities. Used AI-powered development with Cursor IDE, focusing on rapid iteration and clean design principles. The dashboard features a responsive layout, consistent styling, and seamless navigation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
} 