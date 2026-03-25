"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

export function Booking() {
  return (
    <section id="booking" className="py-24 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Calendar className="w-16 h-16 text-primary mx-auto mb-8" strokeWidth={1.5} />
        
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
          Book a Session
        </h2>
        
        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
          Start your transformation today. Book a 1:1 coaching session and take the first step 
          toward a life of clarity, strength, and purpose.
        </p>
        
        <Link href="/contact">
          <Button 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 py-6 text-base font-medium transition-all duration-300 hover:scale-105"
          >
            Book Now
          </Button>
        </Link>

        <p className="mt-12 text-muted-foreground text-sm">
          Fill out the contact form and Linda will get back to you to schedule your session.
        </p>
      </div>
    </section>
  )
}
