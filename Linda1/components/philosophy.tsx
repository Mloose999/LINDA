import Image from "next/image"

export function Philosophy() {
  return (
    <section id="philosophy" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wide mb-4 uppercase text-sm">My Approach</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Philosophy & Method
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Discover how powerful your thoughts are and learn to reprogram unconscious beliefs 
            for a life of love, health, and spiritual growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden relative">
              <Image
                src="/images/hourglass.jpg"
                alt="Transformation and Time"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full -z-10" />
          </div>

          <div className="space-y-6">
            <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/30 transition-colors">
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                Subconscious Reprogramming
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Using techniques inspired by Neville Goddard and Dr. Joe Dispenza, I guide you 
                to transform deeply held beliefs that shape your reality.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/30 transition-colors">
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                Holistic Transformation
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                True change happens when mind, body, and spirit align. My approach addresses 
                all aspects of your being for lasting transformation.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border hover:border-primary/30 transition-colors">
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                Practical Application
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Every session includes actionable tools and exercises you can integrate into 
                your daily life for continuous growth and improvement.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <blockquote className="font-serif text-2xl md:text-3xl text-foreground italic max-w-3xl mx-auto">
            &quot;True transformation is not about time, it&apos;s about intention and commitment to change.&quot;
          </blockquote>
          <p className="text-primary font-medium mt-4">— Linda Holtkamp</p>
        </div>
      </div>
    </section>
  )
}
