import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-muted-foreground tracking-[0.3em] uppercase text-sm mb-4">My Story</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Image with decorative elements */}
          <div className="relative">
            {/* Beige decorative box */}
            <div className="absolute -top-6 -left-6 w-full h-full bg-beige z-0" />
            
            {/* Main image */}
            <div className="aspect-[4/5] overflow-hidden w-full relative z-10">
              <Image
                src="/images/coach.jpg"
                alt="Linda Holtkamp - Mindset Coach"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Decorative circle */}
            <div className="absolute -bottom-8 -right-8 w-28 h-28 rounded-full bg-beige-light z-0" />
          </div>

          {/* Text Content */}
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              In my mid-30s, my life changed completely from one day to the next. The life I had known, 
              the structure I was used to, and the sense of security I relied on - all of it suddenly disappeared. 
              I found myself alone, left only with myself and a quiet inner knowing that there had to be more to 
              life than what I had been living.
            </p>
            
            <p className="font-serif text-xl text-foreground font-medium border-l-2 border-foreground/30 pl-6">
              Giving up was never an option.
            </p>
            
            <p>
              So I did something I had avoided for a long time - I began to truly work on myself. I started 
              getting to know who I really was - not the version of me that functioned for others, not the 
              person who constantly adapted to meet expectations, but my authentic self.
            </p>
            
            <p>
              This journey was not easy. It was filled with doubts, emotional challenges, and moments where 
              I questioned everything. But it was exactly in those moments that I discovered my greatest 
              strength and began to rebuild my life from within.
            </p>
            
            <p>
              Today, I am no longer the person who lived just to function and fit in. Today, I live freely - 
              step by step - guided by my own values, dreams, and desires.
            </p>
            
            <p>
              This transformation is what led me to become a life and motivation coach. I now help people 
              break free from patterns of lack and step into a life of abundance - in love, in health, and in wealth.
            </p>
            
            <div className="pt-4">
              <p className="font-serif text-lg text-foreground italic">
                My mission is to guide others through this journey - to help them move from survival to self-trust, 
                from fear to clarity, and from limitation to a life they consciously choose and create.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
