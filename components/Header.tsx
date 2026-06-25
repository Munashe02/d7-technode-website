'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Solutions', href: '/services' },
  { name: 'Hardware', href: '/products' },
  { name: 'Resources', href: '/resources' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <nav className="container-custom py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="h-10 w-32 flex-shrink-0 md:h-12 md:w-44">
              <Image
                src="/logo.png"
                alt="D7 TechNode"
                width={192}
                height={56}
                className="object-contain"
              />
            </div>
            <span className="sr-only">D7 TechNode</span>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold text-slate-700 transition-colors hover:text-primary-800"
              >
                {item.name}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary">
              Get a Demo
            </Link>
          </div>

          <button
            className="rounded-md p-2 text-slate-800 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="mt-3 border-t border-slate-200 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-semibold text-slate-700 transition-colors hover:text-primary-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/contact" className="btn-primary text-center" onClick={() => setIsMenuOpen(false)}>
                Get a Demo
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
