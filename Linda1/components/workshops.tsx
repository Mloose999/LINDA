import Image from "next/image"
import { Brain, Flame, Sparkles, Heart, Users, Check, ArrowRight } from "lucide-react"

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
        <div className="text-center mb-20">
          <p className="text-muted-foreground tracking-[0.3em] uppercase text-sm mb-4">Transformation Journey</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Workshops & Programs
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            All workshops can be booked individually, so you can start exactly where you feel you need the most support.
          </p>
        </div>

        {/* Hero Image with Overlay */}
        <div className="relative mb-24">
          {/* Beige background box */}
          <div className="absolute top-6 left-6 w-full h-full bg-beige z-0" />
          
          <div className="relative overflow-hidden aspect-[21/9] z-10">
            <Image
              src="/images/workshop.jpg"
              alt="Personal transformation workshop"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/30 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="px-8 md:px-12 max-w-xl">
                <p className="text-card font-serif text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                  Your journey to transformation starts here
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Workshop Structure */}
        <div className="mb-28">
          <div className="text-center mb-16">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
              How Each Workshop Works
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg max-w-2xl mx-auto">
              Each workshop is carefully designed with a proven structure that guides you from understanding to lasting change.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {workshopStructure.map((item, index) => (
              <div key={index} className="relative text-center group">
                <div className="w-14 h-14 bg-beige text-foreground flex items-center justify-center font-serif font-bold text-lg mx-auto mb-6 group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                  {item.step}
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
        <div className="mb-28">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                Individual Workshops
              </h3>
              <p className="text-muted-foreground mt-2">Choose the topics that resonate with you most</p>
            </div>
            <p className="font-serif text-2xl font-bold text-foreground">29 € <span className="text-base font-normal text-muted-foreground">per workshop</span></p>
          </div>
          
          <div className="space-y-4">
            {workshops.map((workshop, index) => (
              <div 
                key={index} 
                className="group flex items-start gap-6 p-6 bg-card hover:bg-beige-light transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-beige flex items-center justify-center">
                  <workshop.icon className="w-6 h-6 text-foreground" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h4 className="font-serif text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-foreground transition-colors duration-300">
                    {workshop.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {workshop.description}
                  </p>
                </div>
                <ArrowRight className="hidden md:block w-5 h-5 text-muted-foreground/30 group-hover:text-foreground group-hover:translate-x-1 transition-all duration-300 mt-3" />
              </div>
            ))}
          </div>
        </div>

        {/* Complete Program Package */}
        <div className="mb-28">
          <div className="bg-beige p-10 md:p-14 text-center">
            <p className="text-foreground/60 tracking-[0.3em] uppercase text-sm mb-4">Complete Package</p>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Full Transformation Program
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg mb-10 max-w-2xl mx-auto">
              Experience the complete transformation process with all four workshops combined. 
              A structured, step-by-step journey from inner healing to building confident, healthy relationships.
            </p>
            
            <div className="flex items-center justify-center gap-4 mb-10">
              <span className="text-muted-foreground/60 line-through text-xl">116 €</span>
              <span className="font-serif text-5xl md:text-6xl font-bold text-foreground">99 €</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
              {["All 4 workshops", "Structured journey", "Save 17 €"].map((item, i) => (
                <span key={i} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-foreground" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 1:1 Coaching */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="w-16 h-16 bg-beige flex items-center justify-center mx-auto mb-8">
            <Users className="w-8 h-8 text-foreground" strokeWidth={1.5} />
          </div>
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
            1:1 Coaching
          </h3>
          <p className="text-muted-foreground leading-relaxed text-lg mb-8">
            For personalized guidance in urgent or complex situations, I offer individual coaching sessions. 
            Work directly on your specific blockages, fears, or emotional patterns in a safe, private space.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Live Sessions", "Email Coaching", "Phone / WhatsApp"].map((format, i) => (
              <span key={i} className="text-sm text-foreground bg-beige-light px-5 py-2">
                {format}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
