import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
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
    step: "1",
    title: "Introduction & Self-Reflection",
    description: "Each topic begins with a clear explanation and a self-assessment to help you understand where you currently stand."
  },
  {
    step: "2",
    title: "Content & Practical Exercises",
    description: "You will receive reading material, tools, and exercises for each topic, along with practical ways to apply what you learn in your daily life."
  },
  {
    step: "3",
    title: "Integration & Application",
    description: "Follow-up exercises and additional self-tests help you integrate the lessons into your everyday routines and see real progress."
  }
]

export function Workshops() {
  return (
    <section id="workshops" className="py-24 md:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">Transformation Journey</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 text-balance">
            Workshops & Programs
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            All workshops can be booked individually, so you can start exactly where you feel you need the most support.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative rounded-2xl overflow-hidden mb-20 aspect-[21/9]">
          <Image
            src="/images/workshop.jpg"
            alt="Personal transformation workshop"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <p className="text-foreground font-serif text-2xl md:text-3xl font-bold text-balance">
              Your journey to transformation starts here
            </p>
          </div>
        </div>

        {/* Workshop Structure */}
        <div className="mb-20">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            How Each Workshop Works
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {workshopStructure.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="font-serif text-lg font-bold text-foreground mb-3">
                  {item.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Individual Workshops */}
        <div className="mb-20">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
            Individual Workshops
          </h3>
          <p className="text-center text-primary font-semibold mb-12">29 € per workshop</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {workshops.map((workshop, index) => (
              <Card key={index} className="p-6 bg-background border-border hover:border-primary/50 transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <workshop.icon className="flex-shrink-0 w-10 h-10 text-primary" strokeWidth={1.5} />
                  <div>
                    <h4 className="font-serif text-lg font-bold text-foreground mb-2">
                      {workshop.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {workshop.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Complete Program Package */}
        <div className="mb-20">
          <Card className="p-8 md:p-12 bg-primary/5 border-primary/20">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  Special Package
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Complete Transformation Program
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Experience the full transformation process with all four workshops combined. 
                  This structured, step-by-step journey supports you from inner healing all the way 
                  to building confident and healthy relationships.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-foreground">
                    <Check className="w-5 h-5 text-primary" />
                    <span>All 4 workshops included</span>
                  </li>
                  <li className="flex items-center gap-2 text-foreground">
                    <Check className="w-5 h-5 text-primary" />
                    <span>Structured transformation journey</span>
                  </li>
                  <li className="flex items-center gap-2 text-foreground">
                    <Check className="w-5 h-5 text-primary" />
                    <span>Deep, sustainable change</span>
                  </li>
                </ul>
              </div>
              <div className="text-center md:text-right">
                <p className="text-muted-foreground line-through text-lg">116 €</p>
                <p className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">99 €</p>
                <p className="text-muted-foreground text-sm mb-6">Save 17 € with the package</p>
                <Link href="/contact">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>

        {/* 1:1 Coaching */}
        <div className="text-center">
          <Users className="w-12 h-12 text-primary mx-auto mb-6" strokeWidth={1.5} />
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
            1:1 Coaching
          </h3>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
            For personalized guidance in urgent or complex situations, I offer individual coaching sessions. 
            Work directly on your specific blockages, fears, or emotional patterns in a safe, private space.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="bg-background border border-border px-4 py-2 rounded-full text-sm text-foreground">Live Sessions</span>
            <span className="bg-background border border-border px-4 py-2 rounded-full text-sm text-foreground">Email Coaching</span>
            <span className="bg-background border border-border px-4 py-2 rounded-full text-sm text-foreground">Phone / WhatsApp</span>
          </div>
          <Link href="/contact">
            <Button variant="outline" className="rounded-full px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Contact for 1:1 Coaching
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
