"use client"

import { AppSidebar } from "../../components/app-sidebar"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { SquareTerminal, LayoutDashboard, Newspaper, MessageSquare, Globe, BellRing, BookOpen, FolderTree } from "lucide-react"

export default function AppDirectory() {
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
            icon: LayoutDashboard
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
            icon: FolderTree,
            isActive: true
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
            {/* Main heading and buttons */}
            <div className="flex justify-between items-center flex-col sm:flex-row gap-4 sm:gap-0">
              <h1 className="text-3xl font-bold tracking-tight">
                Firecrawl App Directory
              </h1>
              <div className="flex items-center gap-2 flex-col sm:flex-row w-full sm:w-auto">
                <a 
                  href="https://firecrawl-app-directory-crbi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-3 py-1.5 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm w-full sm:w-auto"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="2" y1="12" x2="22" y2="12"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                  <span className="hidden sm:inline">Browse Apps</span>
                </a>
                <a 
                  href="https://github.com/harshith-eth/firecrawl-app-directory"
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
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  React + TypeScript
                </span>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl">
                A curated collection of AI-powered applications built with Firecrawl's API. Explore innovative tools that demonstrate the power of web crawling, content processing, and AI integration.
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
                      <h2 className="text-lg font-semibold mb-1.5">Featured Apps</h2>
                      <p className="text-sm text-muted-foreground mb-3">
                        Discover powerful applications built with Firecrawl's technology
                      </p>
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div className="space-y-2.5">
                        <div className="flex gap-2.5 items-start group">
                          <div className="h-5 w-5 rounded-full bg-orange-500 flex items-center justify-center text-white font-medium shrink-0 group-hover:scale-110 transition-transform">📰</div>
                          <div>
                            <h3 className="font-medium text-sm">TechCrunch to Newsletter</h3>
                            <p className="text-muted-foreground text-xs leading-relaxed">Transform TechCrunch articles into engaging newsletters with AI</p>
                          </div>
                        </div>

                        <div className="flex gap-2.5 items-start group">
                          <div className="h-5 w-5 rounded-full bg-orange-500 flex items-center justify-center text-white font-medium shrink-0 group-hover:scale-110 transition-transform">💼</div>
                          <div>
                            <h3 className="font-medium text-sm">Remote Job Alert</h3>
                            <p className="text-muted-foreground text-xs leading-relaxed">AI-powered job descriptions from any remote job posting</p>
                          </div>
                        </div>

                        <div className="flex gap-2.5 items-start group">
                          <div className="h-5 w-5 rounded-full bg-orange-500 flex items-center justify-center text-white font-medium shrink-0 group-hover:scale-110 transition-transform">🌐</div>
                          <div>
                            <h3 className="font-medium text-sm">Chat with Website</h3>
                            <p className="text-muted-foreground text-xs leading-relaxed">Interactive conversations with any website's content</p>
                          </div>
                        </div>

                        <div className="flex gap-2.5 items-start group">
                          <div className="h-5 w-5 rounded-full bg-orange-500 flex items-center justify-center text-white font-medium shrink-0 group-hover:scale-110 transition-transform">📚</div>
                          <div>
                            <h3 className="font-medium text-sm">Paul Graham AI</h3>
                            <p className="text-muted-foreground text-xs leading-relaxed">Chat with an AI trained on Paul Graham's essays</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right column - Demo/Preview */}
                <div className="w-full md:flex-1 h-full">
                  <div className="rounded-xl bg-white/30 backdrop-blur p-3 border border-white/20 shadow-[0_2px_8px_-1px_rgba(249,115,22,0.05)] hover:shadow-[0_4px_12px_-1px_rgba(249,115,22,0.1)] transition-shadow h-full">
                    <div className="aspect-video flex items-center justify-center rounded-lg overflow-hidden">
                      <a 
                        href="https://firecrawl-app-directory-crbi.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full h-full"
                      >
                        <img
                          src="/images/app-directory.png"
                          alt="Firecrawl Apps Overview"
                          className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* About section */}
              <div className="flex-1">
                <div className="rounded-xl bg-white/30 backdrop-blur p-3.5 border border-white/20 space-y-3 shadow-[0_2px_8px_-1px_rgba(249,115,22,0.05)] hover:shadow-[0_4px_12px_-1px_rgba(249,115,22,0.1)] transition-shadow">
                  <h2 className="text-lg font-semibold">About the Directory</h2>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>The Firecrawl App Directory showcases innovative applications built using Firecrawl's powerful API and Azure OpenAI integration. Each app demonstrates unique ways to transform web content into valuable tools and services.</p>
                    <p>From automating content creation to enabling AI-powered conversations with web content, these applications highlight the versatility and potential of Firecrawl's technology stack. All apps are open-source and built with modern web technologies.</p>
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