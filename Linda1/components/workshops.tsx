import Image from "next/image"
import { Brain, Flame, Sparkles, Heart, Users, Check } from "lucide-react"

const workshops = [
  {
    icon: Brain,
    title: "Understanding Yourself & Regulating Your Nervous System",
    description: "Learn to understand your inner world and develop tools to regulate your nervous system for greater calm and clarity."
  },
  {
    icon: Flame,
    title: "Transforming Fears & Limiting Beliefs",
    description: "Identify and release the fears and beliefs that have been holding you back from living your fullest life."
  },
  {
    icon: Sparkles,
    title: "Creating a New Life from a New Energy",
    description: "Step into a new vibration and learn to create your reality from a place of empowerment and possibility."
  },
  {
    icon: Heart,
    title: "From Insecurity to a Healthy Relationship",
    description: "Build confidence and learn the foundations of creating and maintaining healthy, fulfilling relationships."
  }
]

const workshopStructure = [
  {
    step: "01",
    title: "Introduction & Self-Reflection",
    description: "Each topic begins with a clear explanation and a self-assessment to help you understand where you currently stand."
  },
  {
    step: "02",
    title: "Content & Practical Exercises",
    description: "You will receive reading material, tools, and exercises for each topic, along with practical ways to apply what you learn."
  },
  {
    step: "03",
    title: "Integration & Application",
    description: "Follow-up exercises and self-tests help you integrate the lessons into your everyday routines and see real progress."
  }
]

export function Workshops() {
  return (
    <section id="workshops" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wide mb-4 uppercase text-sm">Transformation Journey</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Workshops & Programs
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            All workshops can be booked individually, so you can start exactly where you feel you need the most support.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative mb-20 rounded-2xl overflow-hidden">
          <div className="aspect-[21/9]">
            <Image
              src="/images/workshop.jpg"
              alt="Personal transformation workshop"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 via-secondary/50 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="px-8 md:px-12 max-w-xl">
              <p className="text-white font-serif text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                Your journey to transformation starts here
              </p>
            </div>
          </div>
        </div>

        {/* Workshop Structure */}
        <div className="mb-24">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-12 text-center">
            How Each Workshop Works
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {workshopStructure.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">{item.step}</span>
                </div>
                <h4 className="font-serif text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Individual Workshops */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
              Individual Workshops
            </h3>
            <p className="text-primary font-bold text-xl">29 € per workshop</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {workshops.map((workshop, index) => (
              <div 
                key={index} 
                className="group p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <workshop.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-foreground mb-2">
                      {workshop.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {workshop.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Complete Program Package */}
        <div className="mb-24">
          <div className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center border border-primary/20">
            <p className="text-primary font-medium tracking-wide mb-4 uppercase text-sm">Complete Package</p>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Full Transformation Program
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Experience the complete transformation process with all four workshops combined. 
              A structured, step-by-step journey from inner healing to building confident, healthy relationships.
            </p>
            
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="text-muted-foreground line-through text-xl">116 €</span>
              <span className="text-primary font-bold text-4xl md:text-5xl">99 €</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 text-muted-foreground">
              {["All 4 workshops included", "Structured journey", "Save 17 €"].map((item, i) => (
                <span key={i} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 1:1 Coaching */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Users className="w-8 h-8 text-primary" />
          </div>
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
            1:1 Coaching
          </h3>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            For personalized guidance in urgent or complex situations, I offer individual coaching sessions. 
            Work directly on your specific blockages, fears, or emotional patterns in a safe, private space.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Live Sessions", "Email Coaching", "Phone / WhatsApp"].map((format, i) => (
              <span key={i} className="text-sm text-primary bg-primary/10 px-4 py-2 rounded-full">
                {format}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
