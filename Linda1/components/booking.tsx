"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

export function Booking() {
  return (
    <section id="booking" className="py-24 md:py-32 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative">
          {/* Book Image */}
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9]">
            <Image
              src="/images/book.jpg"
              alt="Book a coaching session"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
          
          {/* Text Box overlapping the image */}
          <div className="relative md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/3 w-full md:w-[80%] lg:w-[70%] mt-[-3rem] md:mt-0">
            <div className="bg-[#f5f5f3] rounded-2xl p-8 md:p-12 text-center shadow-lg">
              <Calendar className="w-12 h-12 text-accent mx-auto mb-6" strokeWidth={1.5} />
              
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-extrabold text-foreground mb-4">
                Book a Session
              </h2>
              
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-8">
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

              <p className="mt-8 text-muted-foreground text-sm">
                Fill out the contact form and Linda will get back to you to schedule your session.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
