import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/50" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
              Heritage Fragrance House
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-balance">
              Where Heritage
              <br />
              <span className="text-primary">Meets Scent</span>
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground max-w-md">
              Region-inspired perfumes that capture cultural identity, terroir, and botanical nuance. 
              Experience the world through scent.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" className="group">
                Explore Collections
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                Our Story
              </Button>
            </div>
            
            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-border pt-8">
              <div>
                <p className="font-serif text-3xl text-foreground">47</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Years Heritage</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-foreground">12</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Global Regions</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-foreground">100%</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Refillable</p>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
              <Image
                src="/images/hero-bottle.jpg"
                alt="Immersia luxury perfume bottle"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary/10 rounded-sm -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
