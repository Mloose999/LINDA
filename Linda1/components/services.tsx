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
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4">What I Offer</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground">
            Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="flex items-start gap-6 group"
            >
              <service.icon className="flex-shrink-0 w-12 h-12 text-accent group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
              <div className="pt-1">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
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
