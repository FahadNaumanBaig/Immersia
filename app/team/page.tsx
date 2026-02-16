import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Linkedin } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Team | Immersia Heritage Fragrance House",
  description:
    "Meet the passionate artisans, scientists, and visionaries behind Immersia fragrances. Our team brings decades of expertise in perfumery, sustainability, and innovation.",
  openGraph: {
    title: "Our Team | Immersia Heritage Fragrance House",
    description:
      "Meet the artisans, scientists, and visionaries behind Immersia fragrances.",
  },
}

const teamMembers = [
  {
    name: "Jankar Onkar Rajesh",
    prn: "25020341105",
    role: "Fragrance Innovation Lead",
    image: "/images/team/Onkar.jpg",
    linkedin: "https://www.linkedin.com/in/onkar-jankar/",
    bio: "Jankar brings fresh perspectives to fragrance development, combining technical expertise with creative sensibility to push the boundaries of olfactory innovation.",
  },
  {
    name: "Mirza Fahad Nauman Baig",
    prn: "25020341114",
    role: "Head of Strategic Sourcing",
    image: "/images/team/Fahad.jpg",
    linkedin: "https://www.linkedin.com/in/fahadnaumanbaig/",
    bio: "Fahad specializes in establishing ethical partnerships with ingredient suppliers across multiple continents, ensuring quality and fair trade practices.",
  },
  {
    name: "Moazzam Farooque",
    prn: "25020341115",
    role: "Chief Sustainability Strategist",
    image: "/images/team/Moazzam.png",
    linkedin: "https://www.linkedin.com/in/moazzam-farooque-590a821b6/",
    bio: "Moazzam develops and implements comprehensive sustainability initiatives across our entire supply chain, from sourcing to packaging and delivery.",
  },
  {
    name: "Rashi Gupta",
    prn: "25020341127",
    role: "Global Marketing Manager",
    image: "/images/team/Rashi.jpg",
    linkedin: "https://www.linkedin.com/in/rashi-gupta-156849226/",
    bio: "Rashi crafts compelling brand narratives that celebrate cultural authenticity and connect global audiences to the heritage behind every fragrance.",
  },
  {
    name: "Yash Purulia",
    prn: "25020341156",
    role: "Technology Integration Specialist",
    image: "/images/team/Yash.jpg",
    linkedin: "https://www.linkedin.com/in/yashpurulia/",
    bio: "Yash develops and maintains the technology infrastructure that powers our Osmobloom VR experiences and digital customer platforms.",
  },
  {
    name: "Sanya Kamra",
    prn: "25020341214",
    role: "Olfactory Content Curator",
    image: "/images/team/SanyaK.jpg",
    linkedin: "https://www.linkedin.com/in/sanya-kamra22/",
    bio: "Sanya creates immersive storytelling experiences that educate customers about fragrance origins, composition techniques, and the artistry behind each scent.",
  },
  {
    name: "Sanya Sharma",
    prn: "25020341215",
    role: "Regional Fragrance Specialist",
    image: "/images/team/SanyaS.jpg",
    linkedin: "https://www.linkedin.com/in/sanyasharma1234/",
    bio: "Sanya specializes in developing region-specific fragrance profiles that authentically capture the essence and character of distinct cultures and landscapes.",
  },
  {
    name: "Sia Surinder Chhabra",
    prn: "25020341220",
    role: "Customer Experience Designer",
    image: "/images/team/Sia.jpg",
    linkedin: "https://www.linkedin.com/in/sia-chhabra-161776238/",
    bio: "Sia designs every touchpoint of the Immersia customer journey, from boutique layouts to VR experiences, ensuring beauty and functionality at each interaction.",
  },
  {
  name: "Harshit Sharma",
  prn: "25020341250",
  role: "Digital Growth & SEO Lead",
  image: "/images/team/Harshit.jpg",
  linkedin: "https://www.linkedin.com/in/harshit-sharma-26b55b222/",
  bio: "Harshit leads digital growth initiatives at Immersia, driving SEO strategy, backlink development, and performance marketing.",
},

]

export default function TeamPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 lg:py-32 bg-secondary">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
                Our Team
              </p>
              <h1 className="font-serif text-5xl md:text-6xl tracking-tight text-balance">
                The Artisans Behind
                <br />
                the Scent
              </h1>
              <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
                Meet the passionate individuals who bring Immersia fragrances to life.
                From master perfumers trained in centuries-old techniques to innovators
                pushing the boundaries of sensory technology, our team is united by a
                love for scent and a commitment to excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {teamMembers.map((member) => (
                <article key={member.name} className="group">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-muted">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={`${member.name}, ${member.role} at Immersia`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Overlay with LinkedIn */}
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300 flex items-end justify-end p-4">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background rounded-full p-2 hover:bg-primary hover:text-primary-foreground"
                        aria-label={`Connect with ${member.name} on LinkedIn`}
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h2 className="font-serif text-xl text-foreground">
                      {member.name}
                    </h2>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      PRN: {member.prn}
                    </p>
                    <p className="text-sm text-primary mt-2">{member.role}</p>
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-balance">
              Join Our Team
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              We&apos;re always looking for passionate individuals who share our love of
              fragrance, sustainability, and innovation. Explore career opportunities
              at Immersia.
            </p>
            <div className="mt-10">
              <Link
                href="/careers"
                className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium uppercase tracking-widest bg-primary-foreground text-primary rounded-sm hover:bg-primary-foreground/90 transition-colors"
              >
                View Open Positions
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
