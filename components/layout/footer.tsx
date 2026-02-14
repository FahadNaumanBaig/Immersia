import Link from "next/link"
import { Instagram, Linkedin, Youtube } from "lucide-react"

const footerNavigation = {
  explore: [
    { name: "Collections", href: "/#collections" },
    { name: "VR Experiences", href: "/#experiences" },
    { name: "Sustainability", href: "/#sustainability" },
    { name: "Refill Ritual", href: "/#refill" },
  ],
  company: [
    { name: "Our Story", href: "/about" },
    { name: "The Team", href: "/team" },
    { name: "Journal", href: "/blog" },
    { name: "Careers", href: "/careers" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
  social: [
    { name: "Instagram", href: "https://instagram.com", icon: Instagram },
    { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
    { name: "YouTube", href: "https://youtube.com", icon: Youtube },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand section */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block">
              <span className="font-serif text-3xl tracking-wide">Immersia</span>
            </Link>
            <p className="mt-6 text-sm leading-relaxed text-primary-foreground/70 max-w-xs">
              Heritage fragrance house crafting region-inspired perfumes that capture cultural identity, terroir, and botanical nuance.
            </p>
            <div className="mt-8 flex gap-4">
              {footerNavigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation sections */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div>
                <h3 className="text-xs font-medium uppercase tracking-widest text-primary-foreground/50">Explore</h3>
                <ul className="mt-6 space-y-4">
                  {footerNavigation.explore.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-medium uppercase tracking-widest text-primary-foreground/50">Company</h3>
                <ul className="mt-6 space-y-4">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-medium uppercase tracking-widest text-primary-foreground/50">Legal</h3>
                <ul className="mt-6 space-y-4">
                  {footerNavigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-primary-foreground/50">
              &copy; {new Date().getFullYear()} Immersia. All rights reserved.
            </p>
            <p className="text-xs text-primary-foreground/50">
              Crafted with heritage. Delivered with innovation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
