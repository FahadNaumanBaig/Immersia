import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export function VRExperienceSection() {
  return (
    <section id="experiences" className="py-24 lg:py-32 bg-foreground text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <p className="text-xs uppercase tracking-[0.3em] text-primary-foreground/60 mb-4">
              Immersive Technology
            </p>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-balance">
              Experience Before
              <br />
              You Discover
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/70 leading-relaxed">
              Our proprietary VR sensory experiences transport you to the origins of each fragrance. 
              Walk through Moroccan souks, meditate in Kyoto temples, or wander Sicilian groves 
              before choosing your signature scent.
            </p>
            
            <div className="mt-10 space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <span className="font-serif text-lg">01</span>
                </div>
                <div>
                  <h3 className="font-medium text-primary-foreground">Virtual Origin Tours</h3>
                  <p className="mt-1 text-sm text-primary-foreground/60">
                    Visit the exact locations where our ingredients are sourced
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <span className="font-serif text-lg">02</span>
                </div>
                <div>
                  <h3 className="font-medium text-primary-foreground">Scent Visualization</h3>
                  <p className="mt-1 text-sm text-primary-foreground/60">
                    See fragrance notes come to life in immersive 3D environments
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <span className="font-serif text-lg">03</span>
                </div>
                <div>
                  <h3 className="font-medium text-primary-foreground">Osmobloom Technology</h3>
                  <p className="mt-1 text-sm text-primary-foreground/60">
                    Synchronized scent-release pairs visual with olfactory experience
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <Button variant="secondary" size="lg" className="group">
                <Play className="mr-2 h-4 w-4" />
                Book VR Experience
              </Button>
            </div>
          </div>
          
          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
              <Image
                src="/images/vr-experience.jpg"
                alt="VR fragrance experience at Immersia boutique"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -top-4 -right-4 w-full h-full border border-primary-foreground/20 rounded-sm -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
