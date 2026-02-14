import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const collections = [
  {
    name: "Moroccan Saffron Souk",
    description: "Sun-warmed spices, precious saffron threads, and ancient medina whispers",
    image: "/images/collection-morocco.jpg",
    notes: "Saffron, Amber, Oud, Cedar",
    href: "#",
  },
  {
    name: "Kyoto Zen Temple",
    description: "Serene moss gardens, incense-touched air, and contemplative bamboo groves",
    image: "/images/collection-kyoto.jpg",
    notes: "Hinoki, Green Tea, Bamboo, White Musk",
    href: "#",
  },
  {
    name: "Sicilian Lemon Grove",
    description: "Mediterranean sunlight, citrus blossoms, and ancient volcanic earth",
    image: "/images/collection-sicily.jpg",
    notes: "Lemon, Neroli, Fig, Sandalwood",
    href: "#",
  },
]

export function CollectionsSection() {
  return (
    <section id="collections" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
            The Collection
          </p>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-balance">
            Journey Through Scent
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Each fragrance is a voyage, capturing the essence of a place, its people, 
            and the botanicals that define its character.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <Link
              key={collection.name}
              href={collection.href}
              className="group relative"
            >
              <article>
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-muted">
                  <Image
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
                  
                  {/* Number */}
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-medium text-primary-foreground bg-foreground/80 px-2 py-1 rounded-sm">
                      0{index + 1}
                    </span>
                  </div>
                  
                  {/* Arrow */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-background rounded-full p-2">
                      <ArrowUpRight className="h-4 w-4 text-foreground" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="mt-6">
                  <h3 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors">
                    {collection.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {collection.description}
                  </p>
                  <p className="mt-4 text-xs uppercase tracking-wider text-primary/80">
                    {collection.notes}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* View All */}
        <div className="mt-16 text-center">
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-foreground hover:text-primary transition-colors"
          >
            View All Collections
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
