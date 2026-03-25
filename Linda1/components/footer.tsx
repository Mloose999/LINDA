"use client"

import Link from "next/link"
import { Instagram, Linkedin, Youtube } from "lucide-react"

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Booking", href: "#booking" },
]

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
]

export function Footer() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const element = document.querySelector(href)
      element?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="font-serif text-2xl font-bold mb-1">Linda Holtkamp</p>
            <p className="text-background/60 text-sm tracking-widest uppercase">Mindset Coaching</p>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-background/70 hover:text-background transition-colors duration-200 text-sm"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="w-10 h-10 border border-background/30 flex items-center justify-center hover:bg-background hover:text-foreground transition-colors duration-200"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>

        {/* Impressum */}
        <div className="pt-8 border-t border-background/20">
          <div className="text-center mb-8">
            <h3 className="font-serif text-lg font-semibold mb-4">Impressum</h3>
            <div className="text-background/60 text-sm space-y-1">
              <p className="font-medium text-background">Linda Holtkamp</p>
              <p>Reemstückenkamp 22 c, 22523 Hamburg</p>
              <p>
                <a href="tel:+491715812251" className="hover:text-background transition-colors">
                  +49 171 5812251
                </a>
              </p>
              <p>
                <a href="mailto:info@lindaholtkamp.com" className="hover:text-background transition-colors">
                  info@lindaholtkamp.com
                </a>
              </p>
            </div>
          </div>
          
          <p className="text-background/40 text-sm text-center">
            © {new Date().getFullYear()} Linda Holtkamp - Mindset Coaching. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
