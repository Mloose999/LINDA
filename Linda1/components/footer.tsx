"use client"

import Link from "next/link"
import { Instagram, Linkedin, Youtube } from "lucide-react"

const navLinks = [
  { name: "Philosophy", href: "#philosophy" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Workshops", href: "#workshops" },
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
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <p className="font-serif text-2xl font-bold mb-4">Linda Holtkamp</p>
            <p className="text-secondary-foreground/70 leading-relaxed">
              Life & Mindset Coaching for transformation, healing, and personal growth.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-medium mb-4">Quick Links</p>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div>
            <p className="font-medium mb-4">Connect</p>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
            <div className="text-secondary-foreground/70 text-sm space-y-1">
              <p>info@lindaholtkamp.com</p>
              <p>+49 171 5812251</p>
            </div>
          </div>
        </div>

        {/* Impressum */}
        <div className="pt-8 border-t border-secondary-foreground/20">
          <div className="text-center mb-6">
            <p className="font-medium mb-2">Impressum</p>
            <div className="text-secondary-foreground/60 text-sm">
              <p>Linda Holtkamp | Reemstückenkamp 22 c, 22523 Hamburg</p>
            </div>
          </div>
          
          <p className="text-secondary-foreground/40 text-sm text-center">
            © {new Date().getFullYear()} Linda Holtkamp - Mindset Coaching. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
