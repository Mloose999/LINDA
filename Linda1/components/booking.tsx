"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Booking() {
  return (
    <section id="booking" className="py-24 md:py-32 bg-beige-light">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image with decorative elements */}
          <div className="relative">
            {/* Beige background box */}
            <div className="absolute -top-6 -left-6 w-full h-full bg-beige z-0" />
            
            <div className="relative z-10 aspect-square overflow-hidden">
              <Image
                src="/images/book.jpg"
                alt="Book a coaching session"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Decorative circle */}
            <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-card z-0" />
          </div>
          
          {/* Text Content */}
          <div className="lg:pl-8">
            <p className="text-muted-foreground tracking-[0.3em] uppercase text-sm mb-4">Get Started</p>
            
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Book a Session
            </h2>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              Start your transformation today. Book a 1:1 coaching session and take the first step 
              toward a life of clarity, strength, and purpose. Fill out the contact form and Linda 
              will get back to you to schedule your session.
            </p>
            
            <Link href="/contact">
              <Button 
                variant="outline"
                className="border-foreground text-foreground hover:bg-foreground hover:text-background px-10 py-6 text-sm tracking-widest uppercase transition-all duration-300"
              >
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
