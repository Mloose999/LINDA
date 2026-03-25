"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section id="newsletter" className="py-24 md:py-32 bg-primary/5">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Mail className="w-8 h-8 text-primary" />
        </div>
        
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
          Stay Connected
        </h2>
        
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          Join the newsletter and receive insights, inspiration, and tools to strengthen your mindset 
          and elevate your life.
        </p>

        {isSubmitted ? (
          <div className="bg-primary/10 rounded-xl p-6">
            <p className="text-primary font-medium">
              Thank you for subscribing! Check your inbox for a confirmation.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-12 px-6 bg-background border-border"
            />
            <Button 
              type="submit"
              className="h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Subscribe
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
