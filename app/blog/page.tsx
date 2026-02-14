// app/blog/page.tsx

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { blogPosts } from "@/lib/blog-data";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal | Immersia",
  description:
    "Explore the world of fine fragrance through stories of heritage, craftsmanship, and innovation. Discover the art and science behind Immersia perfumes.",
  keywords: [
    "perfume blog",
    "fragrance journal",
    "luxury perfume articles",
    "perfumery craftsmanship",
    "sustainable fragrance",
  ],
};

// simple date formatter for UI
const formatDate = (dateStr: string) =>
  new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1);

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
            The Immersia Journal
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6 text-balance">
            Stories of Scent
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explorations in heritage, craftsmanship, and the endless pursuit of
            olfactory excellence.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <Link href={`/blog/${featuredPost.slug}`} className="group block">
            <div className="relative aspect-[21/9] overflow-hidden rounded-lg mb-8">
              <Image
                src={featuredPost.image || "/placeholder.svg"}
                alt={featuredPost.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
                <span className="inline-block px-3 py-1 bg-primary/90 text-primary-foreground text-xs tracking-wider uppercase rounded-full mb-4">
                  Featured
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white mb-4 max-w-3xl text-balance">
                  {featuredPost.title}
                </h2>
                <p className="text-white/80 max-w-2xl mb-4 text-pretty">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-white/60 text-sm">
                  <span>{featuredPost.author}</span>
                  <span>•</span>
                  <span>{formatDate(featuredPost.publishedAt)}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "All",
              "Heritage",
              "Craftsmanship",
              "Innovation",
              "Sustainability",
              "Culture",
            ].map((category) => (
              <button
                key={category}
                type="button"
                className={`px-4 py-2 text-sm tracking-wider transition-colors rounded-full ${
                  category === "All"
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <article key={post.slug} className="group">
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-5">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="uppercase tracking-wider">
                        {post.category}
                      </span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors text-balance">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{formatDate(post.publishedAt)}</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-3xl mx-auto text-center bg-card rounded-2xl p-12 border border-border">
          <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-4">
            Subscribe to Our Journal
          </h2>
          <p className="text-muted-foreground mb-8">
            Receive stories of heritage, craftsmanship, and olfactory
            exploration delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
