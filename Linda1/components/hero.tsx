"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  const scrollToPhilosophy = () => {
    document.getElementById("philosophy")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-beige-light/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="relative z-10 order-2 lg:order-1">
            <p className="text-primary font-medium tracking-wide mb-4 uppercase text-sm">Life & Mindset Coaching</p>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Discover Your True Self &{" "}
              <span className="text-primary">Transform Your Life</span>
            </h1>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">
              Transform subconscious beliefs and unlock your potential using proven techniques 
              inspired by Neville Goddard and Dr. Joe Dispenza. Personal guidance to love, 
              health, and spiritual growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToPhilosophy}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base"
              >
                Begin Your Journey
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-base"
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative order-1 lg:order-2">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/coach.jpg"
                alt="Linda Holtkamp - Life Coach"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-beige-light rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
