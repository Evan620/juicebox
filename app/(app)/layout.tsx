import AppSidebarLight from '@/components/AppSidebarLight'
import RightSidebar from '@/components/RightSidebar'

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-[#FAFAFA]">
      <AppSidebarLight />
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
      <RightSidebar />
    </div>
  )
}

