"use client"

import { AppSidebar } from "../components/app-sidebar"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { SquareTerminal, LayoutDashboard, Twitter, MessageSquare, Globe, Newspaper, BellRing, BookOpen } from "lucide-react"

export default function Home() {
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar 
        navMain={[
          {
            title: "Introduction",
            url: "/",
            icon: SquareTerminal,
            isActive: true
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
            {/* Main heading */}
            <h1 className="text-3xl font-bold tracking-tight">
              Growth Engineer & Product Builder
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              I build products that further human progress, focusing on transformative technologies and scalable systems.
            </p>
            
            {/* Two column layout */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col-reverse md:flex-row gap-6 items-start">
                {/* Left column - Why I Stand Out section */}
                <div className="w-full md:w-[280px] lg:w-[320px] h-full">
                  {/* Why I Stand Out Card */}
                  <div className="rounded-xl bg-white/30 backdrop-blur p-3 border border-white/20 shadow-[0_2px_8px_-1px_rgba(249,115,22,0.05)] hover:shadow-[0_4px_12px_-1px_rgba(249,115,22,0.1)] transition-shadow h-full flex flex-col">
                    <div>
                      <h2 className="text-lg font-semibold mb-1.5">Why I Stand Out</h2>
                      <p className="text-sm text-muted-foreground mb-3">
                        Instead of a traditional resume, I built this interactive dashboard showcasing my experience and capabilities with Firecrawl.
                      </p>
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div className="space-y-2.5">
                        <div className="flex gap-2.5 items-start group">
                          <div className="h-5 w-5 rounded-full bg-orange-500 flex items-center justify-center text-white font-medium shrink-0 group-hover:scale-110 transition-transform">🚀</div>
                          <div>
                            <h3 className="font-medium text-sm">Startup Founder</h3>
                            <p className="text-muted-foreground text-xs leading-relaxed">Founded ARTIFIN AI, a financial analysis tool leveraging LLMs for automated insights</p>
                            <a 
                              href="https://twitter.com/harshithio/status/1741510995573444939" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="mt-1.5 inline-flex items-center gap-1.5 px-2.5 py-1 text-xs bg-orange-500/10 text-orange-600 rounded-md hover:bg-orange-500/20 transition-colors group"
                            >
                              <span>View Announcement</span>
                              <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                              </svg>
                            </a>
                          </div>
                        </div>

                        <div className="flex gap-2.5 items-start group">
                          <div className="h-5 w-5 rounded-full bg-orange-500 flex items-center justify-center text-white font-medium shrink-0 group-hover:scale-110 transition-transform">🎯</div>
                          <div>
                            <h3 className="font-medium text-sm">Community Builder</h3>
                            <p className="text-muted-foreground text-xs leading-relaxed">Active tech influencer with 3K+ YouTube subscribers and growing Twitter following</p>
                            <div className="flex flex-col gap-1.5 mt-1.5">
                              <a 
                                href="https://twitter.com/harshithio" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs bg-orange-500/10 text-orange-600 rounded-md hover:bg-orange-500/20 transition-colors group w-fit"
                              >
                                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                                <span>Follow on Twitter</span>
                              </a>
                              <a 
                                href="https://youtube.com/@harshithvaddiparthy" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs bg-orange-500/10 text-orange-600 rounded-md hover:bg-orange-500/20 transition-colors group w-fit"
                              >
                                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                </svg>
                                <span>Subscribe on YouTube</span>
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-2.5 items-start group">
                          <div className="h-5 w-5 rounded-full bg-orange-500 flex items-center justify-center text-white font-medium shrink-0 group-hover:scale-110 transition-transform">💼</div>
                          <div>
                            <h3 className="font-medium text-sm">YC Experience</h3>
                            <p className="text-muted-foreground text-xs leading-relaxed">Currently Growth Marketer at JustPaid.ai (YC W23)</p>
                            <a 
                              href="https://justpaid.ai" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="mt-1.5 inline-flex items-center gap-1.5 px-2.5 py-1 text-xs bg-orange-500/10 text-orange-600 rounded-md hover:bg-orange-500/20 transition-colors group"
                            >
                              <span>Visit JustPaid</span>
                              <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                              </svg>
                            </a>
                    </div>
                  </div>

                        <div className="flex gap-2.5 items-start group">
                          <div className="h-5 w-5 rounded-full bg-orange-500 flex items-center justify-center text-white font-medium shrink-0 group-hover:scale-110 transition-transform">🛠️</div>
                    <div>
                            <h3 className="font-medium text-sm">Builder & Creator</h3>
                            <p className="text-muted-foreground text-xs leading-relaxed">Created this dashboard featuring 4 AI agents built with Firecrawl, demonstrating the intersection of code, content, and distribution</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right column - YouTube video */}
                <div className="w-full md:flex-1 h-full">
                  <div className="rounded-xl bg-white/30 backdrop-blur p-3 border border-white/20 shadow-[0_2px_8px_-1px_rgba(249,115,22,0.05)] hover:shadow-[0_4px_12px_-1px_rgba(249,115,22,0.1)] transition-shadow h-full">
                    <div className="aspect-video flex items-center justify-center rounded-lg overflow-hidden">
                      <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/H4dMFSNtxZE"
                        title="Introduction Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>

              {/* About Me section - Now below the video */}
              <div className="flex-1">
                <div className="rounded-xl bg-white/30 backdrop-blur p-3.5 border border-white/20 space-y-3 shadow-[0_2px_8px_-1px_rgba(249,115,22,0.05)] hover:shadow-[0_4px_12px_-1px_rgba(249,115,22,0.1)] transition-shadow">
                  <h2 className="text-lg font-semibold">About Me</h2>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>Currently exploring the intersection of LLMs and Blockchain to address critical pain points in how we interact with and leverage data.</p>
                    <p>I produce content sharing insights around the impact of these transformative technologies, focusing on practical applications and real-world solutions.</p>
                    <p>My work spans across building scalable systems, creating engaging content, and fostering communities around emerging technologies.</p>
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