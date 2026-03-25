"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  const scrollToPhilosophy = () => {
    document.getElementById("philosophy")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-beige/50 hidden lg:block" />
      <div className="absolute bottom-40 right-40 w-20 h-20 rounded-full bg-beige hidden lg:block" />
      
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative order-1 lg:order-1">
            {/* Beige background box - offset */}
            <div className="absolute -top-6 -left-6 w-full h-full bg-beige z-0" />
            
            <div className="relative z-10 aspect-[4/5] overflow-hidden">
              <Image
                src="/images/coach.jpg"
                alt="Linda Holtkamp - Life Coach"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            
            {/* Small decorative circle */}
            <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-beige-light z-0" />
          </div>

          {/* Content Side */}
          <div className="order-2 lg:order-2 text-center lg:text-left">
            <p className="text-muted-foreground tracking-[0.3em] uppercase text-sm mb-6">Life Coaching</p>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              WHAT IS A<br />
              <span className="text-foreground">LIFE COACH?</span>
            </h1>
            
            <p className="text-muted-foreground tracking-[0.2em] uppercase text-sm mb-4">
              We help you cultivate creativity
            </p>
            
            <p className="text-muted-foreground/60 text-sm italic mb-8">
              Change Your Life with Linda
            </p>

            <Button 
              onClick={scrollToPhilosophy}
              variant="outline"
              className="border-foreground text-foreground hover:bg-foreground hover:text-background px-8 py-6 text-sm tracking-widest uppercase transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
