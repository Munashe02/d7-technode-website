import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Content Studio - D7 TechNode',
  description: 'Manage your website content',
}

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return children
}
