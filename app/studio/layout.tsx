import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Content Studio',
  description: 'Manage your website content',
  robots: { index: false, follow: false },
}

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return children
}
