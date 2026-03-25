import { Leaf, HeartHandshake, Sun, Compass } from "lucide-react"

const services = [
  {
    icon: Leaf,
    title: "Belief Transformation",
    description: "Transform unconscious beliefs with personalized guidance inspired by Neville Goddard and Dr. Joe Dispenza"
  },
  {
    icon: HeartHandshake,
    title: "Emotional Healing",
    description: "Heal emotional wounds and foster love, health, and spiritual awakening"
  },
  {
    icon: Sun,
    title: "Manifestation Mastery",
    description: "Enhance your manifesting abilities through spiritual and mental techniques"
  },
  {
    icon: Compass,
    title: "Spiritual Expansion",
    description: "Expand your awareness and elevate your spiritual journey"
  }
]

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-beige">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-foreground/60 tracking-[0.3em] uppercase text-sm mb-4">What I Offer</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="flex items-start gap-6 group p-6 bg-card hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-beige-light flex items-center justify-center flex-shrink-0">
                <service.icon className="w-7 h-7 text-foreground" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
