import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeritageSection() {
  return (
    <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Content */}
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-primary-foreground/60 mb-4">
              Since 1978
            </p>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-balance">
              A Legacy Crafted
              <br />
              Over Decades
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
              Immersia was born from a passion for capturing the world&apos;s most evocative scents. 
              For over four decades, we have cultivated relationships with master growers, 
              traditional distillers, and artisan perfumers across the globe.
            </p>
            <p className="mt-4 text-lg text-primary-foreground/80 leading-relaxed">
              Today, we honor that heritage while embracing innovation—bringing immersive 
              technology and sustainable practices to the ancient art of perfumery.
            </p>
            
            <div className="mt-10">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-primary-foreground hover:text-primary-foreground/80 transition-colors group"
              >
                Discover Our Story
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          
          {/* Timeline */}
          <div className="lg:col-span-7">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-primary-foreground/20 hidden sm:block" />
              
              <div className="space-y-12">
                <div className="relative flex gap-8">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-foreground flex items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <span className="font-serif text-2xl">1978</span>
                    <h3 className="mt-2 font-medium text-primary-foreground">The Beginning</h3>
                    <p className="mt-1 text-sm text-primary-foreground/60">
                      Founded in Grasse, France by master perfumer Jean-Pierre Moreau, 
                      with a vision to capture regional terroir in fragrance.
                    </p>
                  </div>
                </div>
                
                <div className="relative flex gap-8">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-foreground flex items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <span className="font-serif text-2xl">1995</span>
                    <h3 className="mt-2 font-medium text-primary-foreground">Global Sourcing Network</h3>
                    <p className="mt-1 text-sm text-primary-foreground/60">
                      Established direct partnerships with growers in Morocco, Japan, 
                      Sicily, and eight other regions.
                    </p>
                  </div>
                </div>
                
                <div className="relative flex gap-8">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-foreground flex items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <span className="font-serif text-2xl">2018</span>
                    <h3 className="mt-2 font-medium text-primary-foreground">Sustainability Commitment</h3>
                    <p className="mt-1 text-sm text-primary-foreground/60">
                      Launched our refillable bottle program and achieved carbon-negative 
                      certification.
                    </p>
                  </div>
                </div>
                
                <div className="relative flex gap-8">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-foreground flex items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <span className="font-serif text-2xl">2024</span>
                    <h3 className="mt-2 font-medium text-primary-foreground">Osmobloom Technology</h3>
                    <p className="mt-1 text-sm text-primary-foreground/60">
                      Introduced VR sensory experiences with synchronized scent-release, 
                      redefining fragrance discovery.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
