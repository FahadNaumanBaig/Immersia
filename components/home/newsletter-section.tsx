"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setStatus("success")
    setEmail("")
  }

  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
            Join the Journey
          </p>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-balance">
            Stories, Scents & Secrets
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Subscribe to receive exclusive insights into our sourcing journeys, 
            early access to new collections, and invitations to VR experience events.
          </p>
          
          <form onSubmit={handleSubmit} className="mt-10 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-background border-border"
              disabled={status === "loading" || status === "success"}
            />
            <Button 
              type="submit" 
              disabled={status === "loading" || status === "success"}
              className="group"
            >
              {status === "loading" ? (
                "Subscribing..."
              ) : status === "success" ? (
                "Subscribed!"
              ) : (
                <>
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </Button>
          </form>
          
          <p className="mt-4 text-xs text-muted-foreground">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  )
}
