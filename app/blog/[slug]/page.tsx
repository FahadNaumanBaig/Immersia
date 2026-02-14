// app/blog/[slug]/page.tsx

import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import {
  getBlogPost,
  getAllBlogSlugs,
  getRelatedPosts,
  type BlogPost,
  type BlogContent,
} from "@/lib/blog-data"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

// ------- Metadata -------

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getBlogPost(params.slug)

  if (!post) {
    return {
      title: "Post not found | Immersia Journal",
      description: "The requested article could not be found.",
    }
  }

  return {
    title: `${post.title} | Immersia Journal`,
    description: post.metaDescription ?? post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: post.image ? [post.image] : [],
    },
  }
}

// ------- Static params -------

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }))
}

// ------- Block renderer -------

function renderBlock(block: BlogContent, index: number) {
  const isFirst = index === 0

  switch (block.type) {
    case "paragraph":
      return (
        <p
          key={index}
          className={`${
            isFirst ? "mt-0" : "mt-4"
          } text-[15px] leading-relaxed text-muted-foreground`}
        >
          {block.content}
        </p>
      )

    case "heading2":
      return (
        <h2
          key={index}
          className="mt-8 mb-3 font-serif text-xl font-semibold text-foreground"
        >
          {block.content}
        </h2>
      )

    case "heading3":
      return (
        <h3
          key={index}
          className="mt-6 mb-2 font-serif text-base font-semibold text-foreground"
        >
          {block.content}
        </h3>
      )

    case "quote":
      return (
        <blockquote
          key={index}
          className="mt-6 border-l-2 border-primary/40 pl-4 text-[15px] leading-relaxed italic text-muted-foreground"
        >
          {block.content}
        </blockquote>
      )

    case "list":
      return (
        <ul
          key={index}
          className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-muted-foreground"
        >
          {block.content.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )

    case "image":
      // inline image block with optional link + caption
      return (
        <figure
          key={index}
          className="mt-8 mb-2 overflow-hidden rounded-2xl border border-border bg-muted"
        >
          {block.href ? (
            <Link href={block.href}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={block.src}
                alt={block.alt}
                className="h-auto w-full object-cover transition hover:opacity-90"
              />
            </Link>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={block.src}
              alt={block.alt}
              className="h-auto w-full object-cover"
            />
          )}

          {block.caption && (
            <figcaption className="px-4 py-3 text-xs text-muted-foreground">
              {block.caption}
            </figcaption>
          )}
        </figure>
      )

    default:
      return null
  }
}

// ------- Page -------

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts: BlogPost[] = getRelatedPosts(post.slug, 3)

  return (
    <main className="min-h-screen bg-background">
      <article className="mx-auto max-w-3xl px-4 pb-16 pt-10 sm:px-6 lg:px-0 lg:pt-14">
        {/* Eyebrow / Back link */}
        <div className="mb-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            <span className="h-px w-8 bg-muted-foreground/40" />
            <span>Immersia Journal</span>
          </div>
          <Link
            href="/blog"
            className="text-xs font-medium text-muted-foreground hover:text-foreground"
          >
            ← All articles
          </Link>
        </div>

        {/* Category / Date / ReadTime */}
        <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span className="rounded-full bg-muted px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]">
            {post.category}
          </span>
          <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
          <span>{post.publishedAt}</span>
          <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
          <span>{post.readTime}</span>
        </div>

        {/* Title */}
        <h1 className="font-serif text-2xl text-foreground sm:text-3xl lg:text-4xl">
          {post.title}
        </h1>

        {/* Excerpt */}
        <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground sm:text-[16px]">
          {post.excerpt}
        </p>

        {/* Author */}
        <div className="mt-6 flex items-center gap-4 border-b border-border pb-6">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-foreground">
              {post.author}
            </span>
            <span className="text-xs text-muted-foreground">
              {post.authorRole}
            </span>
          </div>
        </div>

        {/* Hero image */}
        {post.image && (
          <div className="mt-8 overflow-hidden rounded-3xl border border-border bg-muted">
            <div className="relative h-64 w-full sm:h-72 lg:h-80">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 768px, 100vw"
              />
            </div>
          </div>
        )}

        {/* Body */}
        <div className="mt-10">
          {post.content.map(renderBlock)}
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-2 border-t border-border pt-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-muted px-3 py-1 text-[11px] text-muted-foreground"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-12 border-t border-border pt-8">
            <h2 className="mb-4 font-serif text-lg text-foreground">
              Related articles
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card/60 p-4 text-sm shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    {related.category}
                  </p>
                  <h3 className="mt-2 line-clamp-2 font-serif text-base text-foreground">
                    {related.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-xs text-muted-foreground">
                    {related.excerpt}
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-[11px] text-muted-foreground">
                    <span>{related.author}</span>
                    <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
                    <span>{related.readTime}</span>
                  </div>
                  <span className="mt-3 inline-flex text-[11px] font-semibold text-primary">
                    Read next →
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </main>
  )
}
