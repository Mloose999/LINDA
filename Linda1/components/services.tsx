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
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wide mb-4 uppercase text-sm">What I Offer</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Personalized coaching designed to guide you through transformation in every area of your life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
