import Image from "next/image"
import { Check } from "lucide-react"

const benefits = [
  "Establish and act toward achieving goals",
  "Increased level of engagement",
  "Safe Place to Gain Perspective",
  "Deeper Level of Learning",
  "Build Personal Awareness",
  "Boost your networking opportunities"
]

export function Philosophy() {
  return (
    <section id="philosophy" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Life Coaching Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-32">
          {/* Text Content */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
              Life Coaching
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Transform subconscious beliefs and unlock your potential using proven techniques 
                inspired by Neville Goddard and Dr. Joe Dispenza. Personal guidance to love, 
                health, and spiritual growth.
              </p>
              <p>
                Discover how powerful your thoughts are and learn to reprogram unconscious beliefs 
                for a life of love, health, and spiritual growth. True transformation is not about 
                time, it&apos;s about intention and commitment to change.
              </p>
            </div>
          </div>
          
          {/* Benefits Box */}
          <div className="bg-beige-light p-8 md:p-10">
            <h3 className="font-serif text-xl font-bold text-foreground mb-6 border-b border-foreground/20 pb-4">
              Benefits of Coaching for Individuals
            </h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-foreground mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-muted-foreground italic">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Work-Life Balance Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image with decorative elements */}
          <div className="relative order-2 lg:order-1">
            {/* Beige background box */}
            <div className="absolute top-6 left-6 w-full h-full bg-card z-0 shadow-lg" />
            
            <div className="relative z-10">
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/hourglass.jpg"
                  alt="Work-life balance - person relaxing"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Text overlay box */}
              <div className="bg-card p-8 md:p-10 -mt-20 mx-6 relative z-20 shadow-lg">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Work-life Balance
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Learn to balance your professional ambitions with personal well-being. 
                  Create space for what truly matters while achieving your goals.
                </p>
                <button className="border border-foreground text-foreground px-6 py-3 text-sm tracking-widest uppercase hover:bg-foreground hover:text-background transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          
          {/* Decorative pattern */}
          <div className="hidden lg:flex order-1 lg:order-2 items-center justify-center">
            <div className="relative">
              {/* Striped circle pattern */}
              <div className="w-40 h-40 rounded-full border-2 border-foreground/20 relative overflow-hidden">
                {[...Array(12)].map((_, i) => (
                  <div 
                    key={i} 
                    className="absolute w-full h-0.5 bg-foreground/30"
                    style={{ 
                      top: `${(i + 1) * 8}%`,
                      transform: 'rotate(-45deg)',
                      transformOrigin: 'center'
                    }}
                  />
                ))}
              </div>
              
              {/* Beige circle */}
              <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-beige" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
