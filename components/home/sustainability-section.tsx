import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const commitments = [
  {
    title: "Ethical Sourcing",
    description: "Direct partnerships with growers and artisans ensure fair wages and sustainable harvesting practices across all 12 regions we source from.",
  },
  {
    title: "Zero Waste Packaging",
    description: "Every element of our packaging is recyclable, compostable, or designed for reuse. No single-use plastics. Ever.",
  },
  {
    title: "Carbon Negative",
    description: "We offset 150% of our carbon footprint through reforestation projects in the regions that inspire our fragrances.",
  },
  {
    title: "Biodiversity Protection",
    description: "A portion of every purchase funds conservation efforts to protect endangered botanicals and their ecosystems.",
  },
]

export function SustainabilitySection() {
  return (
    <section id="sustainability" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Content */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
              Our Commitment
            </p>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-balance">
              Luxury That Gives Back
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              True luxury honors its origins. Our commitment to sustainability ensures that the 
              botanicals, communities, and ecosystems that inspire our fragrances thrive for generations.
            </p>
            
            <div className="mt-12 space-y-8">
              {commitments.map((item, index) => (
                <div key={item.title} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <span className="font-serif text-2xl text-primary/40">0{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
              <Link
                href="/about#sustainability"
                className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-foreground hover:text-primary transition-colors group"
              >
                Read Our Full Impact Report
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
                <Image
                  src="/images/sustainability.jpg"
                  alt="Sustainable botanical gardens"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative aspect-square rounded-sm overflow-hidden bg-primary">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-primary-foreground p-6 text-center">
                  <span className="font-serif text-5xl">150%</span>
                  <span className="mt-2 text-xs uppercase tracking-wider">Carbon Offset</span>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                <Image
                  src="/images/heritage-atelier.jpg"
                  alt="Traditional perfumery atelier"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
