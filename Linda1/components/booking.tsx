"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Booking() {
  return (
    <section id="booking" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/book.jpg"
                alt="Book a coaching session"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-primary/10 rounded-full -z-10" />
          </div>
          
          {/* Content */}
          <div className="lg:pl-8">
            <p className="text-primary font-medium tracking-wide mb-4 uppercase text-sm">Get Started</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Book a Session
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Start your transformation today. Book a 1:1 coaching session and take the first step 
              toward a life of clarity, strength, and purpose. Fill out the contact form and Linda 
              will get back to you to schedule your session.
            </p>
            
            <Link href="/contact">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base"
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
