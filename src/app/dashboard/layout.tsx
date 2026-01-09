import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "Fleet Manager - ThreatZapper",
  description: "Manage your ThreatZapper devices",
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider defaultTheme="system" storageKey="threatzapper-theme">
      {children}
    </ThemeProvider>
  )
}
