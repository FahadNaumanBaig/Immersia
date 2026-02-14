import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Leaf, Sparkles, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Story | Immersia Heritage Fragrance House",
  description: "Discover the legacy of Immersia - four decades of crafting region-inspired perfumes through ethical sourcing, master craftsmanship, and innovative technology.",
  openGraph: {
    title: "Our Story | Immersia Heritage Fragrance House",
    description: "Four decades of heritage perfumery, multicultural sourcing, and innovative technology.",
  },
}

const values = [
  {
    icon: Globe,
    title: "Multicultural Sourcing",
    description: "Direct partnerships with growers and artisans across 12 regions, ensuring authenticity and fair trade in every ingredient.",
  },
  {
    icon: Sparkles,
    title: "Master Craftsmanship",
    description: "Each fragrance is composed by master perfumers trained in the traditional French art, blending heritage techniques with modern innovation.",
  },
  {
    icon: Leaf,
    title: "Sustainable Practice",
    description: "Carbon-negative operations, refillable bottles, and biodiversity protection programs that honor the earth that gives us our ingredients.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "We invest in the communities that cultivate our botanicals, supporting education, healthcare, and sustainable farming initiatives.",
  },
]

const regions = [
  { name: "Morocco", specialty: "Saffron, Rose, Argan" },
  { name: "Japan", specialty: "Hinoki, Yuzu, Green Tea" },
  { name: "Sicily", specialty: "Lemon, Neroli, Fig" },
  { name: "India", specialty: "Sandalwood, Jasmine, Tuberose" },
  { name: "Madagascar", specialty: "Vanilla, Ylang-Ylang, Vetiver" },
  { name: "Grasse, France", specialty: "Lavender, Mimosa, Rose" },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 lg:py-32 bg-secondary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
                  Our Story
                </p>
                <h1 className="font-serif text-5xl md:text-6xl tracking-tight text-balance">
                  Crafting Scent,
                  <br />
                  Preserving Heritage
                </h1>
                <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
                  For over four decades, Immersia has journeyed across continents to capture 
                  the world&apos;s most evocative scents. What began as one perfumer&apos;s passion 
                  has evolved into a global house dedicated to preserving olfactory traditions 
                  while pioneering new ways to experience fragrance.
                </p>
              </div>
              <div className="relative">
                <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
                  <Image
                    src="/images/about-founder.jpg"
                    alt="Immersia founder Jean-Pierre Moreau in the atelier"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-sm max-w-[200px]">
                  <p className="font-serif text-3xl">1978</p>
                  <p className="text-xs uppercase tracking-wider mt-1">Year Founded</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-center text-balance">
                A Legacy Built on Passion
              </h2>
              <div className="mt-12 space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  In 1978, Jean-Pierre Moreau left his position at a prestigious Parisian perfume 
                  house with a radical vision: to create fragrances that told the complete story 
                  of a place—its soil, its people, its botanical treasures.
                </p>
                <p>
                  He traveled to Morocco, where he spent months in the saffron fields of Taliouine, 
                  learning the ancient harvesting techniques from local farmers. He visited the 
                  cedar forests of the Atlas Mountains, the rose gardens of Kelaat M&apos;Gouna, and 
                  the bustling souks of Marrakech.
                </p>
                <p>
                  From these journeys emerged Immersia&apos;s first fragrance: <em>Souk d&apos;Or</em>, a scent 
                  that captured not just the notes of saffron and amber, but the very essence of 
                  Moroccan culture. It was revolutionary—perfumery as cultural preservation.
                </p>
                <p>
                  Today, Immersia continues Jean-Pierre&apos;s mission, honoring his legacy while 
                  embracing innovation. Our VR experiences allow customers to walk the same 
                  paths he walked, to understand the origins of each precious ingredient before 
                  discovering their perfect scent.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sourcing Section */}
        <section className="py-24 lg:py-32 bg-foreground text-primary-foreground">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                  <Image
                    src="/images/about-sourcing.jpg"
                    alt="Jasmine harvesting at dawn"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-primary-foreground/60 mb-4">
                  Multicultural Sourcing
                </p>
                <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-balance">
                  From Field to Flacon
                </h2>
                <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
                  Our sourcing network spans 12 regions across five continents. We work directly 
                  with farming families and cooperatives, many of whom have supplied Immersia 
                  for three generations.
                </p>
                <p className="mt-4 text-lg text-primary-foreground/80 leading-relaxed">
                  These relationships ensure not only the finest ingredients but also fair 
                  compensation, sustainable farming practices, and the preservation of 
                  traditional cultivation methods.
                </p>
                
                <div className="mt-10 grid grid-cols-2 gap-4">
                  {regions.map((region) => (
                    <div key={region.name} className="border-l border-primary-foreground/20 pl-4">
                      <h3 className="font-medium text-primary-foreground">{region.name}</h3>
                      <p className="text-sm text-primary-foreground/60">{region.specialty}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
                  Innovation & Technology
                </p>
                <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-balance">
                  Heritage Meets
                  <br />
                  Innovation
                </h2>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  While we honor traditional perfumery techniques, we embrace technology 
                  that enhances the fragrance experience. Our state-of-the-art laboratory 
                  in Grasse combines centuries-old extraction methods with modern precision.
                </p>
                <div className="mt-10 space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-serif text-lg text-primary">01</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Osmobloom Technology</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Our proprietary scent-release system synchronizes with VR experiences, 
                        delivering precise fragrance notes at the perfect moment.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-serif text-lg text-primary">02</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">AI-Assisted Blending</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Machine learning helps our perfumers predict how natural ingredients 
                        will interact, reducing waste and accelerating development.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-serif text-lg text-primary">03</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Molecular Preservation</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Advanced encapsulation technology ensures fragrance longevity while 
                        maintaining the purity of natural ingredients.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative aspect-square rounded-sm overflow-hidden">
                  <Image
                    src="/images/about-lab.jpg"
                    alt="Immersia modern laboratory in Grasse"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-full h-full border border-border rounded-sm -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 lg:py-32 bg-secondary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
                Our Values
              </p>
              <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-balance">
                What We Stand For
              </h2>
            </div>
            
            <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl text-foreground">{value.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-balance">
              Begin Your Journey
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Visit our boutiques to experience the full Immersia story. Explore our 
              collections through VR, meet our fragrance consultants, and discover 
              your perfect scent.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button variant="secondary" size="lg" className="group">
                Find a Boutique
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Link href="/team">
                <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
                  Meet the Team
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
