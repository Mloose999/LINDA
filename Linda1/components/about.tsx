import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/coach.jpg"
                alt="Linda Holtkamp - Mindset Coach"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full -z-10" />
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-beige-light rounded-full -z-10" />
          </div>

          {/* Content */}
          <div>
            <p className="text-primary font-medium tracking-wide mb-4 uppercase text-sm">My Story</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About Me
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                In my mid-30s, my life changed completely from one day to the next. The life I had known, 
                the structure I was used to, and the sense of security I relied on - all of it suddenly disappeared. 
                I found myself alone, left only with myself and a quiet inner knowing that there had to be more to 
                life than what I had been living.
              </p>
              
              <p className="font-serif text-xl text-foreground font-medium">
                Giving up was never an option.
              </p>
              
              <p>
                So I did something I had avoided for a long time - I began to truly work on myself. I started 
                getting to know who I really was - not the version of me that functioned for others, not the 
                person who constantly adapted to meet expectations, but my authentic self.
              </p>
              
              <p>
                This transformation is what led me to become a life and motivation coach. I now help people 
                break free from patterns of lack and step into a life of abundance - in love, in health, and in wealth.
              </p>
            </div>

            <div className="mt-8 p-6 bg-primary/5 rounded-xl border-l-4 border-primary">
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
