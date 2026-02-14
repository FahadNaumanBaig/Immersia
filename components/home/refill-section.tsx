import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Leaf, Recycle, Sparkles } from "lucide-react"

export function RefillSection() {
  return (
    <section id="refill" className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-square rounded-sm overflow-hidden">
              <Image
                src="/images/refill-ritual.jpg"
                alt="Immersia refill ritual at boutique"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-sm shadow-lg max-w-[200px]">
              <Recycle className="h-8 w-8 text-primary mb-3" />
              <p className="font-serif text-2xl text-foreground">87%</p>
              <p className="text-xs text-muted-foreground mt-1">Less packaging waste</p>
            </div>
          </div>
          
          {/* Content */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
              The Refill Ritual
            </p>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-balance">
              Collect. Refill.
              <br />
              Repeat.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Our bottles are designed to be treasured forever. Visit any Immersia boutique 
              to refill your collection, transforming sustainability into a sensory ceremony.
            </p>
            
            <div className="mt-10 grid sm:grid-cols-3 gap-6">
              <div className="text-center sm:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-medium text-foreground text-sm">Collectible Bottles</h3>
                <p className="mt-2 text-xs text-muted-foreground">
                  Art pieces designed by global artisans
                </p>
              </div>
              
              <div className="text-center sm:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <Recycle className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-medium text-foreground text-sm">In-Store Refills</h3>
                <p className="mt-2 text-xs text-muted-foreground">
                  Visit any boutique worldwide
                </p>
              </div>
              
              <div className="text-center sm:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <Leaf className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-medium text-foreground text-sm">Carbon Neutral</h3>
                <p className="mt-2 text-xs text-muted-foreground">
                  Every refill offsets emissions
                </p>
              </div>
            </div>
            
            <div className="mt-10">
              <Button size="lg">
                Find a Boutique
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
